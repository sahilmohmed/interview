
/// <reference types="cypress" />
import * as allure from "allure-js-commons";


describe('validate single file can be completely uploaded', () => {
  before(() => {
    cy.visit(Cypress.env('base'))
    cy.upload_single_file(Cypress.env('doc1'))

  })

  it('It uploads a single file and ensures it uploads successfully', () => {
    allure.description("check if a single file uploads successfully")
    allure.displayName("successful upload of single file")
    allure.owner("Sahil Mohmed")
    allure.tags("ui", "upload")
    allure.severity("critical")

    cy.verify_status_message('File Upload Complete')
    cy.get_api_response(Cypress.env('api_upload_status_path')).then((response => {
      expect(response.body.status).to.eq('COMPLETED')
    }))
  })

})
