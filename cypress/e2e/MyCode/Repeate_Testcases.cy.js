describe('My First Test Suite', () => {


    Cypress._.times(2,(x)=>{
    it('My First Test Case with positive', ()=> {

        cy.visit('https://www.google.com/')

        cy.title().should('eq', 'Google')        

    })
})
})