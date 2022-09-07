// const { it } = require("mocha");

const TIMEOUT = 60000;

describe.only("Add valid data", function () {

    it("Add valid data in all fields", function () {
        cy.visit('https://megsonnewstg.wpengine.com/mc-quoter/');
        cy.get(':nth-child(2) > .tru-form-item > :nth-child(2) > .tru-radio-select > :nth-child(2) > input').check();
        cy.get(':nth-child(3) > .tru-form-item > :nth-child(2) > .tru-radio-select > :nth-child(2) > input').check();
        cy.get(':nth-child(4) > .tru-form-item > :nth-child(2) > .tru-radio-select > :nth-child(2) > input').check();
        cy.get('.tru-button').click();

        cy.fixture('Aviva').then((user) => {


            for (var i = 0; i < user.length; i++) {

                cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-horizontal-fields > .visible > .control-wrapper > .tru-form-item > .tru-text-input', { timeout: TIMEOUT }).type(user[i].Firstname);
                cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-horizontal-fields > .hidden > .control-wrapper > .tru-form-item > .tru-text-input', { timeout: TIMEOUT }).type(user[i].Lastname);
                cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .tru-form-item > .tru-text-input', { timeout: TIMEOUT }).type(user[i].Phone);
                cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > .tru-form-item > .tru-text-input', { timeout: TIMEOUT }).type(user[i].Email);

                cy.wait(4000)

                cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-horizontal-fields > .visible > .control-wrapper > .tru-form-item > .tru-text-input').clear()
                cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-horizontal-fields > .hidden > .control-wrapper > .tru-form-item > .tru-text-input').clear()
                cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .tru-form-item > .tru-text-input').clear()
                cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > .tru-form-item > .tru-text-input').clear()

                cy.get('.tru-next-btn').click();


            }

        })




    });

});


