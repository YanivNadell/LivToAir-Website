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


const infos =   ["The XtremeAir Sbach 342 is a composite structure \0 \0 low-wing monoplane with a fixed conventional landing gear with a tailwheel and carbon fiber fuselage.", 
                "The XtremeAir Sbach 342 is powered by a 315 hp \0 \0 \0 \0 \0 \0 \0 (235 kW) Lycoming AEIO-580-B1A piston engine driving a three-bladed propeller.", 
                "The XtremeAir Sbach 342 comes with 5 liveries! \0 \0 \0 \0 Includs: LivToAir, RedBull OK-FBA, G-COXI, AURORA SP-AUR, D-EFXA, G-IIJI",
                "EFB",
                "The XtremeAir Sbach 342 comes with 12 cockpit configurations! \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 - 2 Garmin G3X Configurations  \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 -  4 Aspen Avionics Evolution Configurations \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 -  1 With The Area Screen \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 - 3 Full Analog Configurations \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 - 2 With A Custom Clipboard That can fit 6 png images",
                "The XtremeAir Sbach 342 comes a working smoke system! Including: Red, White Blue, Green And Yellow Smoke Colors",
                "The XtremeAir Sbach 342 (XA42) is a German high performance two-seat aerobatic and touring monoplane designed by Philipp Steinbach with Albert Mylius and built by XtremeAir \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 It is the tandem version of the single-seater XtremeAir Sbach 300 (XA41) which was designed by the same team in in 2004. The XA42 received a type certificate from the European Aviation Safety Agency in March 2011. And in November 2012 it received its type certification through the FAA. \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 The production of this plane was stopped at the beginning of the year 2021"];
const infoTitles =   ["Exterior:",
                    "Engine:",
                    "Liveries:",
                    "EFB:",
                    "Interior:",
                    "Smoke System:",
                    "Main Info:"];
let currentStepValue = 0
function UpdateState(ele, step){
    var delay = 0; 
    const info = document.getElementById("Info");
    const infoTitle = document.getElementById("Info_Title");
    ele.style.visibility = "hidden";
    if(step == 1){ currentStepValue = 0.7; delay = 1400;}
    if(step == 2){ currentStepValue = 1.1; delay = 1000;}
    if(step == 3){ currentStepValue = 1.4; delay = 700;}
    if(step == 4){ currentStepValue = 2.78; delay = 2600;}
    if(step == 5){ currentStepValue = 3.58; delay = 1200;}
    if(step == 6){ currentStepValue = 5; delay = 2900;}
    if(step == 7){ currentStepValue = 0; delay = 2250;}

    //preformence mode
    if(PerformenceLevel == 0) currentStepValue - 0.1;
    if(PerformenceLevel == 1) currentStepValue - 0.2;
    if(PerformenceLevel == 2) currentStepValue - 0.3;
    if(PerformenceLevel == 3) currentStepValue - 0.4;
    if(PerformenceLevel == 4) currentStepValue - 0.7;
    if(PerformenceLevel == 5) currentStepValue - 1.8;

    setTimeout(() => {
        if(step + 1 == 8) eval("ClickSpot_1").style.visibility = "visible"; //8 = steps + 1
        else eval("ClickSpot_" + ++step).style.visibility = "visible";
        info.style.animation = "textOpacity 1s linear forwards";
        infoTitle.style.animation = "textOpacity 1s linear forwards";
        if(currentStepValue == 0) setTimeout(() => { info.textContent = infos[6]; }, 500);  //max step - 1 
        if(currentStepValue == 0) setTimeout(() => { infoTitle.textContent = infoTitles[6]; }, 500);  //max step - 1 
        else setTimeout(() => { 
            info.textContent = infos[step - 2]; 
            infoTitle.textContent = infoTitles[step - 2]; 
        }, 500);
        setTimeout(() => { 
            info.style.animation = 'none';
            info.style.animation = null;
            infoTitle.style.animation = 'none';
            infoTitle.style.animation = null;
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

function openPage(pageUrl){
    window.location.replace(pageUrl);
}