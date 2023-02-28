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


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
window.onload = function(){
    var rnd = getRandomInt(3);
    var video = document.getElementById('Aircraft_Preview');
    var sources =  document.getElementById('Aircraft_Preview_src');
    if(rnd == 0) sources.src = "./Anims/XA42_Anim.webm";
    if(rnd == 1) sources.src = "./Anims/C8_Anim.webm";
    if(rnd == 2) sources.src = "./Anims/C63_Anim.webm";
    video.load();
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

function openPage(pageUrl){
    window.location.replace(pageUrl);
}

//Contact Form
const btn = document.getElementById('CP_R_IB_SendBtn');
var isValidForm = false;
document.getElementById('CP_R_InputsBox')
    .addEventListener('submit', function(event) {
    event.preventDefault();
    btn.value = 'Sending...';
    const serviceID = 'default_service';
    const templateID = 'template_r9zp2qn';

    var name = document.getElementById("CP_R_Name_Input");
    var email = document.getElementById("CP_R_Email_Input");
    var subject = document.getElementById("CP_R_Subject_Input");
    var message = document.getElementById("CP_R_Message_Input");
    if(name.value.length >= 2 && email.value.length > 2 && subject.value.length > 5 && message.value.length > 10){
        console.log("Valid Email")
        isValidForm = true
    }
    else{
        if(name.value.length < 2){
            btn.value = 'Name Too Short'
        }
        else if(email.value.length <= 2){
            btn.value = 'Not A Valid Email'
        }
        else if(subject.value.length <= 5){
            btn.value = 'Subject Too Short'
        }
        else if(message.value.length <= 10){
            btn.value = 'Message Too Short'
        }
        setTimeout(() => {
            btn.value = 'Send'
        }, 2000);
    }

    if(isValidForm){
        emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Email Sent!';
            setTimeout(() => {
                btn.value = 'Send'
            }, 2000);
        }, (err) => {
            btn.value = 'Send';
            alert(JSON.stringify(err));
        });
    }
    else{
        // alert("error")
    }
});