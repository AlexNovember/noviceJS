

// const obj = {
//     "first_name": "John",
//     "last_name": "Smith",
//     "location": "London"
// }

// const s = JSON.stringify(obj);
// const a = JSON.parse(s);
// console.log(s);
// console.log(a);
// console.log(obj.first_name);

const obj = '{"first_name" : "John", "last_name" : "Smith", "location" : "London"}';
// const data = JSON.parse(s);
const s = JSON.stringify(obj)
console.log(s);
const obj1 = JSON.parse(s);
console.log(obj1);
document.getElementById("user").innerHTML = "Name: " + obj.first_name + " " + obj1.last_name + "<br>" + "Location: " + obj1.location;