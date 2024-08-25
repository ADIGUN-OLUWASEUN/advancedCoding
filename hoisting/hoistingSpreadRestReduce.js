// function hoisting - is the process by which the interpreter moves the function declaration to the top

greet();

function greet() {
    console.log('hello');
    
}

// spread and rest operator - ...

let numbers = [1,2,3,4,5]
let sum = numbers.reduce((a,b)=>{
    return a + b
}, 0)

// rest... - gather elements into a single array
const [a,b,...c] = numbers
console.log(c);


// spread ... - spread content of an array

let evenNumbers = [2,4,6,8]
let oddNumbers = [1,3,5,7]

// let nums =  evenNumbers.concat(oddNumbers)
let nums = [...evenNumbers, ...oddNumbers]

function findSum(...numbers){
    return numbers.reduce((acc, curr)=>{ // acc - accumulator  // curr - current element
        return acc + curr
    }, 0)
}

console.log(findSum(2,4));
console.log(findSum(8,7));
console.log(findSum(2,4,87,56));

let user = {
    name: 'seun',
    age: 10
}

// let user2 = user // deep-copy
let user2 = {...user}
console.log(user2);

user2.name = 'john'
console.log(user2);
console.log(user);

let cart = [{title:'pilot',price:10},{title:'pilot',price:700},{title:'pilot',price:30}]

let cartSum = cart.reduce((acc, curr)=>{
    return acc + curr.price
}, 0)

console.log(cartSum);



