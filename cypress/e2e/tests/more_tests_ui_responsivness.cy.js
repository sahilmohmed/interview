
/// <reference types="cypress" />
import * as allure from "allure-js-commons";


describe('more tests - ui responsivness', () => {
  beforeEach(() => {

    allure.description("verify ui responsivness with different viewports")
    allure.displayName("ui responsivness")
    allure.owner("Sahil Mohmed")
    allure.tags("ui", "responsiveness")
    allure.severity("critical")
    cy.visit(Cypress.env('base'))
    cy.get_chat_bot()
  })

  it('iphone 6 viewport', () => {

    cy.viewport('iphone-6')
    cy.message_chat_bot('hello')
    cy.verify_ui()

  })

  it('iphone xr viewport', () => {

    cy.viewport('iphone-xr')
    cy.message_chat_bot('hello')
    cy.verify_ui()

  })

  it('macbook 11 viewport', () => {

    cy.viewport('macbook-11')
    cy.message_chat_bot('hello')
    cy.verify_ui()

  })

  it('samsung note 9 viewport', () => {

    cy.viewport('samsung-note9')
    cy.message_chat_bot('hello')
    cy.verify_ui()

  })



})

