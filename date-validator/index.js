const objValidator = new DateValidator();
const objInput = document.getElementById("date1");
const objIndicator = document.getElementById("date1_indicator");

objInput.onkeyup = function(e) {

    if (e.target.value.length == 0) {
        objIndicator.style.display = "none";
        return;
    }

    objValidator.value = e.target.value;

    const blnValid = objValidator.valid;

    objIndicator.style.display = "inline";

    if (blnValid) {
        objIndicator.className = objIndicator.className.replace(/exclamation/g, "check");
    } else {
        objIndicator.className = objIndicator.className.replace(/check/g, "exclamation");
    }
};