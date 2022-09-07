/// <reference types = "cypress" />
// Describe is used for grouping (suite). We can use "describe" or "context" as they're the same and with the same syntax
// Describe has the same parameters of "it", the first one is the name and the second will be the function that will caontain the group of test cases
describe ("Login functionality", function () { // this will group the test cases related to login

// The "before" and "after" Hooks take only one argument which is function

// before: it executes only one time before all test cases
// if we have 3 test cases, the before will execute only one time before them

// beforeEach: it will execute before all and every test case
// if we have 3 test cases, the beforeEach will execute 3 times
    before(function () {
        cy.log('I am inside the BEFORE hook')
    })
    beforeEach(function () {
        cy.log('I am inside the BEFOREEach hook')

    })


// after: it executes only one time after all test cases
// if we have 3 test cases, the after will execute only one time after them

// afterEach: it will execute after all and every test case
// if we have 3 test cases, the afterEach will execute 3 times

    after(function () {
        cy.log('I am inside the AFTER hook')

    })
    afterEach(function () {
        cy.log('I am inside the AFTEREach hook')

    })

// "it" --> describes a test case
// to write any test case using Mocha, we should use "it". it is a function inside Mocha that takes 2 arguments("Name of test case", function(){the stpes that will be excuted in this test case})

// Test Case #1
it("should login with valid email and password correctly",function () {
    cy.log("I am inside a test case") // Log = print

} )

// Test Case #2
it ("should not login if the user name is wrong", () => {
    cy.log('I am inside test case 2')
} )

it ("should be able to reset the password", () => {
    cy.log('I am inside test case 3')
} )

})   

describe("Order food functionality ",() => {

    it ("should be able to order foood", () => {
        cy.log('I am inside test case 4')
    } )

} ) 


