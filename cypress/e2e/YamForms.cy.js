
//CPP
describe("Add valid data", function () {

    it("Add valid data in all fields", function () {

        // cy.visit('https://yamlifeinsstg.wpengine.com/canada-protection-plan-cpp-online-application/');
        cy.visit('https://www.yaminsurance.com/');


        cy.get('.t-hero__content-wrapper > :nth-child(3) > .t-button').click();
        cy.get('#choice_7_63_0').check();
        cy.get('#gform_next_button_7_84').click();
        cy.get('#choice_7_11_1').should('be.visible').check();
        cy.wait(500);
        cy.get('#input_7_12').click();
        cy.wait(500);
        cy.get('.ui-datepicker-month').select('April')
        cy.wait(500);
        cy.get('.ui-datepicker-year').select('1963')
        cy.wait(500);
        cy.get(':nth-child(3) > :nth-child(2) > .ui-state-default').click();
        cy.wait(500);
        cy.get('#input_7_13_5').type('a2a2a2')
        cy.wait(500);
        cy.get('#choice_7_26_1').check();
        cy.wait(500);
        cy.get('#gform_next_button_7_88').click();
        cy.get('#input_7_15').should('be.visible').select('10 Years')
        cy.wait(500);
        cy.get('#input_7_16').select('$250,000')
        cy.wait(500);
        cy.get(':nth-child(1) > .select > .select-btn').click();









        // cy.get('#input_21_13').type("Samar");
        // cy.wait(100);
        // cy.get('#input_21_15').type('Yehia');
        // cy.wait(100);
        // cy.get('#choice_21_288_1').check();
        // cy.wait(100);
        // cy.get('#input_21_17_2').select('6');
        // cy.wait(100);
        // cy.get('#input_21_17_1').select('10');
        // cy.wait(100);
        // cy.get('#input_21_17_3').select('2010');
        // cy.wait(100);
        // cy.get('#input_21_18').type('22222222222');
        // cy.wait(100);
        // cy.get('#input_21_19').type('samar@trufla.com');
        // cy.wait(100);
        // cy.get('#input_21_20').select('Brazil');
        // cy.wait(100);
        // cy.get('#input_21_21').type('Canadian Citizen');
        // cy.get('#input_21_184').type('132-131-345');
        // cy.wait(100);
        // cy.get('#input_21_23').type('Test');
        // cy.wait(100);
        // cy.get('#input_21_25').type('Test');
        // cy.wait(100);
        // cy.get('#input_21_181').select('Ontario');
        // cy.wait(100);
        // cy.get('#input_21_183_5').type('L1H 7L7');
        // cy.wait(100);
        // cy.get('#input_21_293_2').select('24');
        // cy.wait(100);
        // cy.get('#input_21_293_1').select('2');
        // cy.wait(100);
        // cy.get('#input_21_293_3').select('1985');
        // cy.wait(100);
        // cy.get('#input_21_294_1').type('12');
        // cy.wait(100);
        // cy.get('#input_21_294_2').type('30');
        // cy.wait(100);
        // cy.get('#input_21_29').type('Test');
        // cy.wait(100);
        // cy.get('#input_21_182').select('Ontario');
        // cy.wait(100);
        // cy.get('#gform_next_button_21_32').click();
        // cy.wait(100);
        // //Page 2
        // cy.get('#input_21_33').should('be.visible').type('Test');
        // cy.wait(100);
        // cy.get('#choice_21_34_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_35_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_39_0').check();
        // cy.wait(100);
        // cy.get('#gform_next_button_21_55').click();
        // //Page3
        // cy.get('#choice_21_56_1').should('be.visible').check();
        // cy.wait(100);
        // cy.get('#choice_21_58_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_296_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_61_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_62_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_63_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_64_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_65_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_66_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_67_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_68_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_69_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_70_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_71_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_72_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_73_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_74_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_75_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_76_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_77_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_78_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_204_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_205_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_206_1').check();
        // cy.wait(100);    
        // cy.get('#choice_21_207_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_208_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_84_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_209_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_210_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_211_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_212_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_213_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_214_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_215_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_216_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_217_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_218_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_219_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_220_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_221_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_222_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_229_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_100_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_224_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_225_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_226_1').check();
        // cy.wait(100);
        // cy.get('#choice_21_227_1').check();
        // cy.wait(100);        
        // cy.get('#choice_21_228_1').check();
        // cy.wait(100);        
        // cy.get('#gform_next_button_21_122').click();
        // //Page 4
        // cy.get('#input_21_131').should('be.visible').type('Test');
        // cy.wait(100);
        // cy.get('#input_21_231').type('Test');
        // cy.wait(100);
        // cy.get('#input_21_133_2').select('12');
        // cy.get('#input_21_133_1').select('8');
        // cy.get('#input_21_133_3').select('1999');
        // cy.wait(100);
        // cy.get('#input_21_134').type('65');
        // cy.wait(100);
        // cy.get('#choice_21_135_0').check();
        // cy.wait(100);
        // cy.get('#choice_21_136_0').check();
        // cy.wait(1000);
        // cy.get('#gform_next_button_21_275').click();
        // //Page 5
        // cy.get('#choice_21_158_0').should('be.visible').check();
        // cy.wait(100);
        // cy.get('#choice_21_166_0').check();
        // cy.wait(100);
        // cy.get('#input_21_291').type('2410');
        // cy.wait(100);
        // cy.get('#choice_21_191_0').check();
        // cy.wait(3000);
        // cy.get('#gform_submit_button_21').click();

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
           return false
        })

    }) 
}) 


