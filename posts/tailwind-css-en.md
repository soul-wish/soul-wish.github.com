---
title: 'Tailwind CSS'
slug: 'tailwind-css-en'
date: '2020-12-26'
category: 'Tech'
description: 'Cascading Style Sheets is hard. Or isn’t? I think you can’t give a definitive answer to this question.'
---

> **_NOTE:_** This article was originally published in Russian in 2020 and you can read it [here](/tailwind-css).

Cascading Style Sheets is hard. Or isn’t? I think you can’t give a certain answer to this question.

CSS is an awesome tool which helps us to create responsive and easy-to-use interfaces for our apps and websites. The main issue is not about initial styling, but rather with constantly increasing complexity of supporting your codebase while your project is growing. You can try to put things in order with a help of some methodologies. The most popular are: [BEM](https://en.bem.info/), [SMACSS](http://smacss.com/) and [Atomic CSS](https://acss.io/). In my practice the most common one was BEM because of it's simplicity and ease of use. Atomic CSS has always looked a little messy to me, because of all these atomic classes inside HTML markup that are hard to manage or even to read. And then in 2020 some new shiny tool had started to gain popularity. This tool was based on the same atomic approach for styling our interfaces. It was called [Tailwind CSS](https://tailwindcss.com/). My first thought was "What? Haven't we seen this before?". Meanwhile after some digging in docs and examples I decided to try it on my side project that didn't have any strict requirements in design.

At the same time my wife asked me to create a clone of my old [MotoQuotes](http://www.moto-quotes.pp.ua/) web app for her new project. MotoQuotes was written years ago in Backbone JS. I decided that using the same stack in 2020 is not a good
idea. I wanted to try a framework called [Svelte](https://svelte.dev/) for a long time and it looked like a great opportunity to me. It was important not to spend too much time on design and styling, but rather to focus on understanding the new framework and it's possibilities. That's why I decided to use Tailwind CSS for this purpose. As a result I can tell that I definitely liked it 🙂. It turned out to be a great solution specifically for such small projects. I can be wrong with that and it can play well in big, production-ready projects.

Let's start with the Tailwind CSS pros:

- the main advantage is a great design system and default values for the components, utilities and variables. It distinguishes Tailwind CSS from it's competitors. With the help of this system even developers with no design skills or background can create a great looking interface. You don't need to know anything about main design principles such as typography or color's theory;
- small bundle size. Thanks to this tool only your markup dictates the amount of styles that end up in your final bundle. Atomic approach guarantees that every CSS declaration is maximally reused;
- development speed. Tailwind CSS has fairly intuitive class names and this allows you to start writing your styled markup in a short time. Another great tool that can help you with styling is VS Code plugin called [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss). It's core features are fuzzy-search and autocompletion for class names, linting and syntax highlighting.

But, like any other solution, Tailwind CSS has it's own drawbacks:

- as a developer, you will unlikely to be able to create an interface in case of predetermined design. I don't think it's impossible, but you will need to spend a lot of time for reconfiguring Tailwind's design system or even creating your custom styles. You should always remember that using a few tools just for styling is not a good idea, especially in case you willing to support this project for a long time;
- markup for even the most basic components can look a bit overloaded by this huge amount of atomic classes. It became even worse if you need to use state modifiers like `hover` or `active` etc. Certainly, most of the frameworks allows you to create a small reusable components for your interface, but you still need to mark out every simple button in your app.

---

What did I conclude for myself? Most likely I will use this tool on some of my future projects. But I pretty sure that these projects will be simple and won't have any predefined design. Tailwind CSS definitely can help you to focus on the logic inside your app and not to worry about the fact that your interface looks ugly 😉
