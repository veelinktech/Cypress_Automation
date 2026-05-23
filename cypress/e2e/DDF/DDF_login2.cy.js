describe("Login with DDF2", ()=>{

    beforeEach(()=>{
        cy.visit("http://www.goole.com")
    })

    it("Login",()=>{

        cy.get("#Email").type("admin@123")
    })
})
