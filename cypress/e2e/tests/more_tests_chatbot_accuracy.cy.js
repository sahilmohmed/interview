
/// <reference types="cypress" />
import * as allure from "allure-js-commons";


describe('More tests - check chatbot accuracy', () => {
  before(() => {
    cy.visit(Cypress.env('base'))
    cy.get_chat_bot()
  })

  it('It checks the that the repsonse contains a list of keywords', () => {

    allure.description("This test uploads technical documents to the chatbot and then asks relevent questions, the answer from ai should contain every item in the list of keywords")
    allure.displayName("Check Chatbot accuracy")
    allure.owner("Sahil Mohmed")
    allure.tags("Chatbot", "response")
    allure.severity("critical")



    cy.message_chat_bot(Cypress.env('question1'))
    cy.verify_response_chat_bot_list(Cypress.env('keywords1'))

    cy.message_chat_bot(Cypress.env('question2'))
    cy.verify_response_chat_bot_list(Cypress.env('keywords2'))

    cy.message_chat_bot(Cypress.env('question3'))
    cy.verify_response_chat_bot_list(Cypress.env('keywords3'))

    cy.message_chat_bot(Cypress.env('question4'))
    cy.verify_response_chat_bot_list(Cypress.env('keywords4'))

    cy.message_chat_bot(Cypress.env('question5'))
    cy.verify_response_chat_bot_list(Cypress.env('keywords5'))
    })
  })

