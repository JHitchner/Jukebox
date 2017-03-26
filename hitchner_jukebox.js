
// My Buttons
var playBtn = document.querySelector("#play");
var pauseBtn = document.querySelector("#pause");
var stopBtn = document.querySelector("#stop");
var backBtn = document.querySelector("#back");
var nextBtn = document.querySelector("#next");

// My song array and song names
var titles = document.querySelector("#songTitle")
var audio = document.querySelectorAll(".audio");
var songNames =["FanSong: Dethklok", "Thunderhorse: Dethklok", "Awaken: Dethklok"];

function Jukebox() {
  this.index = 0;
  this.currentSong = audio[this.index];
  this.title = songNames[this.index];
};
// Play function
Jukebox.prototype.start = function () {
  this.currentSong.play();
  titles.innerHTML = songNames[this.index];
};
// Pause function
Jukebox.prototype.pause = function () {
  this.currentSong.pause();
};
// Stop: Pause and reset song time to beginning
Jukebox.prototype.stop = function() {
  this.currentSong.pause();
  this.currentSong.currentTime = 0;
};
// Go back one song
Jukebox.prototype.back = function() {
  this.currentSong.pause();
  this.currentSong.currentTime = 0;
// If index - 1 is greater than zero then move down array
// by one. Play that song and set the innerHTML to that song.
  if (this.index - 1 >= 0) {
    this.index--;
    this.currentSong = audio[this.index];
    this.currentSong.play();
    titles.innerHTML = songNames[this.index];
// If index - 1 is less than 0 go to the end of the array
// Play that song and set innerHTML to that song.
  }else if(this.index - 1 < 0) {
    this.index = audio.length - 1
    this.currentSong = audio[this.index];
    this.currentSong.play();
    titles.innerHTML = songNames[this.index];
  };
};
// Go forward one song
Jukebox.prototype.next = function() {
  this.currentSong.pause();
  this.currentSong.currentTime = 0;
// If index + 1 is less than the length of my array move up
// by one. Play that song and set innerHTML to that song.
  if (this.index + 1 < audio.length) {
    this.index++;
    this.currentSong = audio[this.index];
    this.currentSong.play();
    titles.innerHTML = songNames[this.index];
// If index + 1 equals audio length go to beginning of array.
  }else if(this.index + 1 == audio.length) {
    this.index = 0;
    this.currentSong = audio[this.index]
    this.currentSong.play();
    titles.innerHTML = songNames[this.index];
  };
};

var jukebox = new Jukebox();
// Function to hide play button when pause is clicked
function hidePlay() {
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
};
// Function to hide pause button when play is clicked
function hidePause() {
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
};

playBtn.addEventListener("click", function(event) {
  hidePlay();
  jukebox.start();
  event.preventDefault();
});
stopBtn.addEventListener("click", function(event) {
  jukebox.stop();
  hidePause();
  event.preventDefault();
});
pauseBtn.addEventListener("click", function(event) {
  hidePause();
  jukebox.pause();
  event.preventDefault();
});
backBtn.addEventListener("click", function(event) {
  hidePlay();
  jukebox.back();
  event.preventDefault();
});
nextBtn.addEventListener("click", function(event){
  hidePlay();
  jukebox.next();
  event.preventDefault();
});
