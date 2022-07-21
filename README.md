# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Mobile - 375px](https://github.com/nadupoy/Base-Apparel-Coming-Soon-solution/blob/main/design/Mobile%20-%20375px.png?raw=true)

![Tablet - 768px](https://github.com/nadupoy/Base-Apparel-Coming-Soon-solution/blob/main/design/Tablet%20-%20768px.png?raw=true)

![Laptop - 1440px](https://github.com/nadupoy/Base-Apparel-Coming-Soon-solution/blob/main/design/Laptop%20-%201440px.png?raw=true)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/client-side-email-verification-using-html-css-and-vanilla-javascript-myU_MUofEJ)
- Live Site URL: [Netlify](https://base-apparel-coming-soon-solution-nadupoy.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript
- Atom Editor
- Git
- GitHub


### What I learned

Solving this challenge was not easy as it involved involved using JavaScript to build a solution to a common process on the web i.e. client-side form validation.

I learnt the following:

- Inserting JavaScript code into HTML files:
```html
<script src="script.js"></script>
```

- HTML forms and events:
```html
<form onsubmit="return false">
    <input type="email" id="email-address" name="email" placeholder="Email Address" value="">
    <div>
        <img src="images/icon-error.svg" alt="error-icon" id="icon-error">
    </div>
    <input type="image"  src="images/icon-arrow.svg" alt="Submit" onclick="verify()">
</form>
```

- Letter spacing property in CSS:
```css
h1 {
  letter-spacing: 10px;
}
```

- Functions and Conditional statements in JavaScript:
```js
function verify() {
    const userEmail = document.getElementById("email-address").value;
    const regex = new RegExp(/[-.\w]+@([\w-]+\.)+[\w-]+/g);
    let emailVerification = regex.test(userEmail);
    if (emailVerification === false) {
      document.getElementById("error-message").innerHTML = "Please provide a valid email";
      document.getElementById("icon-error").style.display = "block";
    }
}
```

- JavaScript regular expression patterns, quantifiers, modifiers and metacharacters:
```js
const regex = new RegExp(/[-.\w]+@([\w-]+\.)+[\w-]+/g);
```

- JavaScript regular expression methods:
```js
let emailVerification = regex.test(userEmail);
```


### Continued development

I'd like to become better at JavaScript though I found it challenging at first. This will be my main focus as I simultaneously continue honing my HTML and CSS skills.

Moreover, I would also like to gain a better understanding of Git.

### Useful resources

- [W3Schools](https://www.w3schools.com/js/js_regexp.asp) - This was a good introduction to regular expressions in JavaScript.
- [javascript.info](https://javascript.info/regular-expressions) - Provides more detailed information and examples on regular expressions in JavaScript.
- [W3Schools](https://www.w3schools.com/html/html_forms.asp) - A good introduction to HTML forms.
- [W3Schools](https://www.w3schools.com/git/default.asp) - A good tutorial on Git and GitHub.

## Author

- Frontend Mentor - [@nadupoy](https://www.frontendmentor.io/profile/nadupoy)
- LinkedIn - [Grace Sampao](https://www.linkedin.com/in/grace-sampao-49a3129b/)




