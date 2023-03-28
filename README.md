# Desafio BGC Brasil
# Amazon Bestsellers API

Este é um serviço de API que retorna os três produtos mais vendidos da Amazon.com.br usando Puppeteer e AWS Lambda.
## Requisitos

- Node.js v14.x
- Serverless Framework
- AWS CLI

## Instalação

1. Clone este repositório.
2. Instale as dependências do projeto com `npm install`.
3. Configure suas credenciais da AWS com o AWS CLI.
4. Configure as configurações de `serverless.yml` com suas informações da AWS.
5. Implante a aplicação com `serverless deploy`.
## Uso

A API tem um único endpoint: `/bestsellers`. Para obter os três produtos mais vendidos da Amazon.com.br, faça uma solicitação GET para esse endpoint.

A resposta será um objeto JSON com as informações dos três produtos mais vendidos, incluindo o nome do produto, a classificação, o preço e o link da página do produto.

Exemplo de resposta:
[
        {
            "title": "Product 1",
            "price": "R$ 100,00",
            "rating": "4.5 estrelas",
            "url": "https://www.amazon.com.br/product1"
        },
        {
            "title": "Product 2",
            "price": "R$ 200,00",
            "rating": "4.0 estrelas",
            "url": "https://www.amazon.com.br/product2"
        },
        {
            "title": "Product 3",
            "price": "R$ 50,00",
            "rating": "3.5 estrelas",
            "url": "https://www.amazon.com.br/product3"
        }
    ]
