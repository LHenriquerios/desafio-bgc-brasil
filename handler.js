const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

exports.bestsellers = async (event, context) => {
  const executablePath = await chromium.executablePath;
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath,
  });
  const page = await browser.newPage();

  // Navegar até a página "Mais Vendidos" da Amazon
  await page.goto('https://www.amazon.com.br/bestsellers/');

  // Obter os três primeiros produtos da lista
  const pageData = await page.evaluate(() => {
  const products = [];
  
  for (let i = 0; i < 3; i++ ) {
    const product = {};
    product.title =  document.querySelectorAll('.p13n-sc-truncate-desktop-type2')[i].innerText;
    product.price = document.querySelectorAll('.a-size-base.a-color-price')[i].innerText;
    product.rating = document.querySelectorAll('.a-icon-row')[i].innerText;
    product.url =  document.querySelectorAll('.a-link-normal')[i+1].href;
    
    products.push(product);
    };
  
    return products;
  });

  await browser.close();

  return {
    statusCode: 200,
    body: JSON.stringify(pageData)
  };
}
