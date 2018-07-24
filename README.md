# IX Invoice Frontend

Frontend do projeto de cobrança de serviços do IX.br. O backend está no repositório [ix-invoice-backend](https://code.ceptro.br/projects/IX/repos/ix-invoice-backend).

Projeto em VueJS 2.0, com VueX e Vue I18n para tradução.

## Inicializando o projeto

```bash
# install dependencies and serve with hot reload at localhost:8081
docker-compose up --build
```

## Configurando para produção

```bash
# build for production with minification
docker-compose run node npm run build

# build for production and view the bundle analyzer report
docker-compose run node npm run build --report
```

## Executando testes

```bash
# run unit tests
docker-compose run node npm run test:unit
```
