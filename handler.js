const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World!' })
};
}

exports.getProductData = async (event, context) => {

    const executablePath = await chromium.executablePath;
    process.env.PUPPETEER_EXECUTABLE_PATH = executablePath;
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath,
    });
    const page = await browser.newPage();
  await page.goto('https://www.amazon.com.br/');
  const title = await page.title();
  console.log(title);
  return {
    statusCode: 200,
    body: JSON.stringify(title)
  }

  }
