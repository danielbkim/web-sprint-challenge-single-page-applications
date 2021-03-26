describe('functioning form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    });
    const userNameInput = () => cy.get('input[name="username"]');
    const pizzaSize = () => cy.get('select[name="size"]');
    // pull toppings
    const toppingsInput = () => cy.get('[type="checkbox"]');
    const extraCheeseTopping = () => cy.get('input[name="extraCheese"]');
    const pepperoniTopping = () => cy.get('input[name="pepperoni"]');
    const sausageTopping = () => cy.get('input[name="sausage"]');
    const meatballTopping = () => cy.get('input[name="meatball"]');
    const submitBtn = () => cy.get('#submitBtn');

    it('should allow sanity tests to pass', () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
    });
    it('should test that elements exist and render in the DOM', () => {
        userNameInput().should('exist');
        // TOPPINGS
        pizzaSize().should('exist');
        toppingsInput().should('exist');
        extraCheeseTopping().should('exist');
        pepperoniTopping().should('exist');
        sausageTopping().should('exist');
        meatballTopping().should('exist');
        // why does the submit button keep erroring out
        submitBtn().should('exist');

        cy.get('input[name="foobar"]').should("not.exist");
    });
    it('should type or change inputs', () => {

    });
});