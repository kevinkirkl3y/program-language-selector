$(document).ready(function(){
  $("button#submit").click(function(){
    
    
    let dinnerStr = document.getElementById("dinner")
    const dinnerVal = parseInt(dinnerStr.value);

    let coffeeStr = document.getElementById("coffee")
    const coffeeVal = parseInt(coffeeStr.value);

    let musicStr = document.getElementById("music")
    const musicVal = parseInt(musicStr.value);

    let biglebowskiStr = document.getElementById("biglebowski")
    const biglebowskiVal = parseInt(biglebowskiStr.value);

    let bestStr = document.getElementById("best")
    const bestVal = parseInt(bestStr.value);

    const result =dinnerVal + coffeeVal + musicVal + biglebowskiVal + bestVal;

    
    
    
    
    
    console.log(result);
    
    
  
  
  
  event.preventDefault();
  });





});