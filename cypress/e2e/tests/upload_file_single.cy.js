
/// <reference types="cypress" />
import * as allure from "allure-js-commons";


describe('upload single file', () => {
  before(() => {
    cy.visit(Cypress.env('base'))
  })

  it('It uploads a single file', () => {
    allure.description("upload single file to chatbot")
    allure.displayName("upload single file")
    allure.owner("Sahil Mohmed")
    allure.tags("ui", "upload")
    allure.severity("critical")

    cy.upload_single_file(Cypress.env('doc1'))
  })

})
