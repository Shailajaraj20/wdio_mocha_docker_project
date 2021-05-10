const BasePage = require("./base-page.js");

const SELECTORS = {
    button_siteNavCloseIcon: 'button[data-autoid="nav:siteNavCloseIcon"]',
    button_sideNavLinksMenuDrawer: 'button[data-autoid="nav:sideNavLinksMenuDrawer"]',
}

const selectors = {
    buttonSiteNavCloseIcon:'[data-autoid="nav:siteNavCloseIcon"]',
}

class MenuPage extends BasePage {
    constructor() {
        this.selectors = SELECTORS;
        this.installGetters(SELECTORS);
    }

}

module.exports = new MenuPage();