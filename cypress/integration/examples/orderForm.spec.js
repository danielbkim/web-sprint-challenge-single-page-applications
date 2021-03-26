describe('functioning form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    });
    const userNameInput = () => cy.get('name="username"');
    // const authorInput = () => cy.get('input[name="author"]');
    // pull toppings
    const submitBtn = () => cy.get('#submitBtn');

    it('should allow sanity tests to pass', () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
    });
    it('should test that elements exist and render in the DOM', () => {
        // userNameInput().should('exist');
        // 
        // submitBtn().should('exist');
    });
});