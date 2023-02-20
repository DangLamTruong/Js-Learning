function setTime() {
    let nowTime = new Date();
    time = ` ${nowTime.getDate()} / ${nowTime.getMonth() + 1} / ${nowTime.getFullYear()} 
    ${nowTime.getHours()}:${nowTime.getMinutes()}:${nowTime.getSeconds()}`;
    document.getElementById("time").textContent = time;
  }
  
  let myOclock = setInterval(setTime, 1000);
  