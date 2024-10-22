function calculate(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let bmi = (weight / (height * height) * 0.7);

    document.getElementById('heading').innerHTML = 'Your BMI is : ';
    document.getElementById('message').innerHTML = bmi.toFixed(2);


    if(bmi <= 24.9){
        document.getElementById('bmi-output').innerHTML = 'You are underweight'
    } else if (bmi >= 25 && bmi <= 29.9){
        document.getElementById('bmi-output').innerHTML = 'You are a healthy weight'
    } else{
        document.getElementById('bmi-output').innerHTML = 'You are overweight'
    };
    //console.log(bmi);
};

function reload(){
    window.location.reload()
};