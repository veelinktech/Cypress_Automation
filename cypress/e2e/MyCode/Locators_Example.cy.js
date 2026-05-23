
describe('Locators Example', () => {
    it('My first test with locators', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        // Using different locators to interact with the elements
        cy.get("input[name='username']").type('Admin'); // Using name attribute
        cy.get("input[type='password']").type('admin123'); // Using type attribute
        cy.get("button[type='submit']").click(); // Using type attribute for button
        
        // Verify successful login by checking the URL or a specific element
        cy.url().should('include', '/dashboard');
        
    });
});