## Bem-Vindo(a) ao repositório do projeto Torneio Futebol Clube!

O TFC é um site informativo sobre partidas e classificações de futebol. Este projeto inclui uma API desenvolvida em Node.js que permite criar, editar, excluir e selecionar partidas. Além disso, as aplicações são integradas usando Docker Compose para funcionarem com um banco de dados MySQL. A autenticação é realizada através de JWT (JSON Web Tokens).

## Funcionalidades Principais

- Criação de Partidas: A API permite criar novas partidas de futebol, com informações como data, horário, equipes e resultado.
- Edição de Partidas: As partidas existentes podem ser editadas, permitindo alterar as informações de data, horário, equipes ou resultado.
- Exclusão de Partidas: A API permite que partidas não mais necessárias sejam excluídas.
- Consulta de Partidas: Os usuários podem consultar a lista de partidas existentes.
- Autenticação com JWT: A API utiliza JWT para autenticar e proteger rotas sensíveis.

## Tecnologias Utilizadas

- TypeScript
- Node.js
- Express
- Sequelize (ORM para banco de dados)
- MySQL
- Docker
- JWT (JSON Web Tokens para autenticação)

## Configuração do Ambiente de Desenvolvimento

1. Clone este repositório: `git clone git@github.com:bmediato/TFC.git`
2. Navegue até o diretório do projeto: `cd tfc`
3. Instale as dependências: `npm install`
4. Comando para subir o docker compose: `npm run compose:up`

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com o projeto, siga as etapas abaixo:

1. Fork este repositório.
2. Crie um branch com sua nova funcionalidade ou correção de bug: `git checkout -b minha-funcionalidade`.
3. Faça commit das suas alterações: `git commit -m 'Adiciona nova funcionalidade'`.
4. Faça push para o branch: `git push origin minha-funcionalidade`.
5. Envie um pull request.

## Licença

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Contato

Se tiver alguma dúvida ou sugestão sobre o projeto, entre em contato com <a href = "mailto:beatriz.mediatto2@gmail.com">beatriz.mediatto2@gmail.com</a>

