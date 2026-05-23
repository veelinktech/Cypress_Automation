

describe("My Second Test suite", function()
{
     it('My First Test Case with positive', ()=> {

        cy.visit('https://www.instagram.com/')

        cy.title().should('eq', 'Instagram')        

    })
})