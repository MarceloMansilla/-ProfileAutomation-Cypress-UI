import BasePage from "../../BasePage";
export default class LandingPage extends BasePage {

    static getAccountSummaryTab() {
        return cy.get('li').contains('Account Summary')
    }
    static getAccountActionTab() {
        return cy.get('li').contains('Account Activity')
    }
    static getTransferFundsTab() {
        return cy.get('li').contains('Transfer Funds')
    }
    static getPayBillsTab() {
        return cy.get('li').contains('Pay Bills')
    }
    static getMyMoneyMapTab() {
        return cy.get('li').contains('My Money Map')
    }
    static getOnlineStatementsTab() {
        return cy.get('li').contains('Online Statements')
    }
}