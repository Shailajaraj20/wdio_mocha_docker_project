const waitTimeout = browser.config.waitTimeout || 45000;

class PageElement {
    constructor(selector) {
        this.selector = selector;
        this.waitTimeout = waitTimeout;
    }

    // Click on the element
    click(waitTimeout) {
        this.waitForDisplayed(waitTimeout);
        this.waitForClickable(waitTimeout);
        browser.$(this.selector).click();
    }

    // Wait for an element to get Displayed
    waitForDisplayed(waitTimeout) {  
      return browser.$(this.selector).waitForDisplayed(waitTimeout); 
    }

    // Wait for an element to be clickable
    waitForClickable(waitTimeout) {
        return browser.$(this.selector).waitForClickable(waitTimeout); 
    }
    
    // Check for the element to be Displayed
    isDisplayed(waitTimeout) { 
        return $(this.selector).isDisplayed(waitTimeout); 
    }
    // Wait till the TimeOut
    getText() {
        this.waitForDisplayed(waitTimeout);
        browser.$(this.selector).getText();
    }
}
module.exports = PageElement;