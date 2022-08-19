# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Mobile](./proj-screenshots/mobile)
![Desktop](./proj-screenshots/desktop)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML5
- Flexbox
- Mobile-first workflow

### What I learned

Most of the code that I made here were refreshers of CSS concepts I've studied back then. But I was glad to be able to finally test my CSS knowledge against a responsive card component.

What was new for me was making the border radius of the card behave. The image and the card kept on spilling on the edges. You can make the image comply with the border radius by adding the attribute `overflow: hidden;`.

### Continued development

As a newbie, this was a refreshing experience for me. Sadly, this took 2 days to create, like way too long of my time. Most of it was spent debugging the flex orientation and the spacing. The mobile viewport took longer than the desktop view.

In the future, I would like to improve and polish my responsive sizing system. I mainly use REM-sizing for entities that require responsiveness, but my spacing units for margins and padding is still a mixed bag. Hopefully I get to create a better system so that I spend less time on debugging the look of my project.

I would also have to review Semantic HTML and Accessibility. I decided to go by the way of div's rather than semantics because I came here from learning Wordpress Full-Site Editing and the thing is, blocks, templates, and partials aren't friendly to hard-coding semantic tags. More so, I haven't found an ideal semantic recommendation for the many kinds of components web designers continue to come up with. I make up for it by having my classes be readable.