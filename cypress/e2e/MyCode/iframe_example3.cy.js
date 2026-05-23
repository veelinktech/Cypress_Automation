describe('Iframe handle',()=>{

    it('Way1', ()=>{

        cy.visit("https://webdriveruniversity.com/IFrame/index.html")
        cy.get("#frame")
                    .its('0.contentDocument.body')
                    .should('be.visible')
                    .then(cy.wrap)
                    .contains('Our Products')
                    .click()
        cy.wait(5000)

    })
})