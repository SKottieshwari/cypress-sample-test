/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

const username = "d.thirukumaran@gmail.com";
const password = "Mystery@1234"

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://development-na01-laureate.demandware.net')
  })

  it('should able to login', () => {
    cy.login(username, password)
    cy.get("[class*='dropdown-toggle']").should("have.text", "Thirukumaran")

  //  cy.get('#root').trigger('mouseover')
    //cy.get('.popover').should('be.visible','Explore Our Offerings')
  
    cy.get('#root').invoke('show')

  })
})
