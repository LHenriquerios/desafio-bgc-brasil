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


module.exports.getProductData = async (event) => {
  const url = 'https://www.amazon.com.br/bestsellers';

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const result = {};
  const categories = await page.$$eval('div#zg_tabs div#zg_centerListWrapper', (elements) => {
    return elements.map((element) => element.querySelector('div.a-section h3.a-size-medium').textContent.trim());
  });

  await browser.close();

  return {
    statusCode: 200,
    body: JSON.stringify(categories),
  };
};
