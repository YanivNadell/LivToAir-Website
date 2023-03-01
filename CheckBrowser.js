function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}


window.addEventListener("orientationchange", (event) => {
    setTimeout(() => {
        checkAspectRatio();
    }, 50);
});


var AspectRatio = window.screen.width / window.screen.height
if(detectMob() == true){
    
}

function checkAspectRatio(){
    AspectRatio = window.screen.width / window.screen.height
    if(AspectRatio <= 1.35){
        document.getElementById("Wrong_AspectRatio_Page").style.visibility = "visible"
        console.log(10);
    }
    else{
        document.getElementById("Wrong_AspectRatio_Page").style.visibility = "hidden"
    }
}checkAspectRatio();