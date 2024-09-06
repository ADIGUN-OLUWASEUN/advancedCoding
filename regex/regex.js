// RegEx - Regular expression
// regex - a sequence of characters that specifics a watch patter.

// synatx{
// /pattern/modifier(s)
// }
// let regexPattern = /ben/i;
// let regexPattern2 = new RegExp('ben', 'i')
// console.log(regexPattern2);

// let str = 'Ben'

// console.log(regexPattern.test(str))

// regex methods
// test - test for a match in a string. returns true or false

// modifiers

// g - global match(find all)
// i - perform case-insentitive matching

// quantifiers

// + - n+ - one or more instances of 'n'
// * - n* - zero or more instances of
// ? - n? - zero or one instance of 'n'
// ^ - ^n - start with 'n'

function verifyNum() {
  let phoneNum = document.getElementById("phoneNum").value;
  let phoneMail = document.getElementById('phoneMail').value;
  let display = document.getElementById('display');
  let displayMail = document.getElementById('displayMail');
  let regexPattern1 = /^\+234[0-9]{10}$/;
  let regexPattern2 = /^234[0-9]{10}$/;
  let regexPattern3 = /^[0-9]{11}$/;
  let regMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  if(regexPattern1.test(phoneNum) || regexPattern2.test(phoneNum) || regexPattern3.test(phoneNum)){
    display.textContent = '✔️✔️✔️' // window + .
  }else{
    display.textContent = 'Phone Num is Incorrect'
    return
  }

  if(regMail.test(phoneMail)){
    displayMail.textContent = '✔️✔️✔️'
  } else{
    displayMail.textContent = 'Not a valid mail'
    return
  }

  // create account
  alert('account created')
  // window.location.href = './signin.html'

//   console.log(regexPattern3.test(phoneNum));

//   if(regexPattern3.test(phoneNum) == true){
//         display.textContent = 'Phone Num is correct'
//   } else if(regexPattern3.test(phoneNum) == false){
//     display.textContent = 'Phone Num is Incorrect'
//   }

}
