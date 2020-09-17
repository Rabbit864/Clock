window.onload = function() {
  let clock = document.getElementById('clock');
  setInterval(changeTime,1000);
}

function changeTime(){
  let time = new Date().toLocaleTimeString();
  clock.textContent = time;
}



