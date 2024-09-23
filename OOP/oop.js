// objects - key value pairs
const blogs = []

// class - templates(blueprint) for creating objects
// class user {
//     constructor(name, age, address, password, gender = 'Not specified'){// instantiate an object(creating an instant of a class) and assign(set) properties to the object
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.password = password;
//         this.gender = gender;
//     }
//     displayName(){
//         console.log(this.name);        
//     }
//     displayAge(){
//         console.log(this.age);        
//     }
//     login(userPassword){
//         if (userPassword === this.password) {
//             console.log(`${this.name} has signed in`);            
//         } else {
//             console.log('invalid password');                        
//         }
//     }
//     logout(){
//         console.log(`${this.name} logged out`);
//     }
// }

// class inheritance
// class Admin extends User{
//     constructor(name, age, address, password, gender = 'Not specified', superAdmin = false){
//         super(name, age, address, password, gender)//super constructor - invokes the constructor of our parent class
//         this.superAdmin = superAdmin
//     }
//     addBlog(blogDetails){
//         blogs.push(blogDetails);
//         console.log(blogs);
//     }
//     deleteUser(){
//         console.log('deleted a user');
//     }
//     deleteAdmin(){
//         if(this.superAdmin){
//             console.log('deleted an admin');            
//         } else{
//             console.log('Not authorised to do so');            
//         }
//     }
// } 

// console.log(User);

// ways of creating objects
// 1. object literals{}
let user = {
    age: 27,
    name: 'seun',
    address: 'ibadan',
    displayName: function(){
        console.log(this.name);        
    }
}
console.log(user);

// //2. using a class
// let user2 = new User('oba', 10, 'lag', 'oba10', 'female'); // new - invokes the constructor function
// let user3 = new User('busayo', 10, 'IB', 'busayo10'); // new - invokes the constructor function
// let admin = new Admin('admin', 10, 'adminHouse', 'admin10');
// console.log(user2);
// console.log(user3);
// console.log(admin);

// user2.displayName()
// admin.addBlog({title:'why JS', description: 'why not', datePublished: new Date()})

// this keyword - alone
console.log(this); // this will refer to the global object(window object)

// this - in an object method
let user27 = {
    name: 'seun',
    age: 10,
    displayName : function(){ // anonymous function // object method - property that the value is a function
        console.log(this.name);
    }
}
// displayName(){
//     console.log(user27.name);    
// }
user27.displayName()

// this - in a function
function doSomething(){
    console.log(this); // global object    
}
doSomething()




