
/// <reference types="cypress" />
import * as allure from "allure-js-commons";


describe('validate chat input', () => {
  before(() => {
    cy.visit(Cypress.env('base'))
    cy.get_chat_bot()
  })

  it('It allows the user to input to chat and get a response from ai', () => {

    allure.description("verify the user is able to input into the chatbot and get a response")
    allure.displayName("chatbot input")
    allure.owner("Sahil Mohmed")
    allure.tags("ui", "chatbot")
    allure.severity("critical")

    cy.message_chat_bot('hello')
    cy.verify_response_chat_bot('Hello')

    cy.message_chat_bot('what should i call you?')
    cy.verify_response_chat_bot('Assistant')

    cy.message_chat_bot('abc')
    cy.verify_response_chat_bot('don\'t know.')

    })
  })

