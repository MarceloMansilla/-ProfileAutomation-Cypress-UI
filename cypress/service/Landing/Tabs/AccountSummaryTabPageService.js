import AccountSummaryTabPageService from "../../../service/Landing/Tabs/AccountSummaryTabPageService";
export default class AccountSummaryTabPageService {


    static validateAccountSummaryTabPageInformation() {
        cy.fixture('./LandingTabs/AccountSummaryTab').then(data => {
            cy.contains(data.cash_accounts)
            cy.contains(data.investment_accounts)
            cy.contains(data.credit_accounts)
            cy.contains(data.loan_accounts)
        })
    }
}