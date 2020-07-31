import LoginPage from '../pages/loginPage.js';

describe('Login', () => {
    let loginPage = new LoginPage();
    beforeEach(() => {
        loginPage.goto();
    });

    it('Should login successfully', () => {
        loginPage.setUserName('Tommy');
        loginPage.clickNextBtn();
    });

})