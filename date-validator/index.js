const objValidator = new DateValidator();
const objInput = document.getElementById("date1");
const objForm = document.getElementById("form1");
const objInfo = document.getElementById("dt_info_text");
const objIndicator = document.getElementById("date1_indicator");

objInput.onkeyup = function(e) {
    objInfo.classList.remove("td_warning");
    if (e.target.value.length == 0) {
        objIndicator.style.display = "none";
        return;
    }
    objValidator.value = e.target.value;
    const blnValid = objValidator.valid;
    objIndicator.style.display = "inline";
    objIndicator.classList.remove(blnValid ? "fa-exclamation-circle" : "fa-check-circle");
    objIndicator.classList.add(blnValid ? "fa-check-circle" : "fa-exclamation-circle");
}

objForm.onsubmit = function(e) {
    if (false === objValidator.valid) {
        objInfo.classList.add("td_warning");
        return false;
    }
}