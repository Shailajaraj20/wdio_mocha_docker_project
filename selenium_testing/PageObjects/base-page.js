const PageElement = require('./Lib/page-element.js');
const SELECTORS = {
    button_HamburgerIcon: 'div[id=site-nav-topbar-wrapper] button[id="nav:siteNavSideNavToggle"]',
    button_topNavCarMenuIcon: 'button[id="nav:topNavCarMenu"]',
    logo_SiteNavLogoSmallIcon: '[role=navigation] a[data-autoid="nav:siteNavLogoSmall"]',
    link_LearnCarSafetyLink: '.a[data-autoid="iconCallouts:cta"]',
    button_AcceptAllCookies: 'button.accept-cookies-button',
};

class BasePage {
    constructor() {
        this.baseUrl = browser.config.baseUrl;
        this.selectors = SELECTORS;
        this.installGetters(SELECTORS);
    }

    installGetters(selectorObject) {
        for (const key of Object.keys(selectorObject)) {
            Object.defineProperty(this, key, {
                get() {
                    return new PageElement(selectorObject[key]);
                }
            });
        }

    }
    openPage(url) {
        try {
            if (typeof url != 'string'){
                throw new Error('The url is Invalid');
            }
            else {
                browser.url(url);
            }
        } catch (err) {
            throw new Error(`An error is encountered -------- ${err}`);
        }
        
    }

    getPageTitle() { 
        return browser.getTitle();
    }
}
module.exports = new BasePage();