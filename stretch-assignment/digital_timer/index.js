const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");


const startButton = document.getElementById("startBTN");

startButton.addEventListener("click", myTimerFunc);
startButton.addEventListener("click", function(){
    startButton.style.color = "white";
    startButton.style.backgroundColor = "red";
});

let clickCount = 0;

function myTimerFunc(){
    
        //tens dosnt need to be elastic because

    
    if(clickCount == 0){
        clickCount++;
        let tensCounter = 0;
        let tenSecondsFunc = function(){ 
                tensCounter++;
                secondTens.innerHTML = tensCounter;
        
                secondTens.classList.add("redDigit")
                secondOnes.classList.add("redDigit")
                msHundreds.classList.add("redDigit")
                msTens.classList.add("redDigit");

                if(tensCounter === 1){
                    clearInterval(init1);
                }
        }

        let init1 = setInterval(tenSecondsFunc, 10000);




            //ones  
        let countMe = 1;
        let secondsFunc = function(){ 
            secondOnes.innerHTML = countMe;
            countMe++;
            if(countMe === 10){
                countMe=0;
            }
            if(tensCounter === 1){
                clearInterval(init2);
            }
            
        }
        let init2 = setInterval(secondsFunc, 1000);




            //hundreds
        let hundredsFunc = function(){ 
            msHundreds.innerHTML = countMeHundreds;
            countMeHundreds++;
            if(countMeHundreds=== 10){
                countMeHundreds=0;
            }
            if(tensCounter === 1){
                clearInterval(init3);
            }
        }    
        let countMeHundreds = 1;
        let init3 = setInterval(hundredsFunc, 100);


        
            //thousands
        let countMeThousand = 1;
        let thousandsFunc = function(){ 
            msTens.innerHTML = countMeThousand;
            countMeThousand++;
            if(countMeThousand=== 10){
                countMeThousand=0;
            }
            if(tensCounter === 1){
                clearInterval(init4);
            }
        }
        let init4 = setInterval(thousandsFunc, 10);




            //clearing intervals
        // function myStopFunction() {
            // clearInterval(tenSecondsFunc);
            // clearInterval(secondsFunc);
            // clearInterval(hundredsFunc);
            // clearInterval(thousandsFunc);
        // }

        // if(secondTens.innerHTML === 1){
        //     myStopFunction() ;
        // }

    }
}


