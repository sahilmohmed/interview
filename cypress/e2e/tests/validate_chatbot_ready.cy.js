
/// <reference types="cypress" />
import * as allure from "allure-js-commons";


describe('validate chatbot readiness', () => {
  before(() => {
    cy.visit(Cypress.env('base'))

  })

  it('It ensures the chatbot has loaded correctly', () => {
    allure.description("verify the chatbot has loaded correctly")
    allure.displayName("chatbot readiness")
    allure.owner("Sahil Mohmed")
    allure.tags("ui", "chatbot")
    allure.severity("critical")

    cy.get_chat_bot()

  })

})
