describe('My First Test Suite', () => {
    
    it('My First Test Case with positive', ()=> {

        cy.visit('https://www.google.com/')

        cy.title().should('eq', 'Google')        

    })

    it('My First Test Case with negative', ()=> {

        cy.visit('https://www.google.com/')

        cy.title().should('eq', 'Google')        

    })
})