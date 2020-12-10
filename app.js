function generateDate(){
    let mounth = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    current_mounth = mounth[m-1];
    let data = document.querySelector("#date");
    data.innerHTML = d + " - " + current_mounth  + " - " + y;
}
function generateCountdown(){
    // Set the date we're counting down to
    let countDownDate = new Date("Dec 25, 2020 00:00:00").getTime();

    // Update the count down every 1 second
    let x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    //let countDown = document.querySelector("#countdown");
    //countDown.innerHTML = days + ": " + hours + ": "+ minutes + ": " + seconds;
    if (distance < 0) {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("end").style.display = "block";
    }
    else{
        let timeDays= document.querySelector("#days");
        timeDays.innerHTML = days + ":"
        let timeHours= document.querySelector("#hours");
        timeHours.innerHTML = hours + ":"
        let timeMinutes= document.querySelector("#minutes");
        timeMinutes.innerHTML = minutes + ":"
        let timeSeconds= document.querySelector("#seconds");
        timeSeconds.innerHTML = seconds

        let wordDays= document.querySelector("#wordDays");
        wordDays.innerHTML = "Giorni"
        let wordHours= document.querySelector("#wordHours");
        wordHours.innerHTML = "Ore"
        let wordMinutes= document.querySelector("#wordMinutes");
        wordMinutes.innerHTML = "Minuti"
        let wordSeconds= document.querySelector("#wordSeconds");
        wordSeconds.innerHTML = "Secondi"
    }

    // If the count down is finished, write some text
    
    }, 1000);
}
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
      window.setTimeout(callback, 1000 / 60);
  };
  window.requestAnimationFrame = requestAnimationFrame;
})();


var flakes = [],
  canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  flakeCount = 400,
  mX = -100,
  mY = -100

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

function snow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < flakeCount; i++) {
      var flake = flakes[i],
          x = mX,
          y = mY,
          minDist = 150,
          x2 = flake.x,
          y2 = flake.y;

      var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
          dx = x2 - x,
          dy = y2 - y;

      if (dist < minDist) {
          var force = minDist / (dist * dist),
              xcomp = (x - x2) / dist,
              ycomp = (y - y2) / dist,
              deltaV = force / 2;

          flake.velX -= deltaV * xcomp;
          flake.velY -= deltaV * ycomp;

      } else {
          flake.velX *= .98;
          if (flake.velY <= flake.speed) {
              flake.velY = flake.speed
          }
          flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
      }

      ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
      flake.y += flake.velY;
      flake.x += flake.velX;
          
      if (flake.y >= canvas.height || flake.y <= 0) {
          reset(flake);
      }


      if (flake.x >= canvas.width || flake.x <= 0) {
          reset(flake);
      }

      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      ctx.fill();
  }
  requestAnimationFrame(snow);
};

function reset(flake) {
  flake.x = Math.floor(Math.random() * canvas.width);
  flake.y = 0;
  flake.size = (Math.random() * 3) + 2;
  flake.speed = (Math.random() * 1) + 0.5;
  flake.velY = flake.speed;
  flake.velX = 0;
  flake.opacity = (Math.random() * 0.5) + 0.3;
}

function init() {
  for (var i = 0; i < flakeCount; i++) {
      var x = Math.floor(Math.random() * canvas.width),
          y = Math.floor(Math.random() * canvas.height),
          size = (Math.random() * 3) + 2,
          speed = (Math.random() * 1) + 0.3,
          opacity = (Math.random() * 0.5) + 0.3;

      flakes.push({
          speed: speed,
          velY: speed,
          velX: 0,
          x: x,
          y: y,
          size: size,
          stepSize: (Math.random()) / 30,
          step: 0,
          opacity: opacity
      });
  }

  snow();
};

canvas.addEventListener("mousemove", function(e) {
  mX = e.clientX,
  mY = e.clientY
});

window.addEventListener("resize",function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

init();

generateDate()
generateCountdown()