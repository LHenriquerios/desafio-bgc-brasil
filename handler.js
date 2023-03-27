const puppeteer = require('puppeteer');

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


puppeteer.use(stealthPlugin());

module.exports.getProductData = async (event) => {
//    process.env.PUPPETEER_EXECUTABLE_PATH = chromium.executablePath;
//   const browser = await puppeteerExtra.launch({
//       args: chromium.args,
//        defaultViewport: chromium.defaultViewport,
//        executablePath: await chromium.executablePath(),
//        headless: chromium.headless,
//        ignoreHTTPSErrors: true,
//      });
const browser = await puppeteer.launch({
  args: chromium.args,
  defaultViewport: chromium.defaultViewport,
  executablePath: await chromium.executablePath(),
  headless: chromium.headless,
  ignoreHTTPSErrors: true,
});
  const page = await browser.newPage();
  await page.goto('https://www.amazon.com/gp/bestsellers/books/');

  const products = await page.waitForSelector('.zg-item-immersion');

  await browser.close();

  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
};