 

 use inventoryDB

  //find count products in each category

db.products.aggregate([

  

  { $group : {_id: '$category' , count:  {$sum:1} } } ,

  { $match : {_id: {$ne:null} } } ,

 

])

  

 

//Display max category products price.  

  

db.products.aggregate([

  

  { $group : {_id: '$category' , maxPrice: {$max:"$price"} } } ,

  { $match : {_id: {$ne:null} } } ,

  

])





 

// display user ahmed orders populated with product

  

db.users.aggregate([

{

    $match: {name: "ahmed"}

},

{

    $lookup: {

        from: "orders",

        localField: "_id",

        foreignField: "userId",

        as: "userorders" }

},

{

    $lookup: {

        from: "products",

        localField: "orders.productsIds",

        foreignField: "_id",

        as: "userproducts"

    }

},

    

])

//max price

db.users.aggregate([

    {

        $match: {

            name: "ahmed"

        }

    },

    {

        $lookup: {

            from: "orders",

            localField: "_id",

            foreignField: "userId",

            as: "userorders"

        }

    },

    {

        $unwind: "$userorders"

    },

    {

        $lookup: {

            from: "products",

            localField: "userorders.productsIds",

            foreignField: "_id",

            as: "userproducts"

        }

    },

    {

        $unwind: "$userproducts"

    },

    {

        $group: {

            _id: {

                userId: "$_id",

                orderId: "$userorders._id"

            },

            maxtotalPrice: {

                $sum: {

                    $multiply: ["$userproducts.price", "$userproducts.quantity"]

                }

            }

        }

    },

    {

     $sort: {

      maxtotalPrice: -1

    }

  },

   

  {

    $limit: 1

  }

])

    

 

  

  

  

  

  

  

  

