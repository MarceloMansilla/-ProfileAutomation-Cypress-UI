import FrequentlyAskedQuestionsPage from "../../page-objects/page/Feedback/FrequentlyAskedQuestionsPage";
export default class FrequentlyAskedQuestionsPageService {


    static validateFrequentlyAskedQuestionsPage() {
        cy.fixture('./FAQ/frequentlyAskedQuestions').then(data => {
            cy.contains(data.title)
            cy.get('a[href *= "/faq.html?question=1"]').contains(data.link_one)
            cy.get('a[href *= "/faq.html?question=2"]').contains(data.link_two)
            cy.get('h4').contains(data.instruction_link_one_title)
            cy.get('li').contains(data.instruction_link_one_step_one)
            cy.get('li').contains(data.instruction_link_one_step_two)
            cy.get('li').contains(data.instruction_link_one_step_three)
            cy.get('h4').contains(data.instruction_link_two_title)
            cy.get('li').contains(data.instruction_link_two_step_one)
            cy.get('li').contains(data.instruction_link_two_step_two)
            cy.get('li').contains(data.instruction_link_two_step_three)

        })
    }

    static clickOnHowCanIEditMyProfile() {
        FrequentlyAskedQuestionsPage.getHowCanIEditMyProfile().click()
    }

    static clickOnHowCanIReviewMyTransactionHistory() {
        FrequentlyAskedQuestionsPage.getHowCanIReviewMyTransactionHistory().click()

    }

}