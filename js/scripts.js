$(document).ready(function(){
  $("#submit").click(function(){
    
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

    const userNameInput = $("input#user-name").val();
    $(".user-name").append(userNameInput);
  
    $(".name-form").fadeOut();
    $("#submit").fadeOut();
    $(".refresh").fadeIn();

    if (result < 17){
      $("#ruby").fadeIn()
    } else if (result >= 17 && result < 35) {
      $("#csharp").fadeIn()
    } else {
      $("#python").fadeIn()
    }
  
    event.preventDefault();
    $("#tryAgain").click(function(){
      location.reload(true);
    });
  });
});