function verify() {
    let email = document.getElementById("email-address").value;
    if (email == "") {
        document.getElementById("error-icon").style.display = "inline";
        document.getElementById("error-message").style.display = "inline-block";
        return false;
    }
}