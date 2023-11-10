async function GetPage(A, B) {
    const browswer = await pupeteer.launch({
        headless:false,
        args: ['--lang=en-GB']
    })
    const page = await browser.newPage();
    await page.goto('https://kinetics.nist.gov/kinetics/KineticsSearchForm.jsp');
}