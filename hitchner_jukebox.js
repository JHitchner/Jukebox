
var playBtn = document.querySelector("#play");
var pauseBtn = document.querySelector("#pause");
var backBtn = document.querySelector("#back");
var nextBtn = document.querySelector("#next");

var audio = document.querySelector("#audio");

function Jukebox() {
  this.list = [];
  this.index = 0;
  this.currentSong = audio[this.index]
  // this.list[this.index]
//    // the code for what happens when you create a Jukebox object
//    //  goes here
 }

 // defines the Jukebox prototype object
 
Jukebox.prototype.start = function () {
  this.currentSong = this.list[this.index];
  console.log(currentSong)
  console.log("I am playing")
}

Jukebox.prototype.stop = function () {
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
   audio.play()
   console.log("i was clicked")
  //  jukebox.play(this.index);
   // prevents link from going to the next page
   event.preventDefault()
})
    //
  pauseBtn.addEventListener("click", function(event){
     audio.pause();
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
