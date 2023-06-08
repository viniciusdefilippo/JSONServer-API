# JSON Server API

## ConsumoApi

Projeto contendo um CRUD para consumir os dados da mesma API que roda localmente ou remotamente.

## JsonApi_Local

Projeto contendo [JSON server](https://github.com/typicode/json-server) para rodar localmente através do comando:

> json-server db.json

- Para maiores detalhes sobre o servidor local, consultar o arquivo **\JsonApi_Local\Readme.MD** 
- **IMPORTANTE:** Não utilizar a extensão Live Server do VSCode quando estiver utilizando o servidor local. O Live Server provoca um reload na página após as operações de CREATE, UPDATE E DELETE. Sendo assim, após a atualização da página, os dados não são mais apresentados. 

## JsonApi_Remote

Projeto contendo o [JSON server](https://github.com/typicode/json-server) que roda remotamente no Replit através do link:
https://jsonserver.vvgdf.repl.co/pessoas

Para configurar o JSON Server no Replit:
- Criar um projeto Node.js
- Rodar no console do Replit:
> npm install json-server
- Inserir o seguinte conteúdo no arquivo **index.js**:
```javascript
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
``` 
- Rodar o projeto no Replit
- Copiar o link de acesso gerado pelo Replit como por exemplo: https://jsonserver.vvgdf.repl.co/pessoas


