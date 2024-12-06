
/// <reference types="cypress" />
import * as allure from "allure-js-commons";


describe('validate upload in progress for single file', () => {
  before(() => {
    cy.visit(Cypress.env('base'))
    cy.upload_single_file(Cypress.env('doc1'))
  })

  it('It uploads a single file and validates the file is being processed', () => {
    allure.description("verify single file is processed when uploaded")
    allure.displayName("single file proccessing")
    allure.owner("Sahil Mohmed")
    allure.tags("ui", "upload")
    allure.severity("critical")

    cy.verify_popup_message('File is being processed...')
    cy.get_api_response(Cypress.env('api_upload_status_path')).then((response => {
      expect(response.body.status).to.eq('PROCESSING')
    }))
  })

})
