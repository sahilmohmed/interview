
/// <reference types="cypress" />
import * as allure from "allure-js-commons";


describe('validate multiple files can be completely uploaded', () => {
  before(() => {
    cy.visit(Cypress.env('base'))
    cy.upload_multi_file([Cypress.env('doc1'),Cypress.env('doc2')])

  })

  it('It uploads multiple files and ensures they successfully upload', () => {
    allure.description("check if multiple files upload successfully")
    allure.displayName("successful upload")
    allure.owner("Sahil Mohmed")
    allure.tags("ui", "upload")
    allure.severity("critical")

    cy.verify_status_message('File Upload Complete')
    cy.get_api_response(Cypress.env('api_upload_status_path')).then((response => {
      expect(response.body.status).to.eq('COMPLETED')
    }))
  })

})
