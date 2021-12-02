# contacts_api
API Desenvolvida referente à vaga de Desenvolvedor React Native na empresa Ser Educacional

## Para rodar o projeto
- Rode npm install
- Vá atá o arquivo .env.example, remove o .example
- DBTYPE=postgres
  DB_USER=O usuário do banco
  PASSWORD_DB=A senha do banco
  DB_HOST=Onde esta rodando o banco
  PORT=A porta que deseja rodar o endpoint
- Após rodar o install e definir o .env, rode o seguinte comando npx ts-node --transpile-only ./node_modules/typeorm/cli.js migration:run
- Esse comando acima irá criar as tabelas no banco de dados
- Após a criação das tabelas, rode o comando npm run dev, para dar um start na api
