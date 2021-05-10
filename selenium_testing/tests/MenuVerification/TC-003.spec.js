const MenuPage = require("./../../PageObjects/menu-page.js");

describe('Page Verification', () => {

    it('Click on the Menu and Verify', () => {
        BasePage.openPage(BasePage.baseUrl);
        if(BasePage.button_AcceptAllCookies.isDisplayed()) {
            BasePage.button_AcceptAllCookies.click();
        }
        BasePage.button_HamburgerIcon.click();
   
    })
})