const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");



function myTimerFunc(){
    
        //tens dosnt need to be elastic because
    setInterval(function(){ 
        secondTens.innerHTML = 1;

        secondTens.classList.add("redDigit")
        secondOnes.classList.add("redDigit")
        msHundreds.classList.add("redDigit")
        msTens.classList.add("redDigit")
    }, 10000);


        //ones  
    let countMe = 1;
    setInterval(function(){ 
        secondOnes.innerHTML = countMe;
        countMe++;
        if(countMe=== 10){
            countMe=0;
        }
    }, 1000);

        //hundreds
    let countMeHundreds = 1;
    setInterval(function(){ 
        msHundreds.innerHTML = countMeHundreds;
        countMeHundreds++;
        if(countMeHundreds=== 10){
            countMeHundreds=0;
        }
    }, 100);

        //thousands
    let countMeThousand = 1;
    setInterval(function(){ 
        msTens.innerHTML = countMeThousand;
        countMeThousand++;
        if(countMeThousand=== 10){
            countMeThousand=0;
        }
    }, 10);


}




myTimerFunc();