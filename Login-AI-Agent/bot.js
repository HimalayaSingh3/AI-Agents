const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    
    await page.goto('https://fanciful-kashata-bfc95f.netlify.app/');

    // Fill out login form
    await page.type('input[name="email"]', 'mr.ravindra66@gmail.com');
    await page.type('input[name="password"]', '1234567890');


    // Click login button
    await page.click('button');
    await page.waitForNavigation();

    console.log("Logged in successfully!");

    // screenshot
    await page.screenshot({ path: 'screenshot.png' });

    await browser.close();
})();
