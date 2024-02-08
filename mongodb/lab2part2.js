use inventory



// Example aggregation query to find the count of books published after a certain date, grouped by categories



db.books.aggregate([

  { $match: { publishedDate: { $gte: ISODate("2002-01-01T00:00:00Z") }}},

  { $unwind: "$categories" },  

  { 

    $group: { 

      _id: "$categories",  

      count: { $sum: 1 }  

    } 

  },

  { $sort: { count: -1 } }  

])

  

  //-----------------------------------------------------

  

  db.books.aggregate([

  {

    

    $unwind: "$categories"

  },

  {

    

    $project: {

      _id: 1,

      title: 1,

      isbn: 1,

      publishedDate: { $dateToString: { format: "%Y-%m-%d", date: "$publishedDate" } },

      authors: 1,

      categories: 1,

      pageCount: 1

    }

  },

  {

 

    $addFields: {

      firstAuthor: { $arrayElemAt: ["$authors", 0] },

     

    }

  }

])



