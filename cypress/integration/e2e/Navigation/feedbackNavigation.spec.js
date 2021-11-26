import FrequentlyAskedQuestionsPageService from '../../../service/Feedback/FrequentlyAskedQuestionsPageService'
import FeedbackPageService from '../../../service/Home/FeedbackPageService'
import Navbar from '../../../page-objects/components/Navbar'
import { url } from '../../../../config'

describe('Feedback Test', () => {

    before(function() {
        cy.visit(url)
        Navbar.clickOnFeedback()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    })
    it.skip('should validate all fields are mandatory', () => {
        /*---------------------TODO--------------------*/
        /*FeedbackPage.clickOnSendMessage()
        FeedbackPage.valdiateRequiredField()
        FeedbackPage.addUsername('Pepe')
        FeedbackPage.clickOnSendMessage()
        FeedbackPage.valdiateRequiredField()
        FeedbackPage.addEmail('pepe@gmail.com')
        FeedbackPage.clickOnSendMessage()
        FeedbackPage.valdiateRequiredField()
        FeedbackPage.addSubject('Feedback')
        FeedbackPage.clickOnSendMessage()
        FeedbackPage.valdiateRequiredField() */

    })

    it('should add all information required and click on Clear', () => {
        FeedbackPageService.addInformation()
        FeedbackPageService.clickOnClear()
    })

    it('should see empty all fields', () => {
        FeedbackPageService.validateEmptyFields()
    })

    it('should click on Frequently Asked Questions link and see Frequently Asked Questions view', () => {
        FeedbackPageService.clickOnFrequentlyAskedQuestion()
        cy.url().should('include', '/faq.html')
        FrequentlyAskedQuestionsPageService.validateFrequentlyAskedQuestionsPage()
        cy.go('back')
    })

    it('should add all information required and click on Send Message', () => {
        FeedbackPageService.addInformation()
        FeedbackPageService.clickOnSendMessage()
    })
    it('should see Message confirmation', () => {
        FeedbackPageService.validateConfirmationSendMessage()
    })
})