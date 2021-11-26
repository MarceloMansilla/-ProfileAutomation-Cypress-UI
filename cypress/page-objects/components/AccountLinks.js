export default class AccountLinks {

    static clickOnSummary() {
        cy.get('#account_summary_tab').click()
    }
    static clickOnActivity() {
        cy.get('#account_activity_tab').click()
    }
    static clickOnTransferFund() {
        cy.get('#transfer_fund_tab').click()
    }
    static clickOnPayBills() {
        cy.get('#pay_bills_tab').click()
    }
    static clickOnMoneyApp() {
        cy.get('#money_map_tab').click()
    }
    static clickOnOnlineStatements() {
        cy.get('#online_statements_tab').click()
    }
}