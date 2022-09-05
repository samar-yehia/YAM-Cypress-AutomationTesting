// array to save the viewports we want to test on instead of copying and pasting the test case for each dimensions. 
// ForEach is used to loop over the array
// to find any element using any attribute, we use []: cy.get('[name.of.attribute]')
['iphone-8','ipad-mini','macbook-15'].forEach(viewport => {
    // we can use it.only if we want to execute only one test case without commenting the others
    it('Should be able to open a website in different views',()=> {
        // we can use cy.viewport to set the height and width of the test runner
        // useful to test our application if different viewports
         // cy.viewport(550,750)
         cy.viewport(viewport)
         cy.visit('https://megsonnewstg.wpengine.com/mc-quoter/')
     })
})


