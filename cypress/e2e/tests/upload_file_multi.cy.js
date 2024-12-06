
/// <reference types="cypress" />
import * as allure from "allure-js-commons";



describe('upload multiple files', () => {
  before(() => {
    cy.visit(Cypress.env('base'))
  })

  it('It uploads multiple files', () => {
    allure.description("upload mutiple files to the chatbot")
    allure.displayName("upload multi files")
    allure.owner("Sahil Mohmed")
    allure.tags("ui", "upload")
    allure.severity("critical")

    cy.upload_multi_file([Cypress.env('doc1'),Cypress.env('doc2')])
  })

})
