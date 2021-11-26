import LandingPage from '../../page-objects/page/Landing/LandingPage'
export default class LandingPageService {
    static validateHomePageInformation() {
        cy.fixture('./Landing/landing').then(data => {
            cy.contains(data.tab_account_summary)
            cy.contains(data.tab_account_activity)
            cy.contains(data.tab_transfer_funds)
            cy.contains(data.tab_pay_bills)
            cy.contains(data.tab_my_money_map)
            cy.contains(data.tab_online_statements)
        })
    }
    static clickOnAccountSummaryTab() {
        LandingPage.getAccountActionTab().click()
    }
    static clickOnAccountActionTab() {
        LandingPage.getAccountActionTab().click()
    }
    static clickOnTransferFundsTab() {
        LandingPage.getTransferFundsTab().click()
    }
    static clickOnPayBillsTab() {
        LandingPage.getPayBillsTab().click()
    }
    static clickOnMyMoneyMapTab() {
        LandingPage.getMyMoneyMapTab().click()
    }
    static clickOnOnlineStatementsTab() {
        LandingPage.getOnlineStatementsTab().click()
    }

}