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
    const specialInstructionsInput = () => cy.get('input[name="specialInstructions"]')

    console.log(pizzaSize)

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
        specialInstructionsInput().should('exist');
        // why does the submit button keep erroring out
        submitBtn().should('exist');

        cy.get('input[name="foobar"]').should("not.exist");
    });
    it('should be able to type or manipulate the inputs', () => {
        userNameInput()
            .should("have.value", "")
            .type("Daniel")
            .should("have.value", "Daniel")
        specialInstructionsInput()
            .should("have.value", "")
            .type("Daniel")
            .should("have.value", "Daniel")
        extraCheeseTopping()
            .check('Extra Cheese')
        pepperoniTopping()
            .check('Pepperoni')
        sausageTopping()
            .check('Sausage')
        meatballTopping()
            .check('Meatball')
    });
    it("should be able to submit the form", () => {
        cy.contains('Jerry').should('not.exist')
        userNameInput()
            .type('Jerry')
            .should('have.value', 'Jerry')
        // cy.get('select')
        //     .select('10')
        //     .should('have.value', '10')
        // pizzaSize()
        // console.log(pizzaSize());
        submitBtn().click();
        cy.contains("Jerry").should("exist");
    });
});