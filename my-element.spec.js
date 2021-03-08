import 'expect-puppeteer';

const URL = 'http://localhost:8081/dev/';


describe('WDS', () => {
  beforeAll(async () => {
    await page.goto(URL);
  })

  it('should display text on page', async () => {
    await expect(page).toMatch('This is some child content')
  })
})
