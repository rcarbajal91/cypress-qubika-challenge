class qubikaPage {
    
    elements = {
        logo: () => cy.get('.content > .logo'),
        contactUsBtn: () => cy.get('.text-wrapper > .button'),
        firstName: () => cy.get('#firstname-5e204c31-ede2-4976-a096-6919a081b2df'),
        email: () => cy.get('#email-5e204c31-ede2-4976-a096-6919a081b2df'),
        submitBtn: () => cy.get('.hs-button'),
        firstNameError: () => cy.get('.hs_firstname > .no-list > li > .hs-error-msg'),
        lastNameError: () => cy.get('.hs_lastname > .no-list > li > .hs-error-msg'),
        emailError: () => cy.get('.hs_email > .no-list > li > .hs-error-msg'),
        contactError: () => cy.get('.hs_contact_type > .no-list > li > .hs-error-msg'),
        messageError: () => cy.get('.hs_message > .no-list > li > .hs-error-msg')

    }

    typeFirstName(formname){
        this.elements.firstName().type(formname)
    }

    clickContactUS(){
        this.elements.contactUsBtn().click()
    }


    clickSubmit(){
        this.elements.submitBtn().click()
    }

}
module.exports = new qubikaPage();