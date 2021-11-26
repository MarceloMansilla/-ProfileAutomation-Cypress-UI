import BasePage from "../../BasePage";
export default class HomePage extends BasePage {

    static getCheckingAccountActivity() {
        return cy.get('#account_activity_link')
    }
    static getTransferFunds() {
        return cy.get('#transfer_funds_link')
    }
    static getMyMoneyMap() {
        return cy.get('#money_map_link')
    }
}