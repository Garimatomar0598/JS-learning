//what is object
//object ek tarika hai jisse ki hum  ek identity ki details ko ek sath rakh sakte hai

var obj = {};
var obj5 = new Object();

//object literal

const mysym= Symbol("key1");

const JsUser = {
    name: "Garima",
    "full name": "Garima TOMAR",
    [mysym]: "mykey1",
    age:26,
    location:"Delhi",
    isloggedIn: true,
    LastLofinDays: ["Monday", "Saturday"],

}


// console.log(JsUser.location);
// console.log(JsUser.LastLofinDays);
// console.log(JsUser["age"]);
// console.log( JsUser[mysym]);
// console.log(JsUser);


JsUser.greeting = function(){
    //console.log('Hello Js user');

}


JsUser.greetingTwo = function(){

//console.log('Hello Js user 2 ,${this.age}');
    
}

//console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());
//console.log(JsUser.greetingTwo());
//---------------------------------//

// singleton object

//const tinderUser = new Object(); // singleton

const tinderUser = {}    // non-singleton object
tinderUser.id = "123abc";
tinderUser.name = "Garima";
tinderUser.age = 26;
tinderUser.isloggedIn = false;

//console.log(tinderUser);


const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname:"Garima",
            lastname:"Tomar"
        }
    }
}


//console.log(regularUser.fullname?.userfullname.firstname);




const obj1 = {1:"a", 2:"b", 3:"c"};
const obj2 = {4:"d", 5:"e", 6:"f"};


//const obj3 = {obj1,obj2};


   const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);



