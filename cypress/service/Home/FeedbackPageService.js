import FeedbackPage from "../../page-objects/page/Home/FeedbackPage";
export default class FeedbackPageService {

    static addInformation() {
        cy.fixture('./Navigation/feedback').then(data => {
            this.addUsername(data.name)
            this.addEmail(data.email)
            this.addSubject(data.subject)
            this.addComment(data.message)
        })
    }

    static validateFeedbackPageInformation() {
        cy.fixture('./Navigation/feedback').then(data => {
            cy.contains(data.title)
            cy.contains(data.description_one)
            cy.contains(data.description_two)
            cy.contains(data.description_three)

        })
    }

    static clickOnFrequentlyAskedQuestion() {
        FeedbackPage.getFrequentlyAskedQuestion().click()
    }

    static addUsername(name) {
        FeedbackPage.getUsername().type(name)

    }
    static addEmail(email) {
        FeedbackPage.getEmail().type(email)

    }
    static addSubject(subject) {
        FeedbackPage.getSubject().type(subject)

    }
    static addComment(message) {
        FeedbackPage.getComment().type(message)

    }
    static clickOnSendMessage() {
        FeedbackPage.getSendMessage().click()
    }
    static clickOnClear() {
        FeedbackPage.getClear().click()
    }

    static validateConfirmationSendMessage() {
            cy.fixture('./Navigation/feedback.json').then(data => {
                cy.contains(data.send_message_confirmation_one + ` ${data.name}` + data.send_message_confirmation_two)
            })
        }
        /*TODO: refactor validation tooltip message*/
    static valdiateRequiredField() {
        FeedbackPage.getRequiredField()
    }

    static validateEmptyFields() {
        FeedbackPage.getUsername().should('be.empty')
        FeedbackPage.getEmail().should('be.empty')
        FeedbackPage.getSubject().should('be.empty')
        FeedbackPage.getComment().should('be.empty')

    }
}