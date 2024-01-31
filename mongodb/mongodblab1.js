
use FacultySystemDB

db.student.insertOne({
  FirstName: "Alaa",
  LastName: "Kamal",
  Age: 26,
  Faculty: { Name: "Engineering", Address: "el qahera" },
  Grades: [
    { CourseName: "Math", Grade: 90, Pass: true },
    { CourseName: "History", Grade: 85, Pass: true }
  ],
  IsFired: true
})

db.student.insertOne({
  FirstName: "Abeer",
  LastName: "Ayash",
  Age: 26,
  Faculty: { Name: "Engineering", Address: "elsharqia" },
  Grades: [
    { CourseName: "Mongo", Grade: 40, Pass: false },
    { CourseName: "History", Grade: 85, Pass: true }
  ],
  IsFired: false
})



db.student.insertMany([
  {
  FirstName: "aya",
  LastName: "ghonem",
  Age: 20,
  Faculty: { Name: "Engineering", Address: "ismailia" },
  Grades: [
    { CourseName: "c++", Grade: 70, Pass: true },
    { CourseName: "oop", Grade: 65, Pass: true }
  ],
  IsFired: false
},
  {
  FirstName: "Mohammed",
  LastName: "ahmed",
  Age: 23,
  Faculty: { Name: "Engineering", Address: "Menia" },
  Grades: [
    { CourseName: "Math", Grade: 50, Pass: true },
    { CourseName: "physics", Grade: 95, Pass: true }
  ],
  IsFired: false
},
{
  FirstName: "kamal",
  LastName: "Ali",
  Age: 30,
  Faculty: { Name: "Engineering", Address: "ismailia" },
  Grades: [
    { CourseName: "Elctronic", Grade: 90, Pass: true },
    { CourseName: "Signal", Grade: 85, Pass: true }
  ],
  IsFired: true
},
])



db.student.find({})  

db.student.find({ FirstName: "Mohammed" })

db.student.find({ $or: [{ FirstName: "Alaa" }, { LastName: "Kamal" }] })

db.student.find({ FirstName: { $ne: "Ahmed" } })

db.student.find({ Age: { $gte: 21 }, "Faculty": { $ne: null } } )


db.student.update({ FirstName: "Aya" }, { $set: { LastName: "Kamal" } })


db.student.deleteMany({ IsFired: true })


db.student.drop()


db.dropDatabase()



db.dropDatabase()



