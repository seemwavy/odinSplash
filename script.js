const pass1 = document.getElementById("password1");
const pass2 = document.getElementById("password2");
const p = document.getElementById("confirm")
function passCheck () {
    if (pass1.value !== pass2.value)   {
        p.style.color = "red"
        p.style.display = "flex"
        return p.innerHTML= "Passwords do not match";
        
    }
    else {
        p.style.color = "green"
        return p.innerHTML="Passwords match";
    }
   }
pass2.addEventListener("keyup", function() {
    event++;
    passCheck();})