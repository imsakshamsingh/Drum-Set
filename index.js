// document.querySelector("button").addEventListener("click",handleClick);
//if we use handleClick() then this function will be called as soon as page is loaded up

// another way using anonymous function
// document.querySelector("button").addEventListener("click",function(){
//   alert("got  clicked");
// }
// );
// var audio = new Audio("sounds/snare.mp3");
// audio.play();
var button = []
button = document.querySelectorAll(".drum");


for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {

    var keyPressed = this.innerHTML;
    makeSound(keyPressed);
  });
}


document.addEventListener("keydown", function(event) {
  var keyPressed = event.key;

  makeSound(keyPressed);
});

function makeSound(keyPressed) {
  var audios = ["sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3",
    "sounds/snare.mp3", "sounds/crash.mp3", "sounds/kick-bass.mp3"
  ];
  switch (keyPressed) {
    case "w":
      pathToAudio = audios[0];
      var audio = new Audio(pathToAudio)
      audio.play();
      break;

    case "a":
      pathToAudio = audios[1];
      var audio = new Audio(pathToAudio)
      audio.play();
      break;
    case "s":
      pathToAudio = audios[2];
      var audio = new Audio(pathToAudio)
      audio.play();
      break;
    case "d":
      pathToAudio = audios[3];
      var audio = new Audio(pathToAudio)
      audio.play();
      break;
    case "j":
      pathToAudio = audios[4];
      var audio = new Audio(pathToAudio)
      audio.play();
      break;
    case "k":
      pathToAudio = audios[5];
      var audio = new Audio(pathToAudio)
      audio.play();
      break;
    case "l":
      pathToAudio = audios[6];
      var audio = new Audio(pathToAudio)
      audio.play();
      break;
    default:
      console.log("invalid key");

  }
  if (keyPressed == "w");
  if (keyPressed == "a")
    if (keyPressed == "s") pathToAudio = audios[2];
  if (keyPressed == "d") pathToAudio = audios[3];
  if (keyPressed == "j") pathToAudio = audios[4];
  if (keyPressed == "k") pathToAudio = audios[5];
  if (keyPressed == "l") pathToAudio = audios[6];

}
