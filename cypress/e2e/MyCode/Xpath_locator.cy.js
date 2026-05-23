require("cypress-xpath")
describe("Xpath Multiple attribute",()=>{

    it("Orangehrm create account using multiple attributes",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.xpath("//h5[text()='Login']").then(function(ele){
            cy.log(ele.text())
        })
     

       


    })

})