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
    console.log('Hello Js user');

}


JsUser.greetingTwo = function(){

console.log('Hello Js user 2 ,${this.age}');
    
}

//console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());
//console.log(JsUser.greetingTwo());
//---------------------------------//







