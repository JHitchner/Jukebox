// targets the play button from the page and
//  stores a reference to it in the playButton variable
// this play button has global scope
var playBtn = document.querySelector("#play");
var pauseBtn = document.querySelector("#pause");
var backBtn = document.querySelector("#back");
var nextBtn = document.querySelector("#next");

var mySongs = document.querySelectorAll("audio")

 // defines the Jukebox object
function Jukebox() {
  this.list = [ "song1", "song2","song3"];
  this.index = 0;
  this.currentSong = this.list[this.index]
   // the code for what happens when you create a Jukebox object
   //  goes here
 }

 // defines the Jukebox prototype object
Jukebox.prototype.play = function () {
   this.currentSong = this.list[this.index];
   console.log(this.currentSong);
 }

Jukebox.prototype.pause = function () {
// code for stopping song here
  console.log("I am paused")
 };

Jukebox.prototype.back = function () {
// code for moving back a song here
  this.currentSong = this.list[this.index - 1];
  if(this.index - 1 < 0){
    this.index = this.list.length - 1
    console.log(this.list[this.index]);
}else if( this.index - 1 >= 0){
    console.log(this.currentSong)
    this.index = this.index - 1
  };
}
Jukebox.prototype.next = function () {
  this.currentSong = this.list[this.index + 1]
  if(this.index + 1 >= this.list.length){
    this.index = 0;
    console.log(this.list[this.index])
  }else if (this.index + 1 < this.list.length){
  console.log(this.currentSong)
  this.index++
  }
};

 // the rest of your prototype methods would go here

 // creates a new Jukebox object
 // this variable has global scope after this point
 var jukebox = new Jukebox();


 // adds an event listener for when you click the play button
 playBtn.addEventListener("click", function(event){
   jukebox.play(this.index);
   // prevents link from going to the next page
   event.preventDefault()
    })
   pauseBtn.addEventListener("click", function(event){
     jukebox.pause();
     event.preventDefault()
   })
   backBtn.addEventListener("click", function(event){
     jukebox.back(this.index);
     event.preventDefault()
   })
   nextBtn.addEventListener("click", function(event){
     jukebox.next();
     event.preventDefault()
   })

   // the rest of the code
   //  for what happens when you click the play button goes here

   // uses the jukebox object to play the music file



 // the rest of your event listeners would go here
