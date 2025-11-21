const mongoose = require('mongoose');

main().then(()=> {
    console.log("connetion is succesful");
}) .catch( err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/collage');
}

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
});

const Student = mongoose.model("Student", studentSchema);

//-----------Insert data in db------------


//Method -1 using save()

// const s1 = new Student({
//     name : "pritidn",
//     age: 20,
//     city: "bhopal"
// })
// s1.save()     //-----> return promise

// .then( res => { console.log(res)})
// .catch( err => {console.log(err)});

//Method- 2 insert create()

// Student.create({
//     name: "ratindra",
//     age: 21,
//     city: "betul"
// })

// .then( res => { console.log(res)})
// .catch( err => {console.log(err)});



// Student.insertMany([
//     {name: "navo" , age: 20, city: "harda"},
//     {name: "nihar", age: 25, city: "betul" },
//     {name: "mohit", age: 21, city: "balaghat"}
// ])
// .then( (res) => {
//     console.log(res);
// });


// //find funct
// Student.find({ age : {$gt: 20}})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

//find by id

Student.findById("691f413c19101abde9b6e0a5")
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});