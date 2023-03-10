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


const infos =   ["The Chevrolet Corvette C8 comes with fully animated driver and passanger doors, animated trunk and hood, working light system and working turning signals", 
                "The Chevrolet Corvette C8 comes with 10 liveries! \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 Blue, Orange, Red, White and Yellow. And all colors comes with a sport stripe version.",
                "The interior of the Chevrolet Corvette C8 is fully animated and highly modelled, \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 including a glovebox and an interior storage with a working car key.",
                "The Chevrolet Corvette C8 comes with a custom hud screen including: \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 Selecter Gear, Speed, RPM, G-Force, Distance Traveled, Fuel Spent and Run Time",
                "The Chevrolet Corvette C8 uses a new version of the LS-based GM small-block engine derived from the Chevrolet Corvette C7 LT1, now called the LT2. \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 The new naturally aspirated 6.2 L V8 is rated at 490 hp at 6,450 rpm and 465 lb???ft of torque at 5,150 rpm",
                "The Chevrolet Corvette C8 is the eighth generation of the Corvette sports car manufactured by American automobile manufacturer Chevrolet. \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 It is the first mid-engine Corvette since the model's introduction in 1953, differing from the traditional front-engine design. \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 The C8 was announced in April 2019, Production officially began on February 3, 2020"];
const infoTitles =   ["Exterior:",
                    "Liveries:",
                    "Interior:",
                    "Hud:",
                    "Engine:",
                    "Main Info:"];
let currentStepValue = 0
function UpdateState(ele, step){
    var delay = 0; 
    const info = document.getElementById("Info");
    const infoTitle = document.getElementById("Info_Title");
    ele.style.visibility = "hidden";
    if(step == 1){ currentStepValue = 0.7; delay = 1400;}
    if(step == 2){ currentStepValue = 1.2; delay = 1100;}
    if(step == 3){ currentStepValue = 2.1; delay = 1700;}
    if(step == 4){ currentStepValue = 2.5; delay = 1000;}
    if(step == 5){ currentStepValue = 4.5; delay = 4000;}
    if(step == 6){ currentStepValue = 0; delay = 3100;}
    //preformence mode
    if(PerformenceLevel == 0) currentStepValue - 0.1;
    if(PerformenceLevel == 1) currentStepValue - 0.2;
    if(PerformenceLevel == 2) currentStepValue - 0.3;
    if(PerformenceLevel == 3) currentStepValue - 0.4;
    if(PerformenceLevel == 4) currentStepValue - 0.7;
    if(PerformenceLevel == 5) currentStepValue - 1.8;

    setTimeout(() => {
        if(step + 1 == 7) eval("ClickSpot_1").style.visibility = "visible"; //8 = steps + 1
        else eval("ClickSpot_" + ++step).style.visibility = "visible";
        info.style.animation = "textOpacity 1s linear forwards";
        infoTitle.style.animation = "textOpacity 1s linear forwards";
        if(currentStepValue == 0) setTimeout(() => { info.textContent = infos[5]; }, 500);  //max step - 1 
        if(currentStepValue == 0) setTimeout(() => { infoTitle.textContent = infoTitles[5]; }, 500);  //max step - 1 
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


function sendEmail(){
    var name = document.getElementById("CB_Name_Input").value;
    var email = document.getElementById("CB_Email_Input").value;
    var subject = document.getElementById("CB_Subject_Input").value;
    var message1 = document.getElementById("CB_Message_Input").value;
    var body = 'Name: ' + name + '<br> Email: ' + email + '<br> Subject: ' + subject + '<br> <br> Message: <br>' + message1;
    Email.send({
        SecureToken : "d09cd85c-06de-4174-b0fd-ea8d45e601d5",
        To : 'ynadell06@gmail.com',
        From : 'ynadell06@gmail.com',
        Subject : subject,
        Body : body
    }).then(
        message => alert(message)
    );
}

function openPage(pageUrl){
    window.location.replace(pageUrl);
}