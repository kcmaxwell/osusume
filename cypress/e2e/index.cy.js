describe('Index page', () => {
    it('should not give a 404 visiting', () => {
        cy.visit('/');
        
        cy.url().should('eq', 'http://localhost:3000/');
    })
})