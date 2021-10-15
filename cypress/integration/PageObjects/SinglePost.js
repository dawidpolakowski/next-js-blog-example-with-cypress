/// <reference types="cypress" />
import blogData from '../../fixtures/blogData.json'

class SinglePost {

    clickTightPostLink() {

        cy.get(blogData.tightPostLink)
            .should('be.visible')
            .click()
    }

clickSnugPostLink() {

    cy.get(blogData.snugPostLink)
        .first()
        .should('be.visible')
        .click()
}
}
const singlePost = new SinglePost();

export default singlePost