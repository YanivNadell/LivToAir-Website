var mousewheel;
var title = document.getElementById("Title")
var steps = 1, speed = 500, stepMax = 6;
var MainWebsite = false;

// window.addEventListener("wheel", event => {
//     mousewheel = Math.sign(event.deltaY);
//     if(!MainWebsite){
//         if(steps + mousewheel <= stepMax  && steps + mousewheel > 0)
//             steps += mousewheel
//         document.documentElement.style.setProperty("--TitleFont", Math.pow(steps, 3))
//         title.style.opacity = 1 - (steps - 1) / (stepMax - 1)
    
//         if(steps > 1) {
//             document.getElementById("ScrollDownText").style.bottom = "-100%"
//             document.getElementById("cursor").style.opacity = 0
//             document.getElementById("BackgroundDetailAnim").style.animation = "none"
//             document.getElementById("BackgroundDetailAnim2").style.animation = "none"
//             document.getElementById("background").style.animation = "none"
//             document.getElementById("BackgroundDetailAnim").style.opacity = 0
//             document.getElementById("BackgroundDetailAnim2").style.opacity = 0
//             document.getElementById("background").style.opacity = 0
//         }
//         else{
//             document.getElementById("ScrollDownText").style.bottom = "10px"
//             document.getElementById("cursor").style.opacity = 1
//             document.getElementById("BackgroundDetailAnim").style.animation = "BackgroundDetailAnim 15s linear infinite"
//             document.getElementById("BackgroundDetailAnim2").style.animation = "BackgroundDetailAnim2 15s -5s linear infinite"
//             document.getElementById("BackgroundDetailAnim").style.opacity = 0.05
//             document.getElementById("BackgroundDetailAnim2").style.opacity = 0.05
//             document.getElementById("background").style.opacity = 0.07
//         }
//     }
    
//     if(steps >= stepMax) {
//         MainWebsite = true;
//         setTimeout(() => {
//             window.location.href = './Pages/Home/home.html'
//         }, 700);
//     }
// });


var cursorType = Math.round(Math.random())
if(cursorType == 1) document.getElementById("cursor").style.backgroundImage = "url(./Assets/cursorBlack2.png)"
else document.getElementById("cursor").style.backgroundImage = "url(./Assets/cursorBlack.png)"

var mouseX1, mouseY1, mouseX2, mouseY2
var mouseFlag = false
window.addEventListener("mousemove", e => {
    var x = e.clientX, y = e.clientY;
    if(mouseFlag) { mouseX1 = x; mouseY1 = y; mouseFlag = false}
    setTimeout(() => {
        mouseX2 = x; mouseY2 = y
        mouseFlag = true
    }, 100);
    document.getElementById("background").style.maskPosition = (x - 250) + "px" + " " + (y - 250) + "px"
    document.getElementById("cursor").style.left = x + "px"
    document.getElementById("cursor").style.top = y + "px"
    document.getElementById("cursor").style.rotate = (angle(mouseX2, mouseY2, mouseX1, mouseY1) + 90) + "deg"

    distanceX = x - window.innerWidth / 2
    distanceY = y - window.innerHeight / 2
    if(steps <= 1)
        document.getElementById("Title").style.translate = "calc(-50% + " + (distanceX / 240) + "px) calc(-50% + " + (distanceY / 160) + "px)"
})



function angle(x1, y1, x2, y2) {
    var angleRadians = Math.atan2(y2 - y1, x2 - x1);
    return angleRadians * (180 / Math.PI);
}