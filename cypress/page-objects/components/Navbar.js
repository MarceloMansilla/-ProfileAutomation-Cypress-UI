export default class Navbar {
    static clickOnLogo() {
        cy.get('.brand').click()
    }
    static search(text) {
        cy.get('#searchTerm').type(`${text} `)
    }
    static clickOnSingin() {
        cy.get('#signin_button').click()
    }
    static clickOnSettings() {
        cy.contains('Settings').click()
    }
    static clickOnLogout() {
        cy.contains('username').click()
        cy.get('#logout_link').click()
    }
    static displaySignInButton() {
        cy.isVisible('#signin_button')
    }

    /*Navbar Navigation Home*/
    static clickOnHome() {
        cy.get('#homeMenu').click()
    }
    static clickOnOnlineBanking() {
        cy.get('#onlineBankingMenu').click()
    }
    static clickOnFeedback() {
        cy.get('#feedback').click()
    }
}