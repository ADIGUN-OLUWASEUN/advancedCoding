// array - store multiple values in a specific order

let arr = [1,2,3,4,5]
// access element in an array - nameofthearray[index]
console.log(arr[0]);

// add new element to the end of an array
arr.push(6);
console.log(arr);

// add new element to the begginning of an array
arr.unshift('beginning')
console.log(arr);

// remove the last element in the array
arr.pop();
console.log(arr);

//shift - remove the first element in the array
arr.shift();
console.log(arr);

// loops - repeat code a limited number of times

// for loop
for (let index = 0; index < arr.length; index++){
    console.log(arr[index]);
}

// while loop - only run when condition is met
let index = 5;
while(index < arr.length){
    console.log(arr[index]);
    index++;
}

// do while loop - run atleast once
let i = 5;
do{
    console.log(arr[i]);
    i++
}while(i < arr.length)
