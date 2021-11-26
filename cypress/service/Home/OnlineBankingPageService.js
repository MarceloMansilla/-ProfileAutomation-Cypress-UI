import OnlineBankingPage from "../../page-objects/page/Home/OnlineBankingPage";
export default class OnlineBankingPageService {


    static validateOnlineBankingPageInformation() {
        cy.fixture('./Navigation/onlineBanking').then(data => {
            cy.contains(data.title)
            cy.contains(data.title_block_account_summary)
            cy.contains(data.description_account_summary)
            cy.contains(data.title_block_account_activity)
            cy.contains(data.description_account_activity)
            cy.contains(data.title_block_transfer_funds)
            cy.contains(data.title_block_pay_bills)
            cy.contains(data.description_pay_bills)
            cy.contains(data.title_block_my_money_map)
            cy.contains(data.description_my_money_map)
            cy.contains(data.title_block_online_statements)
            cy.contains(data.description_online_statements)
        })
    }

    static clickOnAccountSummary() {
        OnlineBankingPage.getAccountSummary().click()
    }
    static clickOnPayBills() {
        OnlineBankingPage.getPayBills().click()
    }
    static clickOnAccountActivity() {
        OnlineBankingPage.getAccountActivity().click()
    }
    static clickOnMyMoneyMap() {
        OnlineBankingPage.getMyMoneyMap().click()
    }
    static clickOnTransferFunds() {
        OnlineBankingPage.getTransferFunds().click()
    }
    static clickOnOnlineStatements() {
        OnlineBankingPage.getOnlineStatements().click()
    }
    static clickOnSignInNow() {
        OnlineBankingPage.getSignInNow().click()
    }
}