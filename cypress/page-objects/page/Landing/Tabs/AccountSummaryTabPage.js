import BasePage from "../../../BasePage";
export default class AccountSummaryTabPage extends BasePage {


    static validateAccountSummaryTabPageInformation() {
        cy.fixture('./LandingTabs/AccountSummaryTab').then(data => {
            cy.contains(data.cash_accounts)
            cy.contains(data.investment_accounts)
            cy.contains(data.credit_accounts)
            cy.contains(data.loan_accounts)
        })
    }
}