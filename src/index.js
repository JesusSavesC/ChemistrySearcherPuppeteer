const puppeteer = require('puppeteer');

async function GetPage(A, B) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://google.com");
    await page.screenshot({path: "amazing.png"});
    await browser.close();
}

// Pass necessary arguments when calling the function
GetPage(1, 1);