function validatePassword(){
    var passwordVal = document.getElementById("pass").value;
    var confirmedPasswordVal = document.getElementById("confirmPass").value;

    var password = document.getElementById("pass");
    var confirmedPassword = document.getElementById("confirmPass");

    if (passwordVal !== confirmedPasswordVal) {

        password.style.border = "1px solid red";
        confirmedPassword.style.border = "1px solid red";
        return false;
    }else {
        password.style.border = "1px solid #596D48";
        confirmedPassword.style.border = "1px solid #596D48"; 
        return true;
    }
}
document.getElementById("confirmPass").addEventListener("input", validatePassword);
document.getElementById("pass").addEventListener("input", validatePassword);