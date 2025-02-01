# Sistema de Gestão de Projetos

Este é um sistema simples de gestão de projetos que permite cadastrar, atualizar e calcular prazos de entrega utilizando a API do Google Maps. O sistema possui uma API RESTful construída com Node.js, Typescript, e utiliza o PostgreSQL para persistência de dados.

## Conteúdos do repositório
1. [Tecnologias Usadas](#tecnologias-usadas)
2. [Instalação](#instalação)
3. [Como Usar](#como-utilizar)
4. [Endpoints da API](#endpoints-da-api)
5. [Contribuição]()


## Tecnologias Usadas

- Node.js
- TypeScript
- Express.js
- PostgreSQL
- Docker
- pg (Biblioteca para interagir com o PostgreSQL)
- Google Maps API

## Instalação

### 1. Clone o repositório:

```bash
git clone https://github.com/LunaDesune/sistema-de-projetos-api.git
cd sistema-de-projetos
```
### 2. Instale as dependências:
```bash
npm install
```

### 3. Configuração do Banco de dados
Certifique-se de que o PostgreSQL está rodando e configurado corretamente. Crie um arquivo **.env** na sua raiz do projeto para criar as variáveis de ambiente e utiliza-las.
```bash
PG_USER=seu_usuario
PG_HOST=localhost
PG_DATABASE=nome_do_banco
PG_PASSWORD=sua_senha
```

### 4. Rode a aplicação
```bash
npm start
```
O servidor estará disponível em **http://localhost:3000**

## Como utilizar?
Com o servidor pronto em funcionamento, você pode acessar a API nos endpoints configurados. Use ferramentas como **Postman** ou **Insomnia** para testar a API.

### Exemplo de Requisição para Cadastro de Projeto:
Endpoint: *POST api/projects

Corpo da requisição:
```json
{
    "title": "Projeto X",
    "description": "Descrição do projeto",
    "startDate": "2025-02-01"
}
```
Resposta:
```json
{
    "id": 1,
    "title": "Projeto X",
    "description": "Descrição do projeto",
    "startDate": "2025-02-01",
    "status": "Em andamento..."
}
```

## Endpoints da API
1. POST /api/projects - Cadastrar um novo projeto
* Corpo: **title, description, startDate**
* Resposta: Retorna o projeto criado com um ID gerado e o status "Em andamento..."


## Contribuição
1. Faça o fork do repositório.
2. Crie uma nova branch (git checkout -b feature/nome-da-feature).
3. Commit suas alterações(git commit -am 'Adiciona nova feature').
4. Envie para o repositório remoto(git push origin feature/nome-da-feature).
5. Abra um pull request

