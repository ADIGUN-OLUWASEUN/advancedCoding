let userName = document.getElementById('name');
let userAge = document.getElementById('age');
let userGender = document.getElementById('gender');


let displayTable = document.getElementById('displayTable');
//displayTable.innerHTML = "";

let userDatas = JSON.parse(localStorage.getItem('studentData')) || [];
console.log(userDatas);


function submitData(){
    let userDetails = {
        inputName : userName.value,
        inputAge : userAge.value,
        inputGender : userGender.value,
    }
    
    if(userDetails.inputName == '' || userDetails.inputAge == '' || userDetails.inputGender == 'choose'){
        alert('Enter your full INFO')
    } 
    else {
        // userDatas.push(userDetails); // put the userdetails object at the last position
         userDatas.unshift(userDetails); // put the userdetails object at the first position(zero index)
         userName.value = ''
         userAge.value = ''
         userGender.value = 'choose'
         localStorage.setItem('studentData', JSON.stringify(userDatas))
         displayData(userDatas)
    }
}


function displayData(userDatas){    
    displayTable.innerHTML = "";

    userDatas.forEach(function(userData, i){
        displayTable.innerHTML += `<tr>
        <td>${i + 1}</td>
        <td>${userData.inputName}</td>
        <td>${userData.inputAge}</td>
        <td>${userData.inputGender}</td>
        <td><button class="btn btn-danger"  onclick="deleteData(${i})">Delete</button><button class="btn btn-success"  onclick="editData(${i})">Edit</button></td>
        </tr>`;
    })
}

function deleteData(i){
    userDatas.splice(i, 1)
    localStorage.setItem('studentData', JSON.stringify(userDatas))
    displayData(userDatas)
}

function editData(i){
    userName.value = userDatas[i].inputName;
    userAge.value = userDatas[i].inputAge;
    userGender.value = userDatas[i].inputGender;
    deleteData(i)
}


function searchName(){
      let search = document.getElementById('search').value.toLowerCase();

    let searchUserDatas = userDatas.filter((userData) => {
        return `${userData.inputName}${userData.inputAge}${userData.inputGender}`.toLowerCase().includes(search)
    }) 
        resultSearch.innerHTML = searchUserDatas.length ? '' : 'Result not found';
        displayData(searchUserDatas)
}

window.addEventListener('load', displayData(userDatas))



// function searchName(){
//     let resultSearch = document.getElementById('resultSearch');
//    let search = document.getElementById('search');
//    let searchResult = search.value.toLowerCase();

//    let searchUserDatas = userDatas.filter(function(userData){
//     let newUserData = `${userData.inputName}${userData.inputAge}`.toLowerCase();
//     return newUserData.includes(searchResult)
//    })
//    if(searchUserDatas.length === 0){
//     resultSearch.innerHTML = `Result not found`
//    } else{
//     resultSearch.innerHTML = '';
//    }
//    displayData(searchUserDatas)
// }

// function searchName() {
//     let resultSearch = document.getElementById('resultSearch');
//     let search = document.getElementById('search').value.toLowerCase();
//     let searchUserDatas = [];

//     userDatas.forEach(userData => {
//         let newUserData = `${userData.inputName}${userData.inputAge}`.toLowerCase();
//         if (newUserData.includes(search)) {
//             searchUserDatas.push(userData);
//         }
//     });

//     resultSearch.innerHTML = searchUserDatas.length ? '' : 'Result not found';
//     displayData(searchUserDatas);
// }



// function searchName() {
//     let resultSearch = document.getElementById('resultSearch');
//     let search = document.getElementById('search').value.toLowerCase();
//     let searchUserDatas = [];

//     for (let i = 0; i < userDatas.length; i++) {
//         let newUserData = `${userDatas[i].inputName}${userDatas[i].inputAge}`.toLowerCase();
//         if (newUserData.includes(search)) {
//             searchUserDatas.push(userDatas[i]);
//         }
//     }

//     resultSearch.innerHTML = searchUserDatas.length ? '' : 'Result not found';
//     displayData(searchUserDatas);
// }




