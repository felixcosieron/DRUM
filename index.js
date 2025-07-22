

var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrumButtons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    

        var buttonInnerHTML = this.innerHTML;
     switch (buttonInnerHTML) {
        case "w":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        buttonAnimation(buttonInnerHTML);
        break;
        case "a":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        buttonAnimation(buttonInnerHTML);
        break;
        case "s":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        buttonAnimation(buttonInnerHTML);
        break;
        case "d":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        buttonAnimation(buttonInnerHTML);
        break;
        case "j":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        buttonAnimation(buttonInnerHTML);
        break;
        case "k":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        buttonAnimation(buttonInnerHTML);
        break;
        case "l":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        buttonAnimation(buttonInnerHTML);
        break;
     
        default:
                console.log();
                break;
     }
});



}

   document.addEventListener("keydown",function(event){
        console.log(event.code);
        keyChecker = event.code
        switch (keyChecker) {
                case "KeyW":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                buttonAnimationKeyPressed(keyChecker);
                break;
                case"KeyA":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                buttonAnimationKeyPressed(keyChecker);
                break;
                case"KeyS":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                buttonAnimationKeyPressed(keyChecker);
                break;
                case"KeyD":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                buttonAnimationKeyPressed(keyChecker);
                break;
                case"KeyJ":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                buttonAnimationKeyPressed(keyChecker);
                break;
                case"KeyK":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                buttonAnimationKeyPressed(keyChecker);
                break;
                case"KeyL":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                buttonAnimationKeyPressed(keyChecker);
                break;
        
                default:
                        break;
        }

}) 

function buttonAnimation(currentKey){

       var activeButton = document.querySelector("." + currentKey);

       activeButton.classList.add("pressed");

       setTimeout(function() {
        activeButton.classList.remove("pressed");
       },100);
       
}

function buttonAnimationKeyPressed(anjayKey){
       switch (keyChecker) {
        case "KeyW":
        var activeKeyPressed = document.querySelectorAll("button")[0];
        activeKeyPressed.classList.add("pressed");

        setTimeout(function() {
        activeKeyPressed.classList.remove("pressed");
       },100);
        break;
                case "KeyA":
        var activeKeyPressed = document.querySelectorAll("button")[1];
        activeKeyPressed.classList.add("pressed");

        setTimeout(function() {
        activeKeyPressed.classList.remove("pressed");
       },100);
        break;
                case "KeyS":
        var activeKeyPressed = document.querySelectorAll("button")[2];
        activeKeyPressed.classList.add("pressed");

        setTimeout(function() {
        activeKeyPressed.classList.remove("pressed");
       },100);
        break;
                case "KeyD":
        var activeKeyPressed = document.querySelectorAll("button")[3];
        activeKeyPressed.classList.add("pressed");

        setTimeout(function() {
        activeKeyPressed.classList.remove("pressed");
       },100);
        break;
                case "KeyJ":
        var activeKeyPressed = document.querySelectorAll("button")[4];
        activeKeyPressed.classList.add("pressed");

        setTimeout(function() {
        activeKeyPressed.classList.remove("pressed");
       },100);
        break;
                case "KeyK":
        var activeKeyPressed = document.querySelectorAll("button")[5];
        activeKeyPressed.classList.add("pressed");

        setTimeout(function() {
        activeKeyPressed.classList.remove("pressed");
       },100);
        break;
               case "KeyL":
        var activeKeyPressed = document.querySelectorAll("button")[6];
        activeKeyPressed.classList.add("pressed");

        setTimeout(function() {
        activeKeyPressed.classList.remove("pressed");
       },100);
        break;
        default:
                break;
       }
}
    //var audio = new Audio("sounds/kick-bass.mp3");
      //  audio.play();