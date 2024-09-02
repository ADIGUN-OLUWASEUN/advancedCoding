// let display = document.getElementById('display');
// let displayBtn = document.getElementById('displayBtn');


// function calculateDisplay() {
//     let name = displayBtn.value;
//     display.textContent == name;
// };

// let currentValue = '';


let display = document.getElementById('displayScreen');
let answerScreen = document.getElementById('answerScreen');
let oper;
let firstValue;
let secondValue;
let canClear = false;

function showDisplay(input){
    if (canClear) {
        answerScreen.value = input;
        canClear = false;
    }else{
        answerScreen.value += input; 
    }
};
function displayOperator(operator) {
    if(oper !== undefined){
        calculate2();
    } else{
        firstValue = answerScreen.value;
    }
    oper = operator;
    display.value += firstValue + operator;
    answerScreen.value = '';
    canClear = false;
//     oper = operator;
//    firstValue = answerScreen.value
//   secondValue = answerScreen.value;
//     display.value += answerScreen.value + operator;
//     //  answerScreen.value = '';
//      display.value += '';    
//     canClear = true;
};
function clearDisplay(){
    // display.value = '';
    // answerScreen.value = '';
    // firstValue = '';
    // secondValue = '';   
    display.value = '';
    answerScreen.value = '';
    firstValue = undefined;
    secondValue = undefined;
    oper = undefined;
    canClear = false;
};

function calculate2(){
    secondValue = answerScreen.value;
    let result;

    if(oper === '+'){
        result = Number(firstValue) + Number(secondValue);
    } else if(oper === '-'){
        result = Number(firstValue) - Number(secondValue);
    } else if(oper === '/'){
        result = Number(firstValue) / Number(secondValue);
    } else if(oper === '*'){
        result = Number(firstValue) * Number(secondValue);
    }


    display.value = firstValue + oper + secondValue + '=';
    answerScreen.value = result;   
    canClear = true;

    // display.value += secondValue + '=';
    // firstValue = result.toString();
    // answerScreen.value = result;
    // canClear = true;
};


// function calculate2() {
//     let result;

//     // Convert the secondValue to a number
//     let num2 = Number(answerScreen.value);

//     // Perform the calculation based on the stored operator
//     if (oper === '+') {
//         result = firstValue + num2;
//     } else if (oper === '-') {
//         result = firstValue - num2;
//     } else if (oper === '/') {
//         result = firstValue / num2;
//     } else if (oper === '*') {
//         result = firstValue * num2;
//     }

//     // Update the display with the calculation
//     display.value = firstValue + oper + num2 + '=';

//     // Update answerScreen with the result
//     answerScreen.value = result;

//     // Update firstValue for potential further calculations
//     firstValue = result;

//     // Clear secondValue for the next input
//     secondValue = '';

//     // Allow clearing answerScreen if the next input is a number or a new operation
//     canClear = true;
// }

// function calculate2() {
//     let result;

//     // Convert the secondValue to a number
//     let num2 = Number(answerScreen.value);

//     // Perform the calculation based on the stored operator
//     if (oper === '+') {
//         result = firstValue + num2;
//     } else if (oper === '-') {
//         result = firstValue - num2;
//     } else if (oper === '/') {
//         result = firstValue / num2;
//     } else if (oper === '*') {
//         result = firstValue * num2;
//     }

//     // Display the full expression and result
//     display.value = firstValue + oper + num2 + '=' + result;

//     // Update answerScreen with the result
//     answerScreen.value = result;

//     // Update firstValue for potential further calculations
//     firstValue = result;

//     // Clear secondValue for the next input
//     secondValue = '';

//     // Allow clearing answerScreen if the next input is a number or a new operation
//     canClear = true;
// }













// // Function to calculate the result
// function calculate() {
//     let input = document.getElementById('displayScreen').value;
//     let result;

//     // Splitting the input based on operators
//     let operators = ['+', '-', '*', '/'];
//     let operatorFound = false;

//     // Checking for operators and performing calculations
//     for (let i = 0; i < operators.length; i++) {
//         let operatorIndex = input.indexOf(operators[i]);
//         if (operatorIndex !== -1) {
//             let leftOperand = parseFloat(input.slice(0, operatorIndex));
//             let rightOperand = parseFloat(input.slice(operatorIndex + 1));
//             let operator = input[operatorIndex];

//             if (operator === '+') {
//                 result = leftOperand + rightOperand;
//             } else if (operator === '-') {
//                 result = leftOperand - rightOperand;
//             } else if (operator === '*') {
//                 result = leftOperand * rightOperand;
//             } else if (operator === '/') {
//                 if (rightOperand === 0) {
//                     result = 'Error: Division by zero';
//                 } else {
//                     result = leftOperand / rightOperand;
//                 }
//             }

//             operatorFound = true;
//            // break;
//         }
//     }

//     // If no operator found, or if there's an error, display the input as is
//     if (!operatorFound) {
//         result = input;
//     }

//     // Display the result
//     document.getElementById('answerScreen').value = result;
// }






