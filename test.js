const puppeteer = require('puppeteer');

describe('App functionality tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('D:\\Mawed\\Semester 11 - Fall  2024\\Distributed Systems\\Midterm\\index.html', { waitUntil: 'networkidle0' }); // replace with the path to your HTML file
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Greet button changes text', async () => {
    await page.type('#nameInput', 'Mohammad');
    await page.click('#greetButton');
    const greetingText = await page.$eval('#greetingText', el => el.textContent);
    expect(greetingText).toBe('Hello, Mohammad! Welcome to the web app!');
  });
});
