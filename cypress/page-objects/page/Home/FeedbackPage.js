import BasePage from "../../BasePage";
export default class FeedbackPage extends BasePage {

    static getFrequentlyAskedQuestion() {
        return cy.contains('Frequently Asked Questions')
    }

    static getUsername() {
        return cy.get('#name')

    }
    static getEmail() {
        return cy.get('#email')

    }
    static getSubject() {
        return cy.get('#subject')

    }
    static getComment() {
        return cy.get('#comment')

    }
    static getSendMessage() {
        return cy.contains('Send Message')
    }
    static getClear() {
        return cy.get('input[name="clear"]')
    }

    static validateConfirmationSendMessage() {
            cy.fixture('./Navigation/feedback.json').then(data => {
                cy.contains(data.send_message_confirmation_one + ` ${data.name}` + data.send_message_confirmation_two)
            })
        }
        /*TODO: refactor validation tooltip message*/
    static valdiateRequiredField() {
        cy.contains('Completa este campo')
    }
}