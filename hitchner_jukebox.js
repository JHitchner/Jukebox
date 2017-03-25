
// show and search songs in html form
// fix the button next and previous
// create a stop button
var playBtn = document.querySelector("#play");
var pauseBtn = document.querySelector("#pause");
var stopBtn = document.querySelector("#stop");
var backBtn = document.querySelector("#back");
var nextBtn = document.querySelector("#next");
var titles = document.querySelector("#songTitle")
var audio = document.querySelectorAll(".audio");

console.log(audio.length);

var songNames =["Fan Song", "Dragonborn", "Thunderhorse"];


function Jukebox() {
  this.index = 0;
  this.currentSong = audio[this.index];
  this.title = songNames[this.index];
 }
 // defines the Jukebox prototype object

Jukebox.prototype.start = function () {
  this.currentSong.play();
  console.log(this.currentSong)
  console.log(songNames[this.index])
}
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
    console.log(audio[this.index]);
    console.log(songNames[this.index]);
  }else if(this.index - 1 < 0){
      this.index = audio.length - 1
      this.currentSong = audio[this.index];
      this.currentSong.play();
      console.log(audio[this.index]);
      console.log(songNames[this.index]);
    }
}
Jukebox.prototype.next = function () {
  this.currentSong.pause();
  this.currentSong.currentTime = 0;
  if (this.index + 1 < audio.length){
    this.index++;
    this.currentSong = audio[this.index];
    this.currentSong.play();
    console.log(audio[this.index])
    console.log(songNames[this.index]);
  }else if(this.index + 1 == audio.length){
    this.index = 0;
    this.currentSong = audio[this.index]
    this.currentSong.play();
    console.log(audio[this.index]);
    console.log(songNames[this.index]);
  }
};

var jukebox = new Jukebox();


 // adds an event listener for when you click the play button
playBtn.addEventListener("click", function(event){
   jukebox.start();
   console.log("i was clicked");
  //  jukebox.play(this.index);
   event.preventDefault()
})
stopBtn.addEventListener("click", function(event){
  jukebox.stop();
  event.preventDefault();
  console.log("i was clicked stop")
})
pauseBtn.addEventListener("click", function(event){
  jukebox.pause();
  event.preventDefault();
  console.log("i was clicked pause");
})
backBtn.addEventListener("click", function(event){
  jukebox.back();
  console.log("i was clicked_back");
  event.preventDefault();
})
nextBtn.addEventListener("click", function(event){
  jukebox.next();
  console.log("i was clicked next");
  event.preventDefault();
})
