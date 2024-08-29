let displayTime = document.getElementById('displayTime');

setInterval(()=>{
    displayTime.textContent = new Date().toLocaleTimeString();
},1000);
