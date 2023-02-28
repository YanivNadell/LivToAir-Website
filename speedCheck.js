console.log("Speed Test Started");
var target = 45000000, current = 0; //set target and current
var test1, test2, TestsAvg;
var TestingPerformance, testNumber = 0;
TestingPerformance = true;

while(TestingPerformance){
    function speedCheck(){
        //Check 1
        const check1_Time1 = performance.now(); //start timer
        for(var i = 0; i < target; i++ ){
            current++;
        };
        const check1_Time2 = performance.now(); //end timer
        test1 = check1_Time2 - check1_Time1; //culc test time
        console.log(`Check Number 1 Took ${(test1).toFixed(3)} ms`);
    
        //check 2
        current = 0; //reset current
        const check2_Time1 = performance.now(); //start timer
        for(var i = 0; i < target; i++ ){
            current++;
        };
        const check2_Time2 = performance.now(); //start timer
        test2 = check2_Time2 - check2_Time1; //culc test time
        console.log(`Check Number 2 Took ${(test2).toFixed(3)} ms`);

        testNumber++;
    }
    speedCheck()
    
    //results
    if(Math.max(test1, test2) - Math.min(test1, test2) <= 30 || testNumber >= 15){ //if 2 tests are more them 30ms appart or test number passed 15
        console.log("Test is syncrinize")
        TestingPerformance = false; //exit while loop
    }
}
TestsAvg = ((test1 + test2) / 2).toFixed(3); //culc avg
console.log(`avg of tests: ${TestsAvg}ms`);

//set performance mode
var targetSpeed = 120, PerformenceMode = false, PerformenceLevel = 0;
if(TestsAvg < targetSpeed){
    console.log("Preformence Mode Off")
}
else{
    PerformenceMode = true;
    console.log("Slow")
}

if(PerformenceMode){
    deleteAnims();
    //set performence level
    if(TestsAvg > targetSpeed * 1.4) PerformenceLevel++
    if(TestsAvg > targetSpeed * 1.8) PerformenceLevel++
    if(TestsAvg > targetSpeed * 2.2) PerformenceLevel++
    if(TestsAvg > targetSpeed * 2.7) PerformenceLevel++
    if(TestsAvg > targetSpeed * 3) PerformenceLevel++
    console.log("Performens Level: " + PerformenceLevel)
}

function deleteAnims(){
    if(window.location.href.includes("xa42.html")){
        const Clickerers = document.querySelectorAll('.Clicker');
        Clickerers.forEach(Clicker => { Clicker.style.animation = 'none'; });
        document.querySelector('#Aircraft_Preview_2').pause();
        document.querySelector('#SP_IP_IconsContainer').style.animation = 'none';   
    }
    else if(window.location.href.includes("index.html")){
        document.querySelector('#MP_BL_Left').style.animation = 'none';   
        document.querySelector('#MP_BL_Right').style.animation = 'none';   
    }

    console.log("Preformence Mode On")
}

console.log("Speed Test Ended")