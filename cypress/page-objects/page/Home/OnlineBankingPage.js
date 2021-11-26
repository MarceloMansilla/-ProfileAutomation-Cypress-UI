import BasePage from "../../BasePage";
export default class OnlineBankingPage extends BasePage {

    static getAccountSummary() {
        return cy.get('#account_summary_link')
    }
    static getPayBills() {
        return cy.get('#pay_bills_link')
    }
    static getAccountActivity() {
        return cy.get('#account_activity_link')
    }
    static getMyMoneyMap() {
        return cy.get('#money_map_link')
    }
    static getTransferFunds() {
        return cy.get('#transfer_funds_link')
    }
    static getOnlineStatements() {
        return cy.get('#online_statements_link')
    }
    static getSignInNow() {
        return cy.get('a[href *= "/login.html"]')
    }
}