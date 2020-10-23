$(document).ready(function(){
  $("button#submit").click(function(){
    
    
    let dindinStr = document.getElementById("din-din")
    let dindin = document.getElementById("din-value")
    
    dindin.innerHTML = dindinStr.value;
    dindinStr.oninput = function() {

    
      let dindinVal = parseInt("#din-value")
    
    console.log(dindinVal);
    
    }
  
  
  
  event.preventDefault();
  });





});