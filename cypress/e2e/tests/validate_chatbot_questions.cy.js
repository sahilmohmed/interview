
/// <reference types="cypress" />
import * as allure from "allure-js-commons";


describe('chatbot tech questions', () => {
  before(() => {
    cy.visit(Cypress.env('base'))
    cy.get_chat_bot()
  })

  it('It allows the user to ask technical questions to the chatbot', () => {
    allure.description("ask the chatbot technical questions and verify the response contains a keyword")
    allure.displayName("chatbot tech questions")
    allure.owner("Sahil Mohmed")
    allure.tags("ui", "chatbot")
    allure.severity("critical")

    cy.message_chat_bot(Cypress.env('question1'))
    cy.verify_response_chat_bot('Selenium')

    cy.message_chat_bot(Cypress.env('question2'))
    cy.verify_response_chat_bot('web')

    cy.message_chat_bot(Cypress.env('question3'))
    cy.verify_response_chat_bot('tool')

    cy.message_chat_bot(Cypress.env('question4'))
    cy.verify_response_chat_bot_list('Yes')

    cy.message_chat_bot(Cypress.env('question5'))
    cy.verify_response_chat_bot_list('Selenium')
    })
  })

