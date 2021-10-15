# A statically generated blog example using Next.js, Markdown, and TypeScript

## This example contains Cypress with cypress-cucumber-preprocessor. 
## I will use this repository in my course Cypress for beginners.

## Enjoy
### Dawid Polakowski => QA Forge


This is the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript.

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Install

To install this project simply fallow steps:

- clone repository
- ```cd next-js-blog-example-with-cypress-/```
- ```npm install -D```


## Testing

We are using in this project Cypress with Cucumber, so test cases are written in gherking 
language and are stored inside cypress/integration folder as ```*.feature``` files.
WE are using PageObjects and external data source, .json file with selectors.
This is just showcase so in time I will prepare more test cases.

To run test execution you can:

1. Run command ```npx cypress run``` - this will execute headless mode and give you a fast report 
2. Run command ```npx cypress open``` - this will open Cypress GUI and give you a visual preview of test execution with super easy debugger mode just inspect the app page to check what's wrong  

You can check sample videos from run in cypress/videos/ folder
# Notes

This blog-starter-typescript uses [Tailwind CSS](https://tailwindcss.com). To control the generated stylesheet's filesize, this example uses Tailwind CSS' v2.0 [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS.

[Tailwind CSS v2.0 no longer supports Node.js 8 or 10](https://tailwindcss.com/docs/upgrading-to-v2#upgrade-to-node-js-12-13-or-higher). To build your CSS you'll need to ensure you are running Node.js 12.13.0 or higher in both your local and CI environments.
