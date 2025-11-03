
let myname = "Garima Tomar";

let secondname = "Golu";
secondname = "gattu";


 console.log(secondname);
 console.log(myname);


 let userone = {
    email: "garima@google.com",
    password:"Garima@123",
    upi: "garima@upi",
    name: "Garima",
    age: 26,
    isLoggedIn: false,
    lastLoginDays: 30,      
 }



 let usertwo = userone;

 usertwo.email = "garimatomar@google.com";

 console.log(userone.email);
 console.log(usertwo.email);