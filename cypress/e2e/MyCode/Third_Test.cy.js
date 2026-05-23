describe("Fb Test ", function(){

    it('My first tc in fb ', ()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get("input[name='username']").type('Admin')
    }
    )
})