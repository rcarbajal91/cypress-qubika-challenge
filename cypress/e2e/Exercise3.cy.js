import qubikaPage, { clickSubmit, typeFirstName } from "../../pages/exercise/qubikaPage"
const PATH = qubikaPage.elements
const QUBIKA_URL = 'https://qubika.com/'

describe('Ejercicio 3', () => {
  it('Navigate to Qubika website', () => {
    // Navigate to QubikaWebsite
      cy.log("Navigate to Qubika's website")
        cy.visit('/') 

    // Validate that the url is exactly the desired one.    
      cy.log('The URL should be equal ')
        cy.url().should('eq', QUBIKA_URL) 

    //Validates that the logo is visible
      cy.log('Logo is visible')
        PATH.logo().should('be.visible') 

    // Click on 'Contact us' button
       cy.log("Click on 'Contact us' button")
        qubikaPage.clickContactUS() 

    // Validates 'Name' field is displayed
        cy.log('Contact form is displayed')
        cy.log('Name field is displayed')
        PATH.firstName().should('be.visible') 

    // Validates 'Email' field is displayed
      cy.log('Email field is displayed')
        PATH.email().should('be.visible') 

//In this step the exercise asks to validate that the 'Get in touch' button is displayed. 
//The only 'Get it touch' button is located at the bottom of the web (outside the form), to identify it (following the code) could be: 
  //  cy.get('.icon-x').click()
  //  cy.scrollTo('bottom')
  //  cy.get('.content > .button').should('be.visible')
  //  cy.get('.content > .button').click()
//'Get in touch' button is assumed to mean 'Submit'.

    // Click in 'Submit'
      cy.log("Click on 'Submit' button")
        qubikaPage.clickSubmit() 

          cy.log('Mandatory validations')
    // First name mandatory error message
        PATH.firstNameError().should('have.text','Please complete this required field.')

    // Last name mandatory error message
        PATH.lastNameError().should('have.text','Please complete this required field.')

    // Email mandatory error message
        PATH.emailError().should('have.text','Please complete this required field.')

    // Contact type mandatory error message
        PATH.contactError().should('have.text','Please complete this required field.')

    // Message mandatory error alert
        PATH.messageError().should('have.text','Please complete this required field.')

// Step 7 (**Validate that only ‘Name’ field is marked with red color**) cannot be validated because the 'Name' field is not marked in red after 
// following the instructions of the previous steps.

    // Type 'Test Name' on First Name field
        cy.log("Type 'Test Name' on First Name field ")
      qubikaPage.typeFirstName('Test Name')

    // Click on Submit button
        cy.log('Click on Submit')
      qubikaPage.clickSubmit()

    // Validate First name mandatory error does not exist  
        cy.log('First name ')
        PATH.firstNameError().should('not.exist')

    // Last name mandatory error message
        PATH.lastNameError().should('have.text','Please complete this required field.')

    // Email mandatory error message
        PATH.emailError().should('have.text','Please complete this required field.')

    // Contact type mandatory error message
        PATH.contactError().should('have.text','Please complete this required field.')

    // Message mandatory error alert
        PATH.messageError().should('have.text','Please complete this required field.')
      
      //  As in step 7, step 11 (**Validate that only 'Email' field is marked with red color**) cannot be validated, since it is not the only field marked with red color
      //  Note: the field is not marked but a message is displayed warning that it is necessary to complete that field).
  })
})