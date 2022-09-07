
// function validateEmail(email) 
// {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(email);
// }

  

describe("Add valid data", function () {

    // iphone XS, Rotated iphoneXS ,iPad7th ,Rotated ipad7 ,Desktop  , Samsung S8+ ,Rotated SamsungS8+
    // [[375, 812], [812, 375], [320, 568], [568, 320], [2279, 1938], [360, 740], [740, 360]].forEach(viewport => {   // [1536 , 864] is our desktop dimensions
    [[1536, 864]].forEach(viewport => {
        // [[568, 320]].forEach(viewport => {


        it("Add valid data in all fields", function () {

            cy.fixture('RBC-Form-Valid').then((user) => {
                for (var i = 0; i < 1; i++) {

                    // for (var i = 0; i < user.length; i++) {

                    if (Cypress._.isArray(viewport)) {             //this contition is to check the height and width. If it not set, only the first number will be tested and it will fail
                        cy.viewport(viewport[0], viewport[1])
                    }
                    else {
                        cy.viewport(viewport)
                    }

                    cy.visit('https://www.yaminsurance.com/rbc/?code=RBCL&image=https%3A%2F%2Fwww.compulifeapi.com%2Fimages%2Flogosapicanada%2FRBCL-small.png&coverage_amount=%24250%2C000&monthly_premium=%2411.30&term_coverage=10+Years&age=28&ep_token=682206e7f4e160fb8dede29c747a8fd2');
                    // cy.wait(2000);
                    // cy.get('.t-hero__content-wrapper > :nth-child(3) > .t-button', { timeout: 60000 }).click();
                    // cy.get('#choice_7_63_0', { timeout: 60000 }).check();
                    // cy.get('#gform_next_button_7_84', { timeout: 60000 }).click();
                    // cy.get('#choice_7_11_1', { timeout: 60000 }).should('be.visible', { timeout: 60000 }).check();
                    // cy.get('#input_7_12', { timeout: 60000 }).click();
                    // //cy.wait(1500);
                    // cy.get('.ui-datepicker-month', { timeout: 60000 }).select('April')
                    // //cy.wait(1500);
                    // cy.get('.ui-datepicker-year', { timeout: 60000 }).select('1963')
                    // //cy.wait(1500);
                    // cy.get(':nth-child(3) > :nth-child(2) > .ui-state-default', { timeout: 60000 }).click();
                    // //cy.wait(1500);
                    // cy.get('#input_7_13_5', { timeout: 60000 }).type('a2a2a2')
                    // //cy.wait(1500);
                    // cy.get('#choice_7_26_1', { timeout: 60000 }).check();
                    // //cy.wait(4000);
                    // cy.get('#gform_next_button_7_88', { timeout: 60000 }).click();
                    // cy.get('#input_7_15', { timeout: 60000 }).should('be.visible').select('10 Years')
                    // //cy.wait(1500);
                    // cy.get('#input_7_16', { timeout: 60000 }).select('$250,000')
                    // //cy.wait(1500);
                    // cy.get(':nth-child(1) > .select > .select-btn',  { timeout: 60000 }).should('be.visible').click(); 


                    // Page 1
                    if (viewport == [568, 320]) {                 // rotated iPad7th
                        cy.get('#input_70_4').type('downarrow')

                    }
                    else {
                        cy.get('#input_70_4', { timeout: 60000 }).should('be.visible').select(user[i].Title)
                    }
                    // expect(user[i].Title).to.not.be.null;
                    expect(user[i].Title).to.exist;
                    expect(user[i].Title).to.not.equal('Check one');
                    //cy.wait(1500);
                    if (user[i].Title == 'Other') {
                        cy.get('#input_70_5').type(user[i].OtherTitle)
                    }

                    cy.get('#input_70_7', { timeout: 60000 }).type(user[i].Lastname);
                    expect(user[i].Lastname).to.exist;
                    expect(user[i].Lastname).to.be.a('string');
                    //cy.wait(1500);

                    cy.get('#input_70_8', { timeout: 60000 }).type(user[i].Firstname);
                    expect(user[i].Firstname).to.exist;
                    expect(user[i].Firstname).to.be.a('string');
                    //cy.wait(1500);

                    if (viewport == [568, 320]) {                 // rotated iPad7th
                        cy.get('#input_70_589').type('downarrow')
                    }
                    else {
                        cy.get('#input_70_589', { timeout: 60000 }).type(user[i].Middlename);
                    }
                    expect(user[i].Middlename).to.be.a('string');
                    //cy.wait(1500);

                    cy.get('#input_70_10', { timeout: 60000 }).type(user[i].FormerName);
                    expect(user[i].FormerName).to.be.a('string');
                    //cy.wait(1500);

                    cy.get('#input_70_13', { timeout: 60000 }).type(user[i].BirthplaceCountry);
                    expect(user[i].BirthplaceCountry).to.exist;
                    expect(user[i].BirthplaceCountry).to.be.a('string');
                    //cy.wait(1500);

                    cy.get('#input_70_431', { timeout: 60000 }).type(user[i].Day);
                    expect(user[i].Day).to.exist;
                    //cy.wait(1500);

                    cy.get('#input_70_432', { timeout: 60000 }).type(user[i].Month);
                    expect(user[i].Month).to.exist;
                    //cy.wait(1500);

                    cy.get('#input_70_662', { timeout: 60000 }).type(user[i].Year);
                    expect(user[i].Year).to.exist;
                    //cy.wait(1500);


                    var Gender = user[i].Gender;
                    cy.get(Gender).check().should('be.checked');
                    //cy.wait(1500);

                    var Smoking = user[i].Smoking;
                    cy.get(Smoking).check().should('be.checked');
                    //cy.wait(1500);

                    var EnglishFrench = user[i].EnglishFrench;
                    cy.get(EnglishFrench).check().should('be.checked');
                    //cy.wait(1500);

                    //*******   // if No, add an assertion to have text
                    if (EnglishFrench == '#choice_70_16_1') {
                        cy.get('#field_70_17 > p').should('contain', ' Please ensure a Statement of Understanding is signed by the Proposed Insured and the Proposed Owner(s) and submitted with this Application.')
                    }

                    var FrenchPolicy = user[i].FrenchPolicy;
                    cy.get(FrenchPolicy).check().should('be.checked');
                    //cy.wait(1500);

                    var Residency = user[i].Residency
                    cy.get(Residency).check().should('be.checked');

                    //******* if Other, "Please Specify" should appear (Add assertion) add a condition to enter this field
                    if (Residency == '#choice_70_19_2') {
                        cy.get('#input_70_20').should('be.visible').type(user[i].PleaseSpecify);
                        expect(user[i].PleaseSpecify).to.exist;
                    }
                    // cy.wait(1500);

                    cy.get('#input_70_21', { timeout: 60000 }).type(user[i].ResidencyYears);
                    expect(user[i].ResidencyYears).to.exist;
                    //cy.wait(1500);

                    cy.get('#input_70_22', { timeout: 60000 }).type(user[i].ResidencyMonths);
                    // expect(user[i].ResidencyMonths).to.exist;
                    //cy.wait(1500);

                    cy.get('#input_70_633', { timeout: 60000 }).type(user[i].CivicNo);
                    expect(user[i].CivicNo).to.not.be.a('string')
                    //cy.wait(1500);

                    cy.get('#input_70_634', { timeout: 60000 }).type(user[i].SuiteNo);
                    expect(user[i].SuiteNo).to.not.be.a('string')
                    //cy.wait(1500);

                    cy.get('#input_70_26', { timeout: 60000 }).type(user[i].Street);
                    expect(user[i].Street).to.exist;
                    //cy.wait(1500);

                    cy.get('#input_70_28', { timeout: 60000 }).type(user[i].City);
                    expect(user[i].City).to.exist;
                    //cy.wait(1500);

                    cy.get('#input_70_620', { timeout: 60000 }).select(user[i].Province);
                    expect(user[i].Province).to.exist;
                    expect(user[i].Province).to.not.equal('Select');
                    //cy.wait(1500);

                    cy.get('#input_70_566', { timeout: 60000 }).type(user[i].PostalCode);
                    expect(user[i].PostalCode).to.exist;
                    expect(user[i].PostalCode).to.match(/^([ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ])\ {1}(\d[ABCEGHJKLMNPRSTVWXYZ]\d)$/);
                    //cy.wait(1500);

                    cy.get('#input_70_34', { timeout: 60000 }).type(user[i].Email);
                    expect(user[i].Email).to.exist;
                    expect(user[i].Email).to.match(/\S+@\S+\.\S+/);

                    // expect(validateEmail(user[i].Email), true)
                    //cy.wait(1500);

                    cy.get('#input_70_38', { timeout: 60000 }).type(user[i].HomePhone);
                    expect(user[i].HomePhone).to.match(/^(\()?[2-9]{1}\d{2}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/);

                    //cy.wait(1500);
                    cy.get('#input_70_40', { timeout: 60000 }).type(user[i].WorkPhone);
                    expect(user[i].WorkPhone).to.match(/^(\()?[2-9]{1}\d{2}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/);

                    //cy.wait(1500);
                    cy.get('#input_70_39', { timeout: 60000 }).type(user[i].MobileNum);
                    expect(user[i].MobileNum).to.match(/^(\()?[2-9]{1}\d{2}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/);

                    //cy.wait(1500);
                    cy.get('#input_70_42', { timeout: 60000 }).type(user[i].EmployerName);
                    expect(user[i].EmployerName).to.exist;
                    expect(user[i].EmployerName).to.be.a('string');
                    //cy.wait(1500);
                    cy.get('#input_70_663', { timeout: 60000 }).type(user[i].EmployerAddress);
                    //cy.wait(1500);
                    cy.get('#input_70_45', { timeout: 60000 }).type(user[i].EmployerStreet);
                    expect(user[i].EmployerStreet).to.exist;

                    //cy.wait(1500);
                    cy.get('#input_70_622', { timeout: 60000 }).select(user[i].EmployerProvince);
                    expect(user[i].EmployerProvince).to.exist;
                    expect(user[i].EmployerProvince).to.not.equal('Select');
                    //cy.wait(1500);

                    cy.get('#input_70_567', { timeout: 60000 }).type(user[i].EmployerPostalCode);
                    expect(user[i].EmployerPostalCode).to.exist;
                    expect(user[i].EmployerPostalCode).to.match(/^([ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ])\ {1}(\d[ABCEGHJKLMNPRSTVWXYZ]\d)$/);

                    //cy.wait(1500);
                    cy.get('#input_70_48', { timeout: 60000 }).type(user[i].EmployerCity);
                    expect(user[i].EmployerCity).to.exist;
                    expect(user[i].EmployerCity).to.be.a('string');

                    //cy.wait(1500);
                    cy.get('#input_70_49', { timeout: 60000 }).type(user[i].EmployerPhoneNumber);
                    expect(user[i].EmployerPhoneNumber).to.match(/^(\()?[2-9]{1}\d{2}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/);

                    //cy.wait(1500);
                    cy.get('#input_70_50', { timeout: 60000 }).type(user[i].Occupation);
                    expect(user[i].Occupation).to.exist;
                    expect(user[i].Occupation).to.be.a('string');
                    //cy.wait(1500);
                    cy.get('#input_70_51', { timeout: 60000 }).type(user[i].BusinessNatureOfBusiness);
                    expect(user[i].BusinessNatureOfBusiness).to.exist;

                    //cy.wait(1500);
                    cy.get('#input_70_52', { timeout: 60000 }).type(user[i].BusinessDuties);
                    expect(user[i].BusinessDuties).to.exist;
                    //cy.wait(1500);
                    cy.get('#input_70_53', { timeout: 60000 }).type(user[i].HowLongWithEmployer);
                    expect(user[i].HowLongWithEmployer).to.exist;
                    //cy.wait(4000);
                    cy.get('#gform_next_button_70_1').click();


                    // Page 2

                    var PurposeOfInsurance1 = user[i].PurposeOfInsurance1;
                    cy.get('#label_70_57_1', { timeout: 60000 }).should('be.visible')
                    cy.get(PurposeOfInsurance1, { timeout: 60000 }).click();
                    expect(PurposeOfInsurance1).to.exist;
                    var PurposeOfInsurance2 = user[i].PurposeOfInsurance2;
                    var PurposeOfInsurance3 = user[i].PurposeOfInsurance3;

                    if (PurposeOfInsurance2 !== undefined) {
                        cy.get(PurposeOfInsurance2).click()
                    }
                    if (PurposeOfInsurance3 !== undefined) {
                        cy.get(PurposeOfInsurance3).click()
                    }

                    if (PurposeOfInsurance1 == "#label_70_57_3" || PurposeOfInsurance2 == "#label_70_57_3" || PurposeOfInsurance3 == "#label_70_57_3") {

                        cy.get('#input_70_58').should('be.visible').type(user[i].PleaseExplainPurpose);
                        expect(user[i].PleaseExplainPurpose).to.exist;

                    }

                    cy.wait(4000);

                    var LifeCoverage = user[i].DoYouHaveAnyLifeCoveragesInForceOrPendingIncludingAnyWithRBCLife;
                    cy.get(LifeCoverage).should('be.visible').check().should('be.checked');

                    //******* if Yes, add a condition
                    if (LifeCoverage == '#choice_70_63_0') {
                        cy.get('#input_70_65').should('be.visible').type(user[i].NameOfInsuranceCompany);
                        expect(user[i].NameOfInsuranceCompany).to.exist;

                        cy.get('#input_70_66').type(user[i].AmountOfLifeInsurance);
                        expect(user[i].AmountOfLifeInsurance).to.exist;

                        cy.get('#input_70_665').type(user[i].Policy);
                        expect(user[i].Policy).to.exist;

                        var PurposeInsurance = user[i].PurposeInsurance
                        cy.get(PurposeInsurance).check().should('be.checked');
                        cy.get('#input_70_435').type(user[i].YearAndMonthIssued);
                        expect(user[i].YearAndMonthIssued).to.exist;

                        var IntendedInsurance = user[i].IsTheInsuranceAppliedForIntendedToReplaceAnyInsuranceNowInForceWithAnyCompany
                        cy.get(IntendedInsurance).check().should('be.checked');
                    }


                    var LifeCoverageInForce = user[i].HaveYouAppliedForLifeCriticalIllnessOrDisabilityInsuranceConcurrentlyWithThisApplicationOrWithinThePast12MonthsWithAnyOtherCompany;
                    cy.get(LifeCoverageInForce).check().should('be.checked');

                    //******* if Yes, add a condition
                    if (LifeCoverageInForce == '#choice_70_89_0') {
                        cy.get('#input_70_96').type(user[i].AmountAppliedFor);
                        expect(user[i].AmountAppliedFor).to.exist;

                        cy.get('#choice_70_94_0').check().should('be.checked');
                        cy.get('#input_70_95').type(user[i].NameOfInsurer)
                        expect(user[i].NameOfInsurer).to.exist;

                    }
                    //cy.wait(4000);
                    cy.get('#gform_next_button_70_102', { timeout: 60000 }).click();

                    // Page 3

                    cy.get('#input_70_493', { timeout: 60000 }).should('be.visible').select(user[i].AreThereBeneficiariesToAdd);
                    //cy.wait(4000);
                    //******* if Yes, add a condition
                    if (user[i].AreThereBeneficiariesToAdd == "Yes") {
                        cy.get('#input_70_105').type(user[i].FullNameOfBeneficiary1)
                        expect(user[i].FullNameOfBeneficiary1).to.exist;

                        var Beneficiary1Type = user[i].Beneficiary1Type;
                        cy.get(Beneficiary1Type).check().should('be.checked');
                        cy.get('#input_70_107').type(user[i].RelationshipToProposedInsuredProposedOwnerInQuebecOfBeneficiary1)
                        expect(user[i].RelationshipToProposedInsuredProposedOwnerInQuebecOfBeneficiary1).to.exist;

                        cy.get('#input_70_580').select(user[i].StatusOfBeneficiary1)
                        cy.get('#input_70_109').type(user[i].SharePercentageOfBeneficiary1);
                        expect(user[i].SharePercentageOfBeneficiary1).to.exist;
                        expect(user[i].SharePercentageOfBeneficiary1).to.be.gte(1).and.be.lte(100);

                    }
                    cy.get('#gform_next_button_70_150', { timeout: 60000 }).click();


                    //Page 4

                    var ProposedOwnerTitle = user[i].ProposedOwnerTitle;
                    cy.get(ProposedOwnerTitle, { timeout: 60000 }).should('be.visible').check().should('be.checked');
                    //cy.wait(1500);
                    cy.get('#input_70_154', { timeout: 60000 }).type(user[i].ProposedOwnerFirstNameOrCompanyName);
                    expect(user[i].ProposedOwnerFirstNameOrCompanyName).to.exist;

                    //cy.wait(1500);
                    cy.get('#input_70_155', { timeout: 60000 }).type(user[i].ProposedOwnerMiddleName);
                    //cy.wait(1500);
                    cy.get('#input_70_156', { timeout: 60000 }).type(user[i].ProposedOwnerLastName);
                    //cy.wait(1500);
                    cy.get('#input_70_455', { timeout: 60000 }).type(user[i].RelationshipToProposedInsuredIfProposedInsuredIsNotPolicyOwner);
                    //cy.wait(1500);
                    cy.get('#input_70_159', { timeout: 60000 }).type(user[i].MailingAddress);
                    expect(user[i].MailingAddress).to.exist;

                    //cy.wait(1500);
                    cy.get('#input_70_160', { timeout: 60000 }).type(user[i].MailingCity);
                    expect(user[i].MailingCity).to.exist;

                    //cy.wait(1500);
                    cy.get('#input_70_621', { timeout: 60000 }).select(user[i].MailingProvince);
                    expect(user[i].MailingProvince).to.exist;

                    //cy.wait(1500);
                    cy.get('#input_70_568', { timeout: 60000 }).type(user[i].MailingPostalCode);
                    expect(user[i].MailingPostalCode).to.exist;
                    expect(user[i].MailingPostalCode).to.match(/^([ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ])\ {1}(\d[ABCEGHJKLMNPRSTVWXYZ]\d)$/);

                    //cy.wait(1500);
                    cy.get('#input_70_164', { timeout: 60000 }).type(user[i].AttentionTo);
                    //cy.wait(1500);
                    cy.get('#input_70_165', { timeout: 60000 }).type(user[i].MailingEmailAddress);
                    expect(user[i].MailingEmailAddress).to.exist;
                    expect(user[i].MailingEmailAddress).to.match(/\S+@\S+\.\S+/);

                    //cy.wait(4000);
                    cy.get('#gform_next_button_70_167').click();

                    // Page 5
                    /////////// Assertions for Financial Information page are not added yet                        
                    cy.get('#input_70_170', { timeout: 60000 }).should('be.visible').type(user[i].WhatIsYourAnnualEarnedIncomeFromEmploymentInCanadianDollars);
                    expect(user[i].WhatIsYourAnnualEarnedIncomeFromEmploymentInCanadianDollars).to.exist;

                    //cy.wait(1500);
                    cy.get('#input_70_574', { timeout: 60000 }).type(user[i].WhatIsYourEstimatedNetWorthInCanadianDollars);
                    expect(user[i].WhatIsYourEstimatedNetWorthInCanadianDollars).to.exist;

                    cy.get('#input_70_575', { timeout: 60000 }).type(user[i].AmountOfMortgageOutstandingOnPersonalResidenceAndOrCottage);
                    expect(user[i].AmountOfMortgageOutstandingOnPersonalResidenceAndOrCottage).to.exist;

                    cy.get('#input_70_576', { timeout: 60000 }).type(user[i].IfNotSelfSupportingWhatIsTheAnnualGrossAmountOfTheFamilyEarnedIncome);
                    expect(user[i].IfNotSelfSupportingWhatIsTheAnnualGrossAmountOfTheFamilyEarnedIncome).to.exist;

                    cy.get('#input_70_577', { timeout: 60000 }).type(user[i].WhatIsYourAnnualIncomeInCanadianDollarsFromOtherSources);
                    expect(user[i].WhatIsYourAnnualIncomeInCanadianDollarsFromOtherSources).to.exist;

                    cy.get('#input_70_175', { timeout: 60000 }).type(user[i].DescribeOtherSourcesOfIncome);
                    expect(user[i].DescribeOtherSourcesOfIncome).to.exist;

                    cy.get('#input_70_176', { timeout: 60000 }).type(user[i].BusinessDuties); //Business Duties doesn't match this field but it contains "Test", so I user it here to fill this text box
                    expect(user[i].BusinessDuties).to.exist;

                    var Bankruptcy = user[i].HaveYouWithinThePast5YearsDeclaredPersonalOrCorporateBankruptcy;
                    cy.get(Bankruptcy).check().should('be.checked');
                    //******* if Yes, add a condition
                    if (Bankruptcy == '#choice_70_177_0') {
                        cy.get('#input_70_179').type(user[i].BankruptcyDischargeDate);
                        expect(user[i].BankruptcyDischargeDate).to.exist;

                        cy.get('#input_70_180').type(user[i].BankruptcyCompleteDetails);
                        expect(user[i].BankruptcyCompleteDetails).to.exist;

                    }
                    //cy.wait(4000);
                    cy.get('#gform_next_button_70_181').click();


                    // Page 6

                    var EmploymentInsurance = user[i].HaveYouCollectedEIEmploymentInsuranceDisabilityBenefitsWorkersCompensationBenefitsCPPOrQPPDisabilityBenefitsIncomeReplacementBenefitsOrAnyFormOfSocialAssistanceInThePast12Months;
                    cy.get(EmploymentInsurance).should('be.visible').check();
                    //cy.wait(1500);
                    //******* if Yes, add a condition
                    if (EmploymentInsurance == '#choice_70_183_0') {
                        cy.get('#input_70_443').type(user[i].CPPorQPPDateStarted);
                        expect(user[i].CPPorQPPDateStarted).to.exist;

                        cy.get('#input_70_446').type(user[i].CPPorQPPDateEnded);
                        expect(user[i].CPPorQPPDateEnded).to.exist;

                        var CPPorQPPBenefits = user[i].CPPorQPPBenefits
                        cy.get(CPPorQPPBenefits).check().should('be.checked');
                        if (CPPorQPPBenefits == '#choice_70_619_3') {
                            cy.get('#input_70_188').type(user[i].PleaseDescribeOther);
                            expect(user[i].PleaseDescribeOther).to.exist;

                        }
                    }

                    var Pilot = user[i].HaveYouWithinThePast24MonthsBeenAStudentPilotOrPilotedaPlaneUltralightOrGliderOrDoYouHaveAnyIntentionOfDoingSoInTheFuture;
                    cy.get(Pilot).should('be.visible').check().should('be.checked');
                    //******* if Yes, add a condition
                    if (Pilot == '#choice_70_197_0') {
                        cy.get('#field_70_449 > p').should('have.text', ' Please complete the Aviation Questionnaire.')
                    }
                    //cy.wait(1500)


                    var TraveledToCanadaOrUSA = user[i].HaveYouWithinThePast12MonthsTraveledOutsideCanadaOrTheUnitedStatesofAmericaOrDoYouIntendToDoSoWithinTheNext12Months;
                    cy.get(TraveledToCanadaOrUSA, { timeout: 60000 }).check().should('be.checked');
                    //cy.wait(1500);
                    //******* if Yes, add a condition
                    if (TraveledToCanadaOrUSA == '#choice_70_199_0') {
                        cy.get('#input_70_204').type(user[i].CanadaOrUSADates);
                        expect(user[i].CanadaOrUSADates).to.exist;
                        cy.get('#input_70_207').type(user[i].CanadaOrUSACountriesOrCities);
                        expect(user[i].CanadaOrUSACountriesOrCities).to.exist;
                        cy.get('#input_70_211').type(user[i].CanadaOrUSALengthOfStay);
                        expect(user[i].CanadaOrUSALengthOfStay).to.exist;
                        cy.get('#input_70_205').type(user[i].CanadaOrUSAReason);
                        expect(user[i].CanadaOrUSAReason).to.exist;

                    }


                    var HazardousSport = user[i].HaveYouWithinThePast24MonthsEngagedInAnyHazardousContactSportsOrActivitiesIncludingButNotLimitedToRacingScubaDivingDeeperThan100ft30mSkydivingHeliSkiingOrBackCountrySkiingOrDoYouIntendToDoSo;
                    cy.get(HazardousSport).check().should('be.checked');
                    //cy.wait(1500);
                    //******* if Yes, add a condition
                    if (HazardousSport == '#choice_70_214_0') {
                        cy.get('#input_70_215').type(user[i].HazardousSportOrActivityType1);
                        expect(user[i].HazardousSportOrActivityType1).to.exist;

                        cy.get('#input_70_450').type(user[i].DatesFrequencyProfessionalAmateurRecreationalCommercial1);
                        expect(user[i].DatesFrequencyProfessionalAmateurRecreationalCommercial1).to.exist;

                    }


                    var Disability = user[i].HaveYouEverHadLifeDisabilityOrCriticalIllnessInsuranceRatedModifiedRejectedRescindedOrHaveYouBeenDeniedRenewalOrReinstatement;
                    cy.get(Disability).check().should('be.checked');
                    //cy.wait(1500);
                    //******* if Yes, add a condition
                    if (Disability == '#choice_70_231_0') {
                        cy.get('#input_70_232').type(user[i].IndicateTypeOfInsuranceOfCriticalIllness);
                        expect(user[i].IndicateTypeOfInsuranceOfCriticalIllness).to.exist;

                        var StatusOfInsuranceOfCriticalIllness = user[i].StatusOfInsuranceOfCriticalIllness
                        cy.get(StatusOfInsuranceOfCriticalIllness).check().should('be.checked');
                        cy.get('#input_70_234').type(user[i].InsuranceCompanyOfCriticalIllness);
                        expect(user[i].InsuranceCompanyOfCriticalIllness).to.exist;

                        cy.get('#input_70_235').type(user[i].ReasonOfCriticalIllness)
                        expect(user[i].ReasonOfCriticalIllness).to.exist;

                    }


                    var CriminalOffence = user[i].HaveYouWithinThePast10YearsBeenConvictedOfAnyCriminalOffenceOrAreThereAnySuchChargesPending;
                    cy.get(CriminalOffence).check().should('be.checked');
                    //cy.wait(1500);
                    //******* if Yes, add a condition
                    if (CriminalOffence == '#choice_70_249_0') {
                        cy.get('#input_70_250_2').type(user[i].DateOfIncidentOfCriminalOffenceDay);
                        expect(user[i].DateOfIncidentOfCriminalOffenceDay).to.exist;

                        cy.get('#input_70_250_1').type(user[i].DateOfIncidentOfCriminalOffenceMonth);
                        expect(user[i].DateOfIncidentOfCriminalOffenceMonth).to.exist;

                        cy.get('#input_70_250_3').type(user[i].DateOfIncidentOfCriminalOffenceYear);
                        expect(user[i].DateOfIncidentOfCriminalOffenceYear).to.exist;

                        cy.get('#input_70_251').type(user[i].DetailsIncludingOutcomeOfCriminalOffence);
                        expect(user[i].DetailsIncludingOutcomeOfCriminalOffence).to.exist;

                    }


                    var DrivingOffence = user[i].HaveYouWithinThePast10YearsBeenConvictedOfAnyDrivingOffencesOrViolationsIncludingImpairedDrivingAndOrHaveYouHadADriversLicenseRevokedOrSuspendedOrAreAnySuchChargesPending;
                    cy.get(DrivingOffence).check().should('be.checked');
                    //cy.wait(1500);
                    //******* if Yes, add a condition
                    if (DrivingOffence == '#choice_70_255_0') {
                        cy.get('#input_70_257').type(user[i].DriversLicenseNumber);
                        expect(user[i].DriversLicenseNumber).to.exist;

                        cy.get('#input_70_456').type(user[i].DetailsDatesOffenceTypeskmHOverLimit);
                        expect(user[i].DetailsDatesOffenceTypeskmHOverLimit).to.exist;


                    }
                    //cy.wait(4000);
                    cy.get('#gform_next_button_70_262').click();

                    //Page 7

                    cy.get('#input_70_265', { timeout: 60000 }).should('be.visible').type(user[i].LegalNameOfProposedInsured);
                    //cy.wait(1500);
                    var ParamedicalRequested = user[i].ParamedicalRequested;
                    cy.get(ParamedicalRequested, { timeout: 60000 }).check();
                    //cy.wait(1500);
                    cy.wait(4000);
                    cy.get('#gform_next_button_70_505').click();

                    //Page 8
                    // if paramedical request = Yes ==> pages 12-16 are not required

                    if (ParamedicalRequested == '#choice_70_266_1') {
                        cy.get('#input_70_664', { timeout: 60000 }).should('be.visible').type(user[i].CurrentHeight);
                        //cy.wait(1500);
                        var heightUnit = user[i].HeightUnit;
                        cy.get(heightUnit, { timeout: 60000 }).check();
                        //cy.wait(1500);
                        cy.get('#input_70_273', { timeout: 60000 }).type(user[i].CurrentWeight);
                        //cy.wait(1500);
                        var WeightUnit = user[i].WeightUnit
                        cy.get(WeightUnit, { timeout: 60000 }).check();
                        //cy.wait(1500);
                        var weightloss = user[i].HaveYouLost10lb5kgOrMoreWithinThePast12Months;
                        cy.get(weightloss).check();
                        //cy.wait(1500);
                        var medicalObservation = user[i].AreYouPresentlyUnderMedicalObservationOrInvestigationTreatmentTherapyCounsellingOrTakingMedication;
                        cy.get(medicalObservation).check();
                        //cy.wait(1500);
                        var symptoms = user[i].HaveYouHadAnySymptomsOrComplaintsRegardingYourHealthForWhichYouHaveNotYetConsultedaPhysicianOrReceivedTreatment;
                        cy.get(symptoms).check();
                        //cy.wait(1500);
                        cy.get('#input_70_289', { timeout: 60000 }).type(user[i].WhoIsYourFamilyPhysicianOrRegularHealthcareProviderOrClinic);
                        //cy.wait(1500);
                        cy.get('#input_70_290', { timeout: 60000 }).type(user[i].ProvideTheFullAddressAndPhoneNumber);
                        //cy.wait(1500);
                        cy.get('#input_70_293', { timeout: 60000 }).type(user[i].ProvideTheNameOfTheHealthcareProviderWhoHasYourMostRecentHealthRecordIfDifferentFromYourRegularHealthcareProviderOrClinic);
                        //cy.wait(1500);
                        cy.get('#input_70_294', { timeout: 60000 }).type(user[i].WhatIsTheDateAndReasonForYourLastConsultationWithAnyPhysicianOrHealthcareProviderTheNameOfTheProviderAndTheOutcomeResults);
                        //cy.wait(1500);
                        var investigationOrReferral = user[i].WasAnyFollowUpFurtherInvestigationOrReferralToAnotherHealthcareProfessionalRecommended;
                        cy.get(investigationOrReferral).check();
                        //cy.wait(1500);
                        //cy.wait(4000);
                        cy.get('#gform_next_button_70_298').click();


                        //Page 9 

                        var Cigarettes = user[i].InThePast24MonthsHaveYouUsedCigarettesEcigarettesVapingProductsCigarsWaterPipesBetelNutSmokingCessationProductsNicotineOrTobaccoInAnyForm;
                        cy.get(Cigarettes, { timeout: 60000 }).should('be.visible').check();
                        //cy.wait(1500);
                        var MarijuanaOrHashish = user[i].HaveYouUsedMarijuanaAndOrHashishWithinThePast5Years;
                        cy.get(MarijuanaOrHashish).check();
                        //cy.wait(1500);
                        var Alcoholic = user[i].DoYouConsumeAlcoholicBeverages;
                        cy.get(Alcoholic).check();
                        //cy.wait(1500);
                        var ExcessiveAlcohol = user[i].HaveYouEverSoughtOrReceivedAdviceOrTreatmentRelatingToAlcoholUseOrUsedAlcoholExcessively;
                        cy.get(ExcessiveAlcohol).check();
                        //cy.wait(1500);
                        var Drugs = user[i].HaveYouEverUsedCocaineBarbituratesCrackOrAnyOtherNarcoticDrugOrEverSoughtOrReceivedAdviceOrTreatmentForTheUseOfDrugsPrescribedOrNonPrescribed;
                        cy.get(Drugs).check();
                        //cy.wait(1500);
                        var ImmuneDeficiency = user[i].HaveYouEverHadAnyKnownIndicationOfOrBeenTreatedForAcquiredImmuneDeficiencySyndromeAIDSRelatedComplexAIDSRelatedConditionsOrHaveYouTestedPositiveForAntibodiesToTheAIDSVirusOrHIV;
                        cy.get(ImmuneDeficiency).check();
                        //cy.wait(1500);
                        var Disease = user[i].HaveYouEverHadAnyKnownIndicationOfOrBeenTreatedForAnyDiseaseOrDisorderOfTheEyesEarsNoseOrThroatIncludingLossOfSpeech;
                        cy.get(Disease).check();
                        //cy.wait(1500);
                        var SleepDisorder = user[i].HaveYouEverHadAnyKnownIndicationOfOrBeenTreatedForSleepApneaChronicInsomniaOrAnyOtherSleepDisorder;
                        cy.get(SleepDisorder).check();
                        //cy.wait(1500);
                        var HeartOrCirculatorySystem = user[i].HaveYouEverHadAnyKnownIndicationOfOrBeenTreatedForCholesterolPeripheralVascularDiseaseOrAnyDiseaseOrDisorderOfTheHeartOrCirculatorySystem;
                        cy.get(HeartOrCirculatorySystem).check();
                        //cy.wait(1500);
                        var BrainOrNervousSystem = user[i].HaveYouEverHadAnyKnownIndicationOfOrBeenTreatedForStrokeTransientIschemicAttackTIAHeadachesCognitiveImpairmentMemoryDisorderParkinsonsDiseaseAlzheimersDiseaseMotorNeuronDiseaseHuntingtonsDiseaseFaintingSpellsDizzinessSeizuresEpilepsyParalysisMultipleSclerosisMuscleWeaknessNumbnessOrTinglingOfTheLimbsOrAnyDiseaseOrDisorderOfTheBrainOrNervousSystem;
                        cy.get(BrainOrNervousSystem).check();
                        //cy.wait(1500);
                        var UrineDisorder = user[i].HaveYouEverHadAnyKnownIndicationOfOrBeenTreatedForAnyDiseaseOrDisorderOfTheKidneysUrinaryTractBladderProstateOrGenitalOrgansOrKidneyStonesOrAlbuminBloodOrSugarInTheUrine;
                        cy.get(UrineDisorder).check();
                        //cy.wait(1500);
                        var PsychiatricDisorder = user[i].HaveYouEverHadAnyKnownIndicationOfOrBeenTreatedForAnxietyDepressionNervousnessStressFatigueBurnoutEatingDisorderOtherEmotionalDisorderPsychiatricDisorderMentalDisorderOrPsychosisOrEverAttemptedSuicide;
                        cy.get(PsychiatricDisorder).check();
                        //cy.wait(1500);
                        var ChronicFatigue = user[i].HaveYouEverHadAnyKnownIndicationOfOrBeenTreatedForChronicFatigueChronicFatigueSyndromeEpsteinBarrVirusFibromyalgiaOrChronicPain;
                        cy.get(ChronicFatigue).check();
                        //cy.wait(1500);
                        var MalignantDisease = user[i].HaveYouEverHadAnyKnownIndicationOfOrBeenTreatedForCancerDysplasticNeviTumorCystMassLesionLumpNodulePolypOrOtherGrowthAnyDisorderOfTheSkinOrLymphGlandsBloodDisorderOrAnyFormOfMalignantDisease;
                        cy.get(MalignantDisease).check();
                        //cy.wait(1500);
                        var BloodSugar = user[i].HaveYouEverHadAnyKnownIndicationOfOrBeenTreatedForDiabetesEndocrineDisorderElevatedBloodSugarThyroidDiseaseRheumatismRheumaticFeverLupusGoutOrSyphilis;
                        cy.get(BloodSugar).check();
                        //cy.wait(1500);
                        var ReproductiveOrgans = user[i].HaveYouEverHadAnyKnownIndicationOfOrBeenTreatedForAnyDiseaseOrDisorderOfReproductiveOrgansOrBreastIncludingLumpsCystsOrOtherMassesOtherPhysicalChangesAbnormalMammogramFindingsOrAnyBiopsy;
                        cy.get(ReproductiveOrgans).check();
                        //cy.wait(1500);
                        var Deformity = user[i].HaveYouEverHadAnyKnownIndicationOfOrBeenTreatedForAnyAmputationOrDeformityHerniaOrRuptureDeepVeinThrombosisOrVaricoseVeins;
                        cy.get(Deformity).check();
                        //cy.wait(1500);
                        var JointDisorder = user[i].HaveYouEverHadAnyKnownIndicationOfOrBeenTreatedForAnyArthritisDiseaseOrDisorderOfTheMusclesBonesHipAnkleKneeWristElbowShoulderHandsFeetOrAnyOtherJoint;
                        cy.get(JointDisorder).check();
                        //cy.wait(1500);
                        var BackDisease = user[i].HaveYouEverHadAnyKnownIndicationOfOrBeenTreatedForAnyTypeOfBackOrSpinalTroubleIncludingSprainStrainOrDiscDiseaseOrDisorder;
                        cy.get(BackDisease).check();
                        //cy.wait(1500);
                        var ChestOrLungs = user[i].HaveYouEverHadAnyKnownIndicationOfOrBeenTreatedForAnyTypeOfShortnessOfBreathPersistentCoughAsthmaEmphysemaBronchitisPleurisyTuberculosisOrAnyDiseaseOrDisorderOfTheChestOrLungs;
                        cy.get(ChestOrLungs).check();
                        //cy.wait(1500);
                        var StomachDisease = user[i].HaveYouEverHadAnyKnownIndicationOfOrBeenTreatedForAnyTypeOfPepticUlcerIndigestionColitisOrAnyDiseaseOrDisorderOfTheStomachColonOrIntestinesGallBladderLiverPancreasOrHaveYouTestedPositiveForHepatitisAndOrBeenToldYouAreACarrier;
                        cy.get(StomachDisease).check();
                        //cy.wait(1500);
                        var Practitioner = user[i].HaveYouInThePast10YearsBeenExaminedByOrConsultedAPhysicianChiropractorPsychologistPhysiotherapistOsteopathHomeopathOrOtherPractitioner;
                        cy.get(Practitioner).check();
                        //cy.wait(1500);
                        var UnderHospitalObservation = user[i].HaveYouInThePast10YearsBeenUnderObservationOrTreatmentInAnyHospitalOrOtherInstitutionOrFacilityOrBeenAdvisedToBeAdmitted;
                        cy.get(UnderHospitalObservation).check();
                        //cy.wait(1500);
                        var DiagnosticTests = user[i].HaveYouInThePast10YearsHadAnXrayECGCTScanMRIBloodOrUrineTestAbnormalPSAProstateSpecificAntigenTestOrOtherDiagnosticTests;
                        cy.get(DiagnosticTests).check();
                        //cy.wait(1500);
                        var NotCompletedSurgeryOrTest = user[i].HaveYouInThePast10YearsBeenAdvisedToHaveAnyDiagnosticTestBeHospitalizedOrHaveSurgeryWhichWasNotCompleted;
                        cy.get(NotCompletedSurgeryOrTest).check();
                        //cy.wait(1500);
                        var NaturalParentsDisease = user[i].HaveYournaturalParentsBrothersOrSistersEitherLivingOrDeadEverSufferedFromAnyOfTheFollowingConditionsHeartDiseasePolycysticKidneyDiseaseHighBloodPressureAStrokeDiabetesCancerMultipleSclerosisAlzheimersDiseaseHuntingtonsDiseaseParkinsonsDiseaseMotorNeuronDiseaseOrAnyFormOfHereditaryDisease;
                        cy.get(NaturalParentsDisease).check();
                        //cy.wait(1500);
                        var PregnancyComplications = user[i].HaveYouEverHadAMiscarriageOrOtherComplicationOfPregnancy;
                        cy.get(PregnancyComplications).check();
                        //cy.wait(1500);


                        var AreYouPregnant = user[i].AreYouPregnant;
                        cy.get(AreYouPregnant).check();

                        //******* if Yes, add a condition

                        if (AreYouPregnant == "#choice_70_420_0") {

                            // cy.get('#input_70_422').click();

                            // var Year = user[i].DueDateYear;
                            // cy.get('[aria-label="Select year"]', { timeout: 60000 }).select(Year);


                            cy.get('#input_70_422').type(user[i].DueDate).type('Cypress.io{enter}');

                            // cy.get('.ui-datepicker-year', { timeout: 60000 }).select('2022')

                            // cy.get('.ui-datepicker-month', { timeout: 60000 }).select(user[i].DueDateMonth)

                            // var PregnancyDueDay = user[i].DueDateDay
                            // cy.get(PregnancyDueDay).click();



                            // cy.get('#input_70_422_2').type(user[i].DueDateDay);
                            // cy.get('#input_70_422_1').type(user[i].DueDateMonth);
                            // cy.get('#input_70_422_3').type(user[i].DueDateYear);
                        }
                        cy.wait(4000);
                        cy.get('#gform_next_button_70_671').click();
                    }
                    // Page 10

                    var PaymentMethod = user[i].MethodOfPayment;
                    cy.get(PaymentMethod, { timeout: 60000 }).should('be.visible').check();
                    //cy.wait(1500);
                    var PaymentPlan = user[i].Plan;
                    cy.get(PaymentPlan).check();
                    //cy.wait(1500);
                    var InitialDeposit = user[i].InitialDepositCollected;
                    cy.get(InitialDeposit).check();

                    if (InitialDeposit == '#choice_70_675_0') {
                        // cy.get('#field_70_676 > p').should('contain','It is in exchange for the Receipt and TIA')
                    }

                    //cy.wait(1500);
                    var TIAWithdrawnByPAD = user[i].TemporaryLifeInsuranceAgreementTIAPremiumToBeWithdrawnByPAD;
                    cy.get(TIAWithdrawnByPAD).check();
                    //cy.wait(1500);
                    var TIACollected = user[i].TIAPremiumCollectedForLifeInsurance;
                    cy.get(TIACollected).check();
                    //cy.wait(1500);

                    //******* if Yes, add a condition

                    if (TIACollected == '#choice_70_679_0') {
                        cy.get('#input_70_680').type(user[i].PleaseIndicateAmountCollected);

                    }

                    var InitialLifeInsuranceWithdrawn = user[i].IfTIAHasNotBeenAppliedForIsTheInitialLifeInsurancePremiumToBeWithdrawnByPAD;
                    cy.get(InitialLifeInsuranceWithdrawn).check();
                    //cy.wait(1500);
                    expect("").to.exist;

                    cy.get('#input_70_685', { timeout: 60000 }).type(user[i].AddToExistingPADwithPolicyNumber);
                    //cy.wait(1500);
                    cy.get('#input_70_686', { timeout: 60000 }).type(user[i].SpecialRequestsWithdrawalsMustBeBetweenThe1st28thOfTheMonth);
                    expect(user[i].SpecialRequestsWithdrawalsMustBeBetweenThe1st28thOfTheMonth).to.be.gte(1).and.be.lte(28);

                    //cy.wait(1500);
                    cy.get('#input_70_688', { timeout: 60000 }).type(user[i].NameOfBankOrFinancialInstitution);
                    cy.get('#input_70_689', { timeout: 60000 }).type(user[i].TransitNumber);
                    cy.get('#input_70_690', { timeout: 60000 }).type(user[i].BankNumber);
                    cy.get('#input_70_691', { timeout: 60000 }).type(user[i].AccountNumber);
                    cy.get('#input_70_693', { timeout: 60000 }).type(user[i].BankAddress);
                    cy.get('#input_70_694', { timeout: 60000 }).type(user[i].BankCity);
                    cy.get('#input_70_695', { timeout: 60000 }).select(user[i].BankProvince);
                    cy.get('#input_70_696', { timeout: 60000 }).type(user[i].BankPostalCode);
                    //cy.wait(4000);
                    cy.get('#gform_next_button_70_423').click();

                    //Page 11

                    var ProposedInsuredHeartOrCirculatoryDisease = user[i].HasTheProposedInsuredEverBeenTreatedForOrHadAnyIndicationOfHeartOrCirculatoryDiseaseHeartAttackHighBloodPressureChestPainAbnormalECGstrokeTransientIschemicAttacksTIAsdiabetesChronicKidneyLiverOrLungDiseaseCancerOrTumorMultipleSlerosisParalysisMotorNeuronDiseaseAlzheimersDiseaseHuntingtonsDiseaseParkinsonsDiseaseAIDSARCorHIVinfectionLossOfSpeechBlindnessOrDeafness;
                    cy.get(ProposedInsuredHeartOrCirculatoryDisease, { timeout: 60000 }).should('be.visible').check().should('be.checked');
                    //cy.wait(1500);
                    var ProposedInsuredUnderHospitalObservation = user[i].HasTheProposedInsuredWithinThePastYearOtherThanNormalChildbirthBeenAdmittedToAHospitalOrOtherMedicalFacilityOrBeenAdvisedToDoSo;
                    cy.get(ProposedInsuredUnderHospitalObservation).check().should('be.checked');
                    //cy.wait(1500);
                    var ProposedInsuredSurgeryNotYetDone = user[i].HasTheProposedInsuredBeenAdvisedToHaveAnyTestsInvestigationsOrSurgeryNotYetDone;
                    cy.get(ProposedInsuredSurgeryNotYetDone).check().should('be.checked');
                    //cy.wait(1500);
                    var ProposedInsuredApplicationForLifeInsurance = user[i].HasTheProposedInsuredInThePastYearHadAnyApplicationForLifeInsuranceChangeOrReinstatementDeclinedRatedOrModifiedInAnyway;
                    cy.get(ProposedInsuredApplicationForLifeInsurance).check().should('be.checked');
                    //cy.wait(1500);
                    var ProposedInsuredPendingTreatment = user[i].IsTheProposedInsuredAwareOfAnySymptomsForWhichTheyHaveNotSoughtTreatmentOrForWhichTreatmentIsPlannedOrPending;
                    cy.get(ProposedInsuredPendingTreatment).check().should('be.checked');
                    //cy.wait(4000);
                    // cy.get('#gform_submit_button_70').click();
                    cy.wait(4000);





                }
            })
        })
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
})
