

it("Should visit the website correctly first time", () => {
    // with the visit command we can go to a normal website, or localhost, or any html file in the system
    // Cypress recommends to set the baseURL in cypress.config.js file
    cy.visit('/')  // we set it with '/' because we put the url in cypress.config.js file as baseURL 

})

it("Should visit the website correctly second time", () => {
    //we can have cy.visit(url), or cy.visit(url,options), or cy.visit (options)
    // cy.visit(options), options is used as object {}, and we can put the url in it too
    cy.visit({
        url: '/'
    })

})

it("Should visit the website correctly third time", () => {
    // with the visit command we can go to a normal website, or localhost, or any html file in the system
    cy.visit('/')

})