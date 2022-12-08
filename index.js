for(var i = 0;i < document.querySelectorAll(".drum").length; i++){
    
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonHTML = this.innerHTML;
    makeSound(buttonHTML);
    currentKey(buttonHTML);

    
});

}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    currentKey(event.key);
});

function makeSound(key) {
    switch(key) {
        case "w": var cjb1 = new Audio("sounds/tom5.mp3");
        cjb1.play();
        break;
        case "a": var kick= new Audio("sounds/tom6.mp3");
        kick.play();
        break;
        case "s": var snare = new Audio("sounds/tom7.mp3");
        snare.play();
        break;
        case "d": var tom1 = new Audio("sounds/tom4.mp3");
        tom1.play();
        break;
        case "j": var tom2 = new Audio("sounds/tom1.mp3");
        tom2.play();
        break;
        case "k": var tom3 = new Audio("sounds/tom2.mp3");
        tom3.play();
        break;
        case "l": var tom4 = new Audio("sounds/tom3.mp3");
        tom4.play();
        break;
        default: console.log(buttonHTML);
    }
}

function buttonAnimation(currentKey) {
       var activeButton = document.querySelector("."+currentKey);
            activeButton.classList.add("pressed");
        setTimeout( function(){
            activeButton.classList.remove("pressed");

        }, 100);
}



