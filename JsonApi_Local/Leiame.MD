# JSON API
JSON Server: 
[json Server](https://github.com/typicode/json-server)

## Preparando o ambiente
Criar na pasta do projeto uma pasta *public* e dentro dela um arquivo *index.html* para servir como página inicial.

## Arquivo Json

Incluir na pasta do projeto um arquivo json chamado *db.json*

## Criar o Servidor Json
> npm install -g json-server

Obs. O node deve estar previamente instalado.

## Rodar o Servidor
> json-server db.json

## Testando a API
>http://localhost:3000/pessoas

>http://localhost:3000/pessoas/2

## Instalar o Postman
https://www.postman.com/downloads/

## Testar a API com o Postman
### GET
Buscando uma pessoa pelo seu ID
> http://localhost:3000/pessoas/10

### POST
Incluindo um novo registro

No postman:

1. Alterar método para POST
1. Na aba Body, marcar *raw*, incluir o conteúdo Json e entrada do tipo JSON ao invés de Text
1. Em *Headers* application/json

```json
{
      "id": 11,
      "Gender": "male",
      "Title": "Mr.",
      "GivenName": "Pedro",
      "MiddleInitial": "P",
      "Surname": "Santos",
      "StreetAddress": "Rua Felicidade 123",
      "City": "Itú",
      "State": "SP",
      "StateFull": "São Paulo",
      "ZipCode": "12954-018",
      "EmailAddress": "pedropaulo@mail.com",
      "Telephoneid": "(11) 9696-1234",
      "Birthday": "12/20/2000",
      "TropicalZodiac": "Capricórnio",
      "NationalID": "751.539.390-15",
      "Color": "Blue",
      "Occupation": "Network administrator",
      "Company": "Mac Donalds",
      "Vehicle": "2015 Honda Fit",
      "BloodType": "A+",
      "Kilograms": 76.6,
      "Centimeters": 168,
      "Latitude": -23203607,
      "Longitude": -46497159
    }
```
Executar **POST**:
> http://localhost:3000/pessoas

## PUT
Editando um registro

Alterar método para PUT
1. Na aba Body, marcar *raw*, incluir o conteúdo Json e entrada do tipo JSON ao invés de Text
1. Em *Headers* application/json

```json
{
      "id": 11,
      "Gender": "female",
      "Title": "Mrs.",
      "GivenName": "Fernanda",
      "MiddleInitial": "P",
      "Surname": "Castro",
      "StreetAddress": "Rua Felicidade 123",
      "City": "Itú",
      "State": "SP",
      "StateFull": "São Paulo",
      "ZipCode": "12954-018",
      "EmailAddress": "fernandacastro@mail.com",
      "Telephoneid": "(11) 9696-1234",
      "Birthday": "12/20/2000",
      "TropicalZodiac": "Capricórnio",
      "NationalID": "751.539.390-15",
      "Color": "Blue",
      "Occupation": "Network administrator",
      "Company": "Mac Donalds",
      "Vehicle": "2015 Honda Fit",
      "BloodType": "O-",
      "Kilograms": 56.6,
      "Centimeters": 160,
      "Latitude": -23203607,
      "Longitude": -46497159
    }
```

Executar: **PUT**
> http://localhost:3000/pessoas/11

## DELETE
Removendo um registro

Executar: **DELETE**
> http://localhost:3000/pessoas/11
