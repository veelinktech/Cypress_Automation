describe('Handling child window ', ()=>{

    it("Way1", ()=>{
        cy.visit("https://webdriveruniversity.com/")
        cy.wait(5000)
        cy.get('#popup-alerts').then(e =>{
            let url = e.prop("href")
            cy.visit(url)
        })
        cy.url().should('include','Popup-Alerts/index.html')
        cy.title().should('eq','WebDriver | Popups & Alerts')
        cy.wait(5000)
        cy.go('back')
        cy.title().should('contains','Gianni Bruno | WebDriver University')
    })
})