const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
let clickCount = 0;
let tensCounter = 0;

const startButton = document.getElementById("startBTN");
const resetButton = document.getElementById("resetBTN");

startButton.addEventListener("click", myTimerFunc);
startButton.addEventListener("click", function(){
    startButton.style.color = "white";
    startButton.style.backgroundColor = "green";
});

resetButton.addEventListener("click", function(){
    if(clickCount === 0){
        clickCount = 0;
        tensCounter = 0;
        secondTens.innerHTML = tensCounter;
        secondTens.classList.remove("redDigit")
        secondOnes.classList.remove("redDigit")
        msHundreds.classList.remove("redDigit")
        msTens.classList.remove("redDigit");

        }
});



function myTimerFunc(){
    
        //tens dosnt need to be elastic because

    tensCounter = 0;
    secondTens.innerHTML = tensCounter;
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
                    clickCount = 0;
                    startButton.style.color = "white";
                    startButton.style.backgroundColor = "red";
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
    }
}


