
describe.only("Add valid data", function() {

    it("Add valid data in all fields", function(){
        

cy.fixture('Aviva').then((user) => {

    
   for (var i = 0; i< user.length; i++) {

    cy.visit('https://megsonnewstg.wpengine.com/mc-quoter/');
        cy.get(':nth-child(2) > .tru-form-item > :nth-child(2) > .tru-radio-select > :nth-child(2) > input').check();
        cy.wait(2000)
        cy.get(':nth-child(3) > .tru-form-item > :nth-child(2) > .tru-radio-select > :nth-child(2) > input').check();
        cy.wait(2000)
        cy.get(':nth-child(4) > .tru-form-item > :nth-child(2) > .tru-radio-select > :nth-child(2) > input').check();
        cy.wait(2000)
        cy.get('.tru-button').click();

    cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-horizontal-fields > .visible > .control-wrapper > .tru-form-item > .tru-text-input', { timeout: 60000 }).type(user[i].Firstname);
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-horizontal-fields > .hidden > .control-wrapper > .tru-form-item > .tru-text-input', { timeout: 60000 }).type(user[i].Lastname);
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .tru-form-item > .tru-text-input', { timeout: 60000 }).type(user[i].Phone);
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > .tru-form-item > .tru-text-input', { timeout: 60000 }).type(user[i].Email);
    cy.wait(2000)

    cy.get('.tru-next-btn').click();
    cy.wait(3000)

           }
    
})

    });

    });


