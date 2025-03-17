const puppeteer = require('puppeteer');

(async () => {
    // Launch a browser
    const browser = await puppeteer.launch({ headless: false }); // Set to true to run in the background
    const page = await browser.newPage();

    // Open a website
    await page.goto('https://github.com/HimalayaSingh3');

    // Take a screenshot
    await page.screenshot({ path: 'screenshot.png' });

    // Extract page title
    const title = await page.title();
    console.log(`Page Title: ${title}`);

    // Close the browser
    await browser.close();
})();
