// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "allure-cypress";


// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add('upload_single_file', (file) => {
    cy.get('body > div > label').selectFile(file)
    cy.get('#uploadButton').click()
})

Cypress.Commands.add('upload_multi_file', (file) => {
    cy.get('body > div > label').selectFile(file)
    cy.get('#uploadButton').click()
})

Cypress.Commands.add('verify_popup_message', (expected) => {
    cy.get('#popup').should('have.class', 'active')
    cy.get('#popupMessage').should('have.text', expected)
})

Cypress.Commands.add('get_api_response', (path) => {
    return cy.request('GET', Cypress.env('api') + path)
})

Cypress.Commands.add('verify_status_message', (message) => {
    cy.get('#statusMessage', {timeout : 12000}).should('have.css', 'display', 'block')
    cy.get('#statusMessage').should('have.text', message)
})

Cypress.Commands.add('get_chat_bot', () => {
    cy.upload_multi_file([Cypress.env('doc1'),Cypress.env('doc2')])
    cy.get('#chatButton', {timeout : 12000}).should('have.css', 'display', 'inline-block')
    cy.get('#chatButton').click()
    
    cy.get('#chatMessages .message.user').should('contain', 'connected to chat')
    cy.get('#chatMessages .message.ai', {timeout : 12000}).should('exist')
    cy.get('#chatMessages').should('have.length', 1)
    cy.wait(3000)
})

Cypress.Commands.add('message_chat_bot', (message) => {
    cy.get('#chatInput').type(message)
    cy.get('#sendButton').click()
    cy.get('#chatMessages .message.user').last().should('contain.text', message)
})

Cypress.Commands.add('verify_response_chat_bot', (expected) => {
    cy.get('#chatMessages .message').last({timeout:20000}).should('have.class', 'ai')
    cy.get('#chatMessages .message.ai').last({timeout:20000}).should('contain.text', expected.toString())

})

Cypress.Commands.add('verify_response_chat_bot_list', (expected) => {
    cy.get('#chatMessages .message').last({timeout:20000}).should('have.class', 'ai')
    cy.get('#chatMessages .message.ai').last({timeout:20000}).invoke('text').then((text) => {
        text = text.toString();
        const allSubstringsPresent = expected.every(substring => text.includes(substring));
        expect(allSubstringsPresent).to.be.true;
    })

})

Cypress.Commands.add('verify_ui', () => {
    cy.get('body > div > div.chat-header').should('be.visible')
    cy.get('#chatInput').should('be.visible')
    cy.get('#sendButton').should('be.visible')
    cy.get('#chatMessages .message').last().should('be.visible')

})

