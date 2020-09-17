window.onload = function() {
  let clock = document.getElementById('clock');
}

function changeTime(){
  let time = new Date().toLocaleTimeString();
  clock.textContent = time;
}

setInterval(changeTime,1000);

