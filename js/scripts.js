$(document).ready(function(){
  $("button#submit").click(function(){
    
    //Create Constants to be used for branch to return results:
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

    let result = dinnerVal + coffeeVal + musicVal + biglebowskiVal + bestVal;

    // Taking name for in order to place in responses:
    const userNameInput = $("input#user-name").val();
    $(".user-name").append(userNameInput);
    
    if (result < 17){
      $("#ruby").show()
    } else if (result >= 17 && result < 35) {
      $("#csharp").show()
    } else {
      $("#python").show()
    }
    
    console.log(result);
    event.preventDefault();
    
    
    
    
    
    
    
   
  
  });
  
  



});