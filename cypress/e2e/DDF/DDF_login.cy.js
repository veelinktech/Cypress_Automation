describe("Login with DDF", ()=>{

    beforeEach(()=>{
        cy.visit("http://admin-demo.nopcommerce.com/login")
    })

    it("Login",()=>{

        cy.get("#Email").type("admin@123")
    })
})