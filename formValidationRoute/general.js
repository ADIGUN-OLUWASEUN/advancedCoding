let fullname = document.getElementById("fullname");
let phoneNum = document.getElementById("phoneNum");
let mail = document.getElementById("mail");
let Password1 = document.getElementById("Password1");
let Password2 = document.getElementById("Password2");

let signIn = document.getElementById("signIn");
let goToSignUp = document.getElementById("goToSignUp");
let home = document.getElementById("home");
let goToSignIn = document.getElementById("goToSignIn");

let login = document.getElementById("login");

let displayTable = document.getElementById("displayTable");
let resultSearch = document.getElementById("resultSearch");










let userAccount = JSON.parse(localStorage.getItem("userAccount")) || [];

if (signIn) {
  signIn.addEventListener("click", () => {
    let userdetails = {
      UserName: fullname.value.toLowerCase().trim(),
      userPhoneNum: phoneNum.value.trim(),
      userMail: mail.value.toLowerCase().trim(),
      userPassword1: Password1.value.toLowerCase().trim(),
      userPassword2: Password2.value.toLowerCase().trim(),
    };


    // let smallLetters = 'abcdefghijklmnopqrstuvwxyz'.split(' ');
    // let bigLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(' ');
    // let numbering = '0123456789'.split(' ');

    let hasSmallLetters = false;
    let hasBigLetters = false;
    let hasNumbers = false;

    // let hasSmallLetters = smallLetters.some((el)=>{
    // return  userdetails.userPassword1.includes(el)
    // })

    // let hasBigLetters = bigLetters.some((el)=>{
    // return  userdetails.userPassword1.includes(el)
    // })

    // let hasNumbers = numbering.some((el)=>{
    //  return userdetails.userPassword1.includes(el)
    // })

    for (let i = 0; i < userdetails.userPassword1.length; i++) {
      let char = userdetails.userPassword1[i];
      if (char >= 'a' && char <= 'z') {
        hasSmallLetters = true;
      } else if (char >= 'A' && char <= 'Z') {
        hasBigLetters = true;
      } else if (char >= '0' && char <= '9') {
        hasNumbers = true;
      }
    }

    for (let i = 0; i < userdetails.userPassword2.length; i++) {
      let char = userdetails.userPassword1[i];
      if (char >= 'a' && char <= 'z') {
        hasSmallLetters = true;
      } else if (char >= 'A' && char <= 'Z') {
        hasBigLetters = true;
      } else if (char >= '0' && char <= '9') {
        hasNumbers = true;
      }
    }

   
   


    let mailing =
      userdetails.userMail.includes("@") &&
      userdetails.userMail.includes(".com");

    let checkMail = JSON.parse(localStorage.getItem("userAccount"));

    if (
      userdetails.UserName == "" ||
      userdetails.userPhoneNum == "" ||
      userdetails.userMail == "" ||
      userdetails.userPassword1 == "" ||
      userdetails.userPassword2 == ""
    ) {
      alert("Please, input all fields");
    } else {
      if (userdetails.userPassword1 !== userdetails.userPassword2) {
        alert("Password do not match");
      }else if( !hasSmallLetters || !hasBigLetters || !hasNumbers){
          alert('Password must contain a small letter, a big letter and a number')
      }else if (
        userdetails.userPassword1.length < 8 ||
        userdetails.userPassword2.length < 8
      ) {
        alert("Password must be upto 8 character or more");
      } else if (!mailing) {
        alert("Incorrect mail address");
      } else if (userdetails.userPhoneNum.length != 11) {
        alert("invalid Phone Number");
      } else if (
        checkMail.find((user) => {
          return user.userMail == userdetails.userMail;
        })
      ) {
        alert("Mail already exist");
      } else if (
        checkMail.find((user) => {
          return user.userPhoneNum == userdetails.userPhoneNum;
        })
      ) {
        alert("Phone Number already exist");
      } else {
        userAccount.push(userdetails);
        localStorage.setItem("userAccount", JSON.stringify(userAccount));
        window.location.href = "../signIn/signIn.html";
      }
    }
  });
}

if (goToSignUp) {
  try {
    goToSignUp.addEventListener("click", () => {
      window.location.href = `../signup.html`;
    });
  } catch (error) {
    console.log(error);
  }
}

if (home) {
  home.addEventListener("click", () => {
    if (
      userAccount.find((element) => {
        return element.userMail == mail.value.toLowerCase().trim();
      }) &&
      userAccount.find((element1) => {
        return element1.userPassword1 == Password1.value.toLowerCase().trim();
      })
    ) {
      window.location.href = `../home/home.html`;
    } else if (mail.value == "" || Password1.value == "") {
      alert("Please, input all fields");
    } else alert("Incorrect Mail or Password");
  });
}

if (goToSignIn) {
  try {
    goToSignIn.addEventListener("click", () => {
      window.location.href = `../signIn/signIn.html`;
    });
  } catch (error) {
    console.log(error);
  }
}

if (login) {
  login.addEventListener("click", () => {
    window.location.href = "../signIn/signIn.html";
  });
}

if (displayTable) {
  displayUserAccount(userAccount);
}

if (resultSearch) {
  searchAccount();
}

function displayUserAccount(userAccount) {
  displayTable.innerHTML = "";

  userAccount.forEach(function (userData, i) {
    displayTable.innerHTML += `<tr>
          <td>${i + 1}</td>
          <td>${userData.UserName}</td>
          <td>${userData.userPhoneNum}</td>
          <td>${userData.userMail}</td>
          <td>${userData.userPassword1}</td>
          <td> <button class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
          </tr>`;
  });
}

function deleteData(index) {
  userAccount.splice(index, 1);
  localStorage.setItem("userAccount", JSON.stringify(userAccount));
  displayUserAccount(userAccount);
}

function searchAccount() {
  let search = document.getElementById("searchUser").value.toLowerCase();

  let searchData = userAccount.filter((userData) => {
    return `${userData.UserName}${userData.userPhoneNum}${userData.userMail}${userData.userPassword1}`
      .toLowerCase()
      .includes(search);
  });

  resultSearch.innerHTML = searchData.length ? "" : "Result not found";

  displayUserAccount(searchData);
}

let eyeIcon = document.getElementById("eyeicon");

if (eyeIcon) {
  eyeIcon.addEventListener("click", () => {
    if (Password1.type === "password") {
      Password1.type = "text";
      eyeIcon.src = "eye-open.png";
    } else {
      Password1.type = "password";
      eyeIcon.src = "eye-close.png";
    }
  });
}

let eyeIcon2 = document.getElementById("eyeicon2");

if (eyeIcon2) {
  eyeIcon2.addEventListener("click", () => {
    if (Password2.type === "password") {
      Password2.type = "text";
      eyeIcon2.src = "eye-open.png";
    } else {
      Password2.type = "password";
      eyeIcon2.src = "eye-close.png";
    }
  });
}

let eyeIcon3 = document.getElementById("eyeicon3");

if (eyeIcon3) {
  eyeIcon3.addEventListener("click", () => {
    if (Password1.type === "password") {
      Password1.type = "text";
      eyeIcon3.src = "../eye-open.png";
    } else {
      Password1.type = "password";
      eyeIcon3.src = "../eye-close.png";
    }
  });
}
