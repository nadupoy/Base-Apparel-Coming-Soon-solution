function verify() {
    const userEmail = document.getElementById("email-address").value;

    /*
    Using the constructor function provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.
    - MDN WEB DOCS
    */

    // EMAIL ADDRESS FORMAT: name@domain

    const regex = new RegExp(/[-.\w]+@([\w-]+\.)+[\w-]+/g);

    /*
    Removed the quotes as the output was always 'false' even if the email format was correct.
    - STACK OVERFLOW
    */

    let emailVerification = regex.test(userEmail);

    if (emailVerification === false) {
      document.getElementById("error-message").innerHTML = "Please provide a valid email";
      document.getElementById("icon-error").style.display = "block";
    }
}
