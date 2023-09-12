# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./design/solution-screenshot.png)

### Links

- Solution URL: [](https://github.com/justinvanre/frontend-mentor-projects/tree/main/intro-component-with-signup-form)
- Live Site URL: [](https://justinvanre.github.io/frontend-mentor-projects/intro-component-with-signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS

### What I learned

I'm starting to understand objects more and more. In this project, I could see the value in it. By using "console.dir()" I can see all
properties of an element, and it was relatively easy to edit them. It made building this project engaging and gave me a lot to learn along the way. Also, this was my first time working with inputs, which had it's challenges, but educational and exciting as inputs are a big part of interactive websites.

It was also the first time I got to work with error states since learning about modifiers. It was nice to see them in appear in a project. 

```html

<label for="last-name">Last Name</label>
<input type="text" id="last-name" name="Last name" placeholder="Last Name" required>
<p class="cta__sign-up__form__input--error__text"></p>

```

```css

.cta__sign-up__form__input--error {
    background: url(./images/icon-error.svg) no-repeat;
    background-position: right 5.8695652% center; /* 27 / 460 */
    background-size: auto;

    color: var(--primary-color-01) !important;
    border-color: var(--primary-color-01) !important;
}

.cta__sign-up__form__input--error::placeholder {
    color: var(--primary-color-01);
}

.cta__sign-up__form__input--error__text {
    font-size: 0.6875rem; /* 11 / 16 */
    font-style: italic;
    color: var(--primary-color-01);

    text-align: right;

    margin-block: 0.545454545em 0; /* 6 / 11 */

    display: none;
}

```

```js

// Enable styling error state
element.classList.add('cta__sign-up__form__input--error');
                        
nextEl.style.display = 'block'; 
nextEl.innerHTML = element.type === 'email' ? `Looks like this is not an email.`:`${element.name} cannot be empty.`;

```

### Continued development

I'm still trying to get comfortable with grid and declarating columns. I should stick to the same columns as in the figma designs, both mobile and desktop. It will be a point of improvement for next time.


## Author

- Frontend Mentor - [@justinvanre](https://www.frontendmentor.io/profile/justinvanre)
