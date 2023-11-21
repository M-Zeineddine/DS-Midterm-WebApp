// app.test.js
const puppeteer = require('puppeteer');

describe('App Load Test', () => {
  it('should load web app', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8080'); // URL of your local server
    await page.waitForSelector('#greetButton'); // waits for the button to load
    const title = await page.title();
    expect(title).toBe('Web App'); // Change this to your actual title
    await browser.close();
  });
});
