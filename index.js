document.querySelector(".Heading").addEventListener("click", function(){
    alert("Click on the Drums");
})
document.querySelector(".button1").addEventListener("click", function(){
    var audio = new Audio("sounds/kick1.mp3");
    audio.play();
})
document.querySelector(".button2").addEventListener("click", function(){
    var audio = new Audio("sounds/kick2.mp3");
    audio.play();
})
document.querySelector(".button3").addEventListener("click", function(){
    var audio = new Audio("sounds/tom1.mp3");
    audio.play();
})
document.querySelector(".button4").addEventListener("click", function(){
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
})
document.querySelector(".button5").addEventListener("click", function(){
    var audio = new Audio("sounds/tom4.mp3");
    audio.play();
})
document.querySelector(".button6").addEventListener("click", function(){
    var audio = new Audio("sounds/tom2.mp3");
    audio.play();
})
document.querySelector(".button7").addEventListener("click", function(){
    var audio = new Audio("sounds/tom3.mp3");
    audio.play();
})

document.addEventListener("keydown", function(event){
    clickControl(event);
})
function clickControl(para){
    var t = para.key;
    if(t==="a"){
        var audio = new Audio("sounds/tom1.mp3");
        audio.play();
    }
    else if(t ==="s"){
        var audio = new Audio("sounds/tom2.mp3");
        audio.play();
    }
    else if(t ==="d"){
        var audio = new Audio("sounds/kick1.mp3");
        audio.play();
    }
    else if(t ==="l"){
        var audio = new Audio("sounds/tom3.mp3");
        audio.play();
    }
    else if(t ==="k"){
        var audio = new Audio("sounds/tom4.mp3");
        audio.play();
    }
    else if(t ==="j"){
        var audio = new Audio("sounds/kick2.mp3");
        audio.play();
    }
    else if(t ==="g"){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
}
