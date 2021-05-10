const BasePage = require("./../../PageObjects/base-page.js");

describe('PageVerification', () => {

    it('Verify the Home Page', () => {
        BasePage.openPage(BasePage.baseUrl);
        console.log('Home Page Title ------ ',BasePage.getPageTitle());
    })
})