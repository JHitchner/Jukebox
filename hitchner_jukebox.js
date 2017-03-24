
var playBtn = document.querySelector("#play");
var pauseBtn = document.querySelector("#pause");
var backBtn = document.querySelector("#back");
var nextBtn = document.querySelector("#next");

var audio = document.querySelectorAll(".audio");

console.log(audio.length);


function Jukebox() {
  // this.list = [];
  this.index = 0;
  this.currentSong = audio[this.index];
 }

 // defines the Jukebox prototype object

Jukebox.prototype.start = function () {
  this.currentSong = audio[this.index];
  console.log(this.currentSong);
  this.currentSong.play();
}

Jukebox.prototype.stop = function () {
  this.currentSong.pause();
 };

Jukebox.prototype.back = function () {
   this.currentSong.pause();
   this.currentSong.currentTime = 0;
// code for moving back a song here
  // for( var i = 0; i < this.currentSong.length; i++)
  if(this.index - 1 < 0){
    this.index = audio.length - 1;
    this.currentSong.play();
  }else{
    this.currentSong = audio[this.index - 1];
    this.currentSong.play();
    this.index--;
  };
}
Jukebox.prototype.next = function () {
  this.currentSong.pause();
  this.currentSong.currentTime = 0;
  this.currentSong = audio[this.index + 1]
  if(this.index + 1 >= audio.length){
    this.currentSong = audio[0]
    this.currentSong.play();
  }else{
    this.index++;
    this.currentSong.play();
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
pauseBtn.addEventListener("click", function(event){
  jukebox.stop();
  event.preventDefault();
  console.log("i was clicked_pause");
})
backBtn.addEventListener("click", function(event){
  jukebox.back();
  console.log("I was clicked_back");
  event.preventDefault();
})
nextBtn.addEventListener("click", function(event){
  jukebox.next();
  console.log("I was clicked_next");
  event.preventDefault();
})
