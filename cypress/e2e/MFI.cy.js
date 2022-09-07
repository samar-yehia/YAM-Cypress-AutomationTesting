
describe.only("Add valid data", function() {

    it("Add valid data in all fields", function(){
        

cy.fixture('Aviva-one').then((user) => {

    
   for (var i = 0; i< user.length; i++) {

    cy.visit('https://megsonnewstg.wpengine.com/mc-quoter/');
    cy.get('.tru-button').click();
    cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-horizontal-fields > .visible > .control-wrapper > .tru-form-item > .tru-text-input', { timeout: 60000 }).type(user[i].Firstname);
    // cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > .tru-layout-horizontal-fields > .hidden > .control-wrapper > .tru-form-item > .tru-text-input', { timeout: 60000 }).type(user[i].Lastname);
    // cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .tru-form-item > .tru-text-input', { timeout: 60000 }).type(user[i].Phone);
    // cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(3) > .tru-form-item > .tru-text-input', { timeout: 60000 }).type(user[i].Email);
    // cy.wait(2000)

    cy.get('.tru-next-btn').click();
    cy.wait(3000)

    cy.get(':nth-child(2) > .tru-form-item > .select-with-filter-container > .tooltip-container > .tru-single-select-arrow-wrapper > .ant-select > .ant-select-selector > .ant-select-selection-item')
    cy.get('select').select("rc_select_0");
}
    
})

    });

    });


