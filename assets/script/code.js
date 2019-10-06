var lowercase = document.getElementById("lowercaseChar");
var uppercase = document.getElementById("uppercaseChar");
var special = document.getElementById("specialChar");
var numeric = document.getElementById("numericChar");
var checks = document.getElementsByClassName("form-check-input");

var generate = document.querySelector("#generate");
var copy = document.querySelector("#copy");

var charMax = 128; 
var charMin = 8;

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var caps = alphabet.toUpperCase();
var symbols = "!?=#*$@+-.";
var numbers = "0123456789";

var lowerArray = alphabet.split("");
var upperArray = caps.split("");
var symbolArray = symbols.split("");
var numberArray = numbers.split("");

var password = "";

//Upon click if any of the boxes are checked do the following operation    
generate.addEventListener("click", function () {
    
    if (lowercase.checked || uppercase.checked || special.checked || numeric.checked )
    {        

    while (password.length <= charMax || password.length <= charMin) {
        
        if (lowercase.checked) { 
            var compChoice1 = lowerArray[Math.floor(Math.random() * lowerArray.length)];
            password = password + compChoice1.toString();
          }
          
        if (uppercase.checked) { 
            var compChoice2 = upperArray[Math.floor(Math.random() * upperArray.length)];
            password = password + compChoice2.toString();
          }
          
          if (special.checked) { 
            var compChoice3 = symbolArray[Math.floor(Math.random() * symbolArray.length)];
            password = password + compChoice3.toString();
          }
          
        if (numeric.checked) { 
            var compChoice4 = numberArray[Math.floor(Math.random() * numberArray.length)];
            password = password + compChoice4.toString();
          }
        }

        document.getElementById("password").innerHTML = password.toString();

    }

    //if none of the boxes are selected alert user that nothing was selected! 
    else 
        {
        alert("No options selected, please try again!");
        }
    })

    copypass.addEventListener("click", function () {
        var textCopy = document.getElementById("password");
        textCopy.select();
        document.execCommand("copy");
        alert("Password has been copied to your clipboard");
        })
    
      

