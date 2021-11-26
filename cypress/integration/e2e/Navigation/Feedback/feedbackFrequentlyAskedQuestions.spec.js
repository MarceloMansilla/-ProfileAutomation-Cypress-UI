import Navbar from '../../../../page-objects/components/Navbar'
import FeedbackPageService from '../../../../service/Home/FeedbackPageService'
import FrequentlyAskedQuestionsPageService from '../../../../service/Feedback/FrequentlyAskedQuestionsPageService'
import { url } from '../../../../../config'

describe('Frequently Asked Questions Test', () => {

    before(function() {
        cy.visit(url)
        Navbar.clickOnFeedback()
        FeedbackPageService.clickOnFrequentlyAskedQuestion()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    })
    it('should see Frequently Asked Questions view', () => {
        cy.url().should('include', '/faq.html')
        FrequentlyAskedQuestionsPageService.validateFrequentlyAskedQuestionsPage()
    })
})