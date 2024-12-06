
/// <reference types="cypress" />
import * as allure from "allure-js-commons";


describe('validate upload in progress for multiple files', () => {
  before(() => {
    cy.visit(Cypress.env('base'))
    cy.upload_multi_file([Cypress.env('doc1'),Cypress.env('doc2')])

  })

  it('It uploads multiple files and ensures the files are being processed', () => {
    allure.description("verify files are being proccessed when uploading multiple files")
    allure.displayName("multi file proccessing")
    allure.owner("Sahil Mohmed")
    allure.tags("ui", "upload")
    allure.severity("critical")

    cy.verify_popup_message('File is being processed...')
    cy.get_api_response(Cypress.env('api_upload_status_path')).then((response => {
      expect(response.body.status).to.eq('PROCESSING')
    }))
  })

})
