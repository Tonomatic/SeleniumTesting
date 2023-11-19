const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://demoqa.com/');
        console.log(await driver.getTitle());
    } finally {
        await driver.quit();
    }
})();
