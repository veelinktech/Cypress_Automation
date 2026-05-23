describe('Iframe handling', ()=>{

    it("Way2",()=>{
        cy.visit("https://webdriveruniversity.com/IFrame/index.html")
        cy.wait(5000)
        
        cy.getIframeBody('#frame')
          .contains('Our Products')
          .click()
    })
})