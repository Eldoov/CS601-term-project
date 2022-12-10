
function scrollOff(){
    let bodyStyle = document.body.style
    bodyStyle.height = "100%"
    bodyStyle.overflow = "hidden"
}

function scrollOn(){
    let bodyStyle = document.body.style
    bodyStyle.height = "90%"
    bodyStyle.overflow = "visible"
}


const audio = new Audio("https://ia800501.us.archive.org/33/items/nyannyannyan/NyanCatoriginal.mp3");
let play = false;

function playNyancat(){
    document.getElementById("hide-nyancat").style.display = "inline";
    document.getElementById("display-nyancat").style.visibility = "visible";
    if (play === false){
        audio.play();
        play = true;
    }else{
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }
}

function hideNyancat(){
    play = false;
    audio.pause();
    audio.currentTime = 0;
    document.getElementById("hide-nyancat").style.display = "none";
    document.getElementById("display-nyancat").style.visibility = "hidden";
}

