let music = document.getElementById('music').value;
let displayMusic = document.getElementById('displayMusic');

let musicArray = [];

function listMusic(){
   let musicOBJ = {
        musicID : new Audio(music),
    }

    musicArray.push(musicOBJ)
    displayMusical()
}

function displayMusical(){
    displayMusic.innerHTML = '';

    musicArray.forEach((elem, i)=>{
        displayMusic.innerHTML += `${i + 1}. ${elem.musicID} <button onclick = 'playMusic(${i})'>PLAY</button></br>`
    })
}

function playMusic(i){
    musicArray[i].musicID.play()
}