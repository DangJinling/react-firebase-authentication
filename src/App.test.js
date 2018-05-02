const faker = require('faker');
const puppeteer = require('puppeteer');

const person = {
  email: faker.internet.email(),
  password: faker.random.word(),
};

const appUrlBase = 'http://localhost:3002';
const routes = {
  public: {
	register: `${appUrlBase}/signup`,
	login: `${appUrlBase}/signin`,
	noMatch: `${appUrlBase}/ineedaview`,
  },
  private: {
	home: `${appUrlBase}/home`,
	account: `${appUrlBase}/account`,
  },
};

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch({
	headless: false,
	slowMo: 80
  })
  page = await browser.newPage()
})

describe('Login', () => {
  test('users can login', async () => {
	await page.goto(routes.public.login);
	await page.waitForSelector('.signin-form');

	await page.click('input[name=email]')
	await page.type('input[name=email]', 'yomi@mail.com')
	await page.click('input[name=password]')
	await page.type('input[name=password]', 'password')
	await page.click('button[type=submit]')
	await page.waitForSelector('[data-testid="homepage"]')
  }, 160000);
});

describe('Logout', () => {
  test('users can logout', async () => {
	await page.waitForSelector('.nav-link');

	await page.click('[data-testid="signoutBtn"]')
	await page.waitForSelector('.signin-form')
  }, 9000000);
});

describe('Unathorized view', () => {
  test('users that are not logged in are redirected to sign in page', async () => {
	await page.goto(routes.private.home);
	await page.waitForSelector('.signin-form')
  }, 9000000);
});

describe('404 Page', () => {
  test('users are redirected to a 404 page for nonexistent views', async () => {
	await page.goto(routes.public.noMatch);
	await page.waitForSelector('.no-match')
  }, 9000000);
});

afterAll(() => {
  browser.close()
})
