let mins = document.getElementById('mins');
let secs = document.getElementById('secs');
let displayTable = document.getElementById('displayTable');

let minsTime;
let secsTime;

let audio = new Audio("./mixkit-tick-tock-clock-close-up-1059.wav");


let timeArray = [];

startBTN.addEventListener('click', ()=>{
    let timeOBJ = {
        minsINP : +mins.value,
        secsINP : +secs.value
    }

    timeArray.push(timeOBJ)
    displayTime();
})

function displayTime(){
    displayTable.innerHTML = '';

    timeArray.forEach((elem, i)=>{
        displayTable.innerHTML += 
        `
        <td>${i + 1}</td>
        <td><input type = 'number' value = '${elem.minsINP}' disabled id='minsDisplay'></td>
        <td><input type = 'number' value = '${elem.secsINP}' disabled id='secsDisplay'></td>
        <td><button id = 'timerINP' onclick = 'start(${i})'>Start</button></td>
        ` 
    })
}

function start(i){

    minsStore = timeArray[i].minsINP
    secsStore = timeArray[i].secsINP

    let timerINP = document.getElementById('timerINP')

    if (timerINP.textContent == 'Start') {
        timerINP.textContent = 'Stop'
        audio.loop = true;
        audio.play()
        secsTime = setInterval(()=>{
            if (secsStore === 0) {
                clearInterval(secsTime)
            }
            secsDisplay.value = secsStore--;
        }, 1000);
    
        minsTime = setInterval(()=>{
            if (minsStore === 0) {
                clearInterval(minsTime)
            }
            minsDisplay.value = minsStore--;
        }, 60000);
    } else{
        timerINP.textContent = 'Start'
        audio.pause()
        clearInterval(secsTime)
        clearInterval(minsTime)
    }
}


