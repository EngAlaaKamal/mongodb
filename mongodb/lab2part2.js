use inventory



// Example aggregation query to find the count of books published after a certain date, grouped by categories



db.books.aggregate([

  { $match: { publishedDate: { $gte: ISODate("2002-01-01T00:00:00Z") }}},

  { $unwind: "$categories" }, // Splitting categories array into separate documents

  { 

    $group: { 

      _id: "$categories", // Grouping by categories

      count: { $sum: 1 } // Counting documents in each group

    } 

  },

  { $sort: { count: -1 } } // Sorting by count in descending order

])

  

  //-----------------------------------------------------

  

  db.books.aggregate([

  {

    // Unwind the categories array

    $unwind: "$categories"

  },

  {

    // Project the desired fields

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

    // Add fields using $addFields

    $addFields: {

      firstAuthor: { $arrayElemAt: ["$authors", 0] },

     

    }

  }

])



