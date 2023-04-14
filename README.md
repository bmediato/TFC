## Bem-Vindo(a) ao repositório do projeto Trybe Futebol Clube!


O TFC é um site informativo sobre partidas e classificações de futebol!

No time de desenvolvimento do TFC, fiquei responsável por desenvolver uma API, onde seria possível criar, editar, excluir e selecionar partidas e também integrar - através do docker-compose - as aplicações para que elas funcionem consumindo um banco de dados.

Tecnologias utilizadas:
- TypeScript;
- nodeJs;
- Express;
- Sequelize;
- MySQL;
- JWT.

<details>
<summary><strong> Instalação do projeto </strong></summary><br />

1. Primeiro abra o terminal e crie um diretório com o comando <strong>mkdir</strong>:
``` 
 mkdir projetos
```

2. Entre no diretório que acabou de criar e clone o projeto:
``` 
 cd projetos
 git clone git@github.com:bmediato/TFC.git
```

3. Entre no diretório do projeto e rode o serviço `node` na raiz do projeto com o comando:
``` 
 cd tfc
 npm run install
```

4. Por fim e ainda na raiz do projeto, use o comando para subir o docker compose:
``` 
 npm run compose:up
```
</details>

