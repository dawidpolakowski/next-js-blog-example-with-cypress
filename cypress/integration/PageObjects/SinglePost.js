/// <reference types="cypress" />
import blogData from '../../fixtures/blogData.json'

class SinglePost {

    clickTightPostLink() {

        cy.get(blogData.tightPostLink)
            .should('be.visible')
            .click({ force: true })
    }
}
// clickTightPostLink
const singlePost = new SinglePost();

export default singlePost