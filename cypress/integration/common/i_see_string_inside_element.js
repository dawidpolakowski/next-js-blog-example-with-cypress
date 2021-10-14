import { And } from "cypress-cucumber-preprocessor/steps";

And(`I see {string} inside element {string}`, (text,element) => {
    expect(cy.get(element).contains(text))
})