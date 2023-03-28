# Amazon Bestsellers API

Este é um serviço de API que retorna os três produtos mais vendidos da Amazon.com.br usando Puppeteer e serviços da AWS.

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

## Tecnologias Utilizadas
- <b>AWS API Gateway:</b> O AWS API Gateway é um serviço gerenciado da AWS que permite criar, publicar, manter, monitorar e proteger APIs RESTful. Ele é usado neste projeto para receber as solicitações de API e encaminhá-las para a função Lambda apropriada.
- <b>AWS Lambda:</b> O AWS Lambda é um serviço de computação sem servidor da AWS que permite executar código sem a necessidade de provisionar ou gerenciar servidores. Ele é usado neste projeto para processar as solicitações de API recebidas pelo API 
- <b>Serverless Framework:</b> O Serverless Framework é uma estrutura de código aberto que permite construir, implantar e gerenciar aplicativos sem servidor. Ele é usado neste projeto para orquestrar o deployment das funções Lambda e do API Gateway na AWS.

## Uso
A API tem uma única rota: `/bestsellers`. Para obter os três produtos mais vendidos da Amazon.com.br, faça uma solicitação GET para o endpoint mostrado no terminal ao fazer o deploy, ou em: `https://k3ofyjyvo5.execute-api.us-east-2.amazonaws.com/dev/bestsellers` para fazer diretamente .

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
