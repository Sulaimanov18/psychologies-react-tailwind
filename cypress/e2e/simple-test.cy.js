describe('Google search', () => {
    it('search clickable', () => {
        cy.visit('https://www.google.com/');
        cy.get('[name="q"]').type('cypress.io{enter}');
    });
});

