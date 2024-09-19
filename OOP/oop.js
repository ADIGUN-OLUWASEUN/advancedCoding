// objects - key value pairs
const blogs = []

// class - templates(blueprint) for creating objects
class user {
    constructor(name, age, address, password, gender = 'Not specified'){// instantiate an object(creating an instant of a class) and assign(set) properties to the object
        this.name = name;
        this.age = age;
        this.address = address;
        this.password = password;
        this.gender = gender;
    }
    displayName(){
        console.log(this.name);        
    }
    displayAge(){
        console.log(this.age);        
    }
    login(userPassword){
        if (userPassword === this.password) {
            console.log(`${this.name} has signed in`);            
        } else {
            console.log('invalid password');                        
        }
    }
    logout(){
        console.log(`${this.name} logged out`);
    }
}

// class inheritance
class Admin extends User{
    constructor(name, age, address, password, gender = 'Not specified', superAdmin = false){
        super(name, age, address, password, gender)//super constructor - invokes the constructor of our parent class
        this.superAdmin = superAdmin
    }
    addBlog(blogDetails){
        blogs.push(blogDetails);
        console.log(blogs);
    }
    deleteUser(){
        console.log('deleted a user');
    }
    deleteAdmin(){
        if(this.superAdmin){
            console.log('deleted an admin');            
        } else{
            console.log('Not authorised to do so');            
        }
    }
} 

console.log(User);
