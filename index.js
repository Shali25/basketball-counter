let homeScore = 0;
let awayScore = 0;
let homeCount = document.getElementById("home-score");
let awayCount = document.getElementById("away-score");

let homeBtnOne = document.getElementById("home-plus-one");
let homeBtnTwo = document.getElementById("home-plus-two");
let homeBtnThree = document.getElementById("home-plus-three");
let awayBtnOne = document.getElementById("away-plus-one");
let awayBtnTwo = document.getElementById("away-plus-two");
let awayBtnThree = document.getElementById("away-plus-three");
let resetBtn = document.getElementById("reset");

let home = document.getElementById("home-box");
let away = document.getElementById("away-box");

homeBtnOne.addEventListener("click", function () {
  homeScore += 1;
  homeCount.textContent = homeScore;
  winning();
});

homeBtnTwo.addEventListener("click", function () {
  homeScore += 2;
  homeCount.textContent = homeScore;
  winning();
});

homeBtnThree.addEventListener("click", function () {
  homeScore += 3;
  homeCount.textContent = homeScore;
  winning();
});

awayBtnOne.addEventListener("click", function () {
  awayScore += 1;
  awayCount.textContent = awayScore;
  winning();
});

awayBtnTwo.addEventListener("click", function () {
  awayScore += 2;
  awayCount.textContent = awayScore;
  winning();
});

awayBtnThree.addEventListener("click", function () {
  awayScore += 3;
  awayCount.textContent = awayScore;
  winning();
});

resetBtn.addEventListener("click", function () {
  homeScore = 0;
  homeCount.textContent = homeScore;
  awayScore = 0;
  awayCount.textContent = awayScore;
  winning();
});

function winning() {
  if (homeScore > 0 || awayScore > 0) {
    if (homeScore > awayScore) {
      home.className = "win";
      away.className = "";
    } else if (awayScore > homeScore) {
      away.className = "win";
      home.className = "";
    } else {
      away.className = "";
      home.className = "";
    }
  }
}

/* this is a comment /*