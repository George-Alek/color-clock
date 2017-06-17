function time() {
  var currentTime = new Date();
  var hour = currentTime.getHours();
  if (hour > 12){
    hour = "0" + (currentTime.getHours() - 12);
  }
  var minute = currentTime.getMinutes();
  if (minute <10) {
    minute = "0" + currentTime.getMinutes();
  }
  var second = currentTime.getSeconds();
  if (second < 10){
    second = "0" + currentTime.getSeconds();
  }
  // console.log(hour,minute,second);

  document.getElementsByClassName("clock")[0].innerHTML = `${hour}:${minute}:${second}`;
  document.getElementsByClassName("wrapper")[0].style.backgroundColor = "#" + hour + minute + second;
  // console.log("#" + hour + minute + second)
}

setInterval(time,1000)
