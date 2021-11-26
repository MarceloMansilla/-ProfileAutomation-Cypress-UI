import BasePage from "../../BasePage";
export default class FrequentlyAskedQuestionsPage extends BasePage {

    static getHowCanIEditMyProfile() {
        return cy.get('a[href *= "/faq.html?question=1"]')
    }

    static getHowCanIReviewMyTransactionHistory() {
        return cy.get('a[href *= "/faq.html?question=2"]')

    }

}