//const tinderuser=new Object();

const tinderuser={

}
tinderuser.id="123";
tinderuser.name="nirajan";
tinderuser.isLoggedIn=false;
//console.log(tinderuser);

const regularUser={
    email:"nirjan@gmail.com",
    fullName:{
        userFullname:{
            firstName:"nirjan",
            lastName:"Bohara"
        }
    }
}
//console.log(regularUser.fullName);

const obj={1:"a",2:"b",3:"c",4:"d"};
const obj2={5:"e",6:"f",7:"g"}

//const obj3={obj,obj2};

//const obj3=Object.assign(obj,obj2);

const obj3 = { ...obj, ...obj2 };
console.log(obj3);


// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isloggedIn'));

