//remove loading screen
if(!TestingPerformance){
    var progress = 0, progressDevideBy = 1 * LoadingMax / 100;
    var LoadingInterval = setInterval(() => {
        progress++;
        document.getElementById("LoadingProfress").style.backgroundImage = `linear-gradient(90deg, white ${progress / progressDevideBy}% ${progress / progressDevideBy}%,  rgba(0, 0, 0, 0.1) ${progress / progressDevideBy}%)`
        if(progress >= LoadingMax){
            document.getElementById("Loading_Page").style.visibility = "hidden"
            clearInterval(LoadingInterval);
        }
    }, 10);
}

let bool = false;
window.onload = function(){
    var myVideo = document.getElementById("Aircraft_Preview"); //4.039
    myVideo.addEventListener("click", () => {
        bool = true;
    });
    SliderImagesStart();
};


const VideoController = function(isHovering, videoElement)
{
    if(!PerformenceMode){
        if (isHovering == true)
        {
            videoElement.play();
        }
        else if (isHovering == false)
        {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
    }
}


const infos =   ["The Mercedes C63 Coupe has a 4.0-litre V8 engine impresses with explosive power delivery and very finely controllable power output – manufactured by a highly qualified team according to the legendary "+'"'+"one man, one engine"+'"'+" principle. Alloys adopted from motorsport in the cylinder heads and also cylinder barrels featuring NANOSLIDE® technology round off the technology package.",
                "The Mercedes C63 Coupe comes in 4 colors: \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 White Red and Orange, and 1 special livery.",
                "The Mercedes C63 Coupe includes an highly detailed and fully animated interior with a working hud screen displaying the speed and a working navigation screen.",
                "The Mercedes C63 Coupe comes with fully animated exterior model with a working passanger and trunk doors.",
                "The Mercedes C63 Coupe stand for performance at the very highest level that can be seen and experienced. High-tech components, some of which come from motorsports, and a progressive tuning take their power to the road. Their extreme dynamics can be recognized in every detail – with the facelift the dominant design has been further sharpened and now presents itself in a manner more striking and expressive than ever. And in the interior, too, the AMG feeling is perceptible in each and every detail – the result is a perfect fusion between first-class materials and sporty ambience."];
let currentStepValue = 0
function UpdateState(ele, step){
    var delay = 0; 
    const info = document.getElementById("Info");
    ele.style.visibility = "hidden";
    if(step == 1){ currentStepValue = 0.3; delay = 800;}
    if(step == 2){ currentStepValue = 1.0; delay = 1500;}
    if(step == 3){ currentStepValue = 2.5; delay = 2600;}
    if(step == 4){ currentStepValue = 4.5; delay = 3600;}
    if(step == 5){ currentStepValue = 0; delay = 3000;}
    //preformence mode
    if(PerformenceLevel == 0) currentStepValue - 0.1;
    if(PerformenceLevel == 1) currentStepValue - 0.2;
    if(PerformenceLevel == 2) currentStepValue - 0.3;
    if(PerformenceLevel == 3) currentStepValue - 0.4;
    if(PerformenceLevel == 4) currentStepValue - 0.7;
    if(PerformenceLevel == 5) currentStepValue - 1.8;

    setTimeout(() => {
        if(step + 1 == 6) eval("ClickSpot_1").style.visibility = "visible"; //8 = steps + 1
        else eval("ClickSpot_" + ++step).style.visibility = "visible";
        info.style.animation = "textOpacity 1s linear forwards";
        if(currentStepValue == 0) setTimeout(() => { info.textContent = infos[4]; }, 500);  //max step - 1 
        else setTimeout(() => { info.textContent = infos[step - 2]; }, 500);
        setTimeout(() => { 
            info.style.animation = 'none';
            info.style.animation = null;
        }, 1000);
    }, delay);
}

setInterval(function(){ 
    var myVideo = document.getElementById("Aircraft_Preview"); //4.039
        if(currentStepValue == 0){
            if(myVideo.currentTime.toFixed(2) != currentStepValue){
                myVideo.playbackRate = 0.5
                myVideo.play(); 
            } else myVideo.pause();
        }
        else{
            if(myVideo.currentTime.toFixed(2) <= currentStepValue){
                myVideo.playbackRate = 0.5
                myVideo.play();
                // console.log(myVideo.currentTime.toFixed(1));   
            }
            else myVideo.pause();
        }
}, 10);


var Images = document.getElementsByClassName("Slider_Imgs");
var SliderStep = 1, SliderMax = Images.length;
function SliderImagesStart(){
    for (var i = 1; i < Images.length; i++) {
        Images[i].style.right = "-100%";
    }
    document.getElementById("S-image_" + (SliderStep + 1)).style.right = "-100%";
}

function SliderRight(){
    if(SliderStep + 1 <= SliderMax){
        SliderStep++
        UpdateSliderPos(true);
    }
}
function SliderLeft(){
    if(SliderStep - 1 > 0){
        SliderStep--
        UpdateSliderPos(false);
    }
}

function UpdateSliderPos(R_or_L){
    if(R_or_L){
        // document.getElementById("S-image_" + (SliderStep)).style.animation = "Slider_GoRight 0.3s linear forwards"
        document.getElementById("S-image_" + (SliderStep)).style.right = "0%"
    }
    else{
        // document.getElementById("S-image_" + (SliderStep + 1)).style.animation = "Slider_GoLeft 0.3s linear forwards"
        document.getElementById("S-image_" + (SliderStep + 1)).style.right = "-100%"
    }

    if(SliderStep == 1) document.getElementById("Slider_LeftBtn").style.visibility = "hidden"
    else document.getElementById("Slider_LeftBtn").style.visibility = "visible"
    if(SliderStep == SliderMax) document.getElementById("Slider_RightBtn").style.visibility = "hidden"
    else document.getElementById("Slider_RightBtn").style.visibility = "visible"
}

function openPage(pageUrl){
    window.location.replace(pageUrl);
}