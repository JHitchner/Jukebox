
// show and search songs in html form
var playBtn = document.querySelector("#play");
var pauseBtn = document.querySelector("#pause");
var stopBtn = document.querySelector("#stop");
var backBtn = document.querySelector("#back");
var nextBtn = document.querySelector("#next");
var titles = document.querySelector("#songTitle")
var audio = document.querySelectorAll(".audio");
// var photos = document.querySelectorAll(".covers");

var songNames =["FanSong: Dethklok", "Dragonborn: Jeremy Soule", "Thunderhorse: Dethklok", "Awaken: Dethklok"];

function Jukebox() {
  this.index = 0;
  this.currentSong = audio[this.index];
  this.title = songNames[this.index];
  // this.image = photos[this.index];
};
 // defines the Jukebox prototype object

Jukebox.prototype.start = function () {
  this.currentSong.play();
  titles.innerHTML = songNames[this.index];
};
Jukebox.prototype.pause = function () {
  this.currentSong.pause();
};
Jukebox.prototype.stop = function (){
  this.currentSong.pause();
  this.currentSong.currentTime = 0;
};

Jukebox.prototype.back = function () {
  this.currentSong.pause();
  this.currentSong.currentTime = 0;
  if (this.index - 1 >= 0){
    this.index--;
    this.currentSong = audio[this.index];
    this.currentSong.play();
    titles.innerHTML = songNames[this.index];
  }else if(this.index - 1 < 0){
    this.index = audio.length - 1
    this.currentSong = audio[this.index];
    this.currentSong.play();
    titles.innerHTML = songNames[this.index];
  };
};
Jukebox.prototype.next = function () {
  this.currentSong.pause();
  this.currentSong.currentTime = 0;
  if (this.index + 1 < audio.length){
    this.index++;
    this.currentSong = audio[this.index];
    this.currentSong.play();
    titles.innerHTML = songNames[this.index];
  }else if(this.index + 1 == audio.length){
    this.index = 0;
    this.currentSong = audio[this.index]
    this.currentSong.play();
    console.log(audio[this.index]);
    titles.innerHTML = songNames[this.index];
  };
};

var jukebox = new Jukebox();

playBtn.addEventListener("click", function(event){
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
  jukebox.start();
  // console.log("i was clicked");
  event.preventDefault();
});
stopBtn.addEventListener("click", function(event){
  jukebox.stop();
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
  event.preventDefault();
  // console.log("i was clicked stop")
});
pauseBtn.addEventListener("click", function(event){
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
  jukebox.pause();
  event.preventDefault();
  // console.log("i was clicked pause");
});
backBtn.addEventListener("click", function(event){
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
  jukebox.back();
  // console.log("i was clicked back");
  event.preventDefault();
});
nextBtn.addEventListener("click", function(event){
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
  jukebox.next();
  // console.log("i was clicked next");
  event.preventDefault();
});
