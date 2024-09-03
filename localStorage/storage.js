// local storage - allows to save key value pairs in the browser
// local storage stores string(stores data as strings)
// 10mb for local storage
// 5mb for session storage

let namer = 'benjamin';
let user = {
    name: 'ben',
    age : 10
}

//json

// save data
localStorage.setItem('username', namer);
localStorage.setItem('user', JSON.stringify(user));

// get or retrieve data
console.log(localStorage.getItem('username'));

let retrievedUser = JSON.parse(localStorage.getItem('user'))

console.log(retrievedUser);

// delete data

//localStorage.removeItem('username') // remove item by key

// localStorage.clear() // remove all items