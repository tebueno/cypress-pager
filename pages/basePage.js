class BasePage {
    constructor() {
        this.BASE_URL = 'https://pager-qa-hiring.herokuapp.com';
    }
    goto(relativeUrl = '') {
        cy.visit(`${this.BASE_URL}${relativeUrl}`)
    }
}

export default BasePage;