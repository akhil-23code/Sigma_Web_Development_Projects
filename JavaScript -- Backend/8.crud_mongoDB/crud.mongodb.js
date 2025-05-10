//CRUD operations

// 1. create and then use the database:
use("CrudDB")
//but the name is still not seen at the stack of databases
// console.log(db);
//enter the collection name
db.createCollection("courses")
//ok now it is visible


// 2. insert - insertOne and insertMany  are the mtds available
/*
db.courses.insertOne({
    name: "sigma web development course",
    price:0
})
db.courses.insertMany([
    {
        "name": "Sigma Web Development Course",
        "price": 0
    },
    {
        "name": "Intro to Python Programming",
        "price": 50
    },
    {
        "name": "Advanced JavaScript Techniques",
        "price": 75
    },
    {
        "name": "Full-Stack Web Development Bootcamp",
        "price": 100
    },
    {
        "name": "Data Science with Python",
        "price": 120
    },
    {
        "name": "Machine Learning Basics",
        "price": 150
    },
    {
        "name": "Digital Marketing Essentials",
        "price": 40
    },
    {
        "name": "Mobile App Development with Flutter",
        "price": 90
    },
    {
        "name": "UI/UX Design Fundamentals",
        "price": 60
    },
    {
        "name": "Introduction to Cloud Computing",
        "price": 110
    }
]
)
*/


// 3. read - findOne and find  are the mtds available
/*
let a = db.courses.find({price:100})
console.log(a);
console.log(a.count());

let b = db.courses.find({price:150})
console.log(b);
//to return all the documents that contain the b
console.log(b.toArray());

//toArray() is for multiple results
let c= db.courses.find({price:0})
console.log(c.toArray());

let d= db.courses.findOne({price:0})
console.log(d);
*/


// 4. update - donot use update, use updateOne and updateMany   
/*  
//update document requires atomic operations i.e { $set:{} }

db.courses.updateOne({price:0},{ $set:{price:1000} })
let e = db.courses.findOne({price:1000})
console.log(e);

db.courses.updateMany({price:0},{ $set:{price:6500} })
let f = db.courses.find({price:6500})
console.log(f);
*/


// 5. delete - deleteOne and deleteMany
/*
db.courses.deleteOne({name:"Digital Marketing Essentials"})
db.courses.deleteMany({price:6500})
*/




// others operations - (for eg: query and projection operators)
// https://www.mongodb.com/docs/manual/reference/operator/
// query and projections - https://www.mongodb.com/docs/manual/reference/operator/query/