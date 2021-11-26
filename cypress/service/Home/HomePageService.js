import HomePage from "../../page-objects/page/Home/HomePage";
export default class HomePageService {


    static validateHomePageInformation() {
        cy.fixture('./Navigation/home').then(data => {
            cy.contains(data.title_block_online_banking)
            cy.contains(data.description_block_online_banking)
            cy.contains(data.title_block_checking_account_activity)
            cy.contains(data.description_block_checking_account_activity)
            cy.contains(data.title_block_transfer_funds)
            cy.contains(data.description_block_transfer_funds)
            cy.contains(data.title_block__my_money_map)
            cy.contains(data.description_block_my_money_map)
        })
    }
    static clickOnCheckingAccountActivity() {
        HomePage.getCheckingAccountActivity().click()
    }
    static clickOnTransferFunds() {
        HomePage.getTransferFunds().click()
    }
    static clickOnMyMoneyMap() {
        HomePage.getMyMoneyMap().click()
    }
}