let countElement =  document.getElementById("countChange");
let enteredText = document.getElementById("enteredText");

let count = 10;

let countDecrease = setInterval(function(){
    countElement.textContent = count;
    count-=1;
    if (count===0) {
        countElement.textContent = "BOOM";
        clearInterval(countDecrease);
    }
},2000);

enteredText.addEventListener("keydown",function(event){
    let enteredValue = enteredText.value;
    if (enteredValue === "def" && event.key === "Enter" && count !==0){
        countElement.textContent = "You did it!";
         clearInterval(countDecrease);
    }
});

