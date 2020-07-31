import BasePage from './basePage';

class LoginPage extends BasePage {
    constructor() {
        super();
        this.url = '/#';
        this.userNameInput = '.username-input';
        this.nextBtn = '.btn';
    }

    goto() {
        super.goto(this.url);
    }

    setUserName(username) {
        cy.get(this.userNameInput).type(username);
    }

    clickNextBtn() {
        cy.get(this.nextBtn).click();
    }

}

export default LoginPage;