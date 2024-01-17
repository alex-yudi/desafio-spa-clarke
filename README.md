# Documentação - Aplicação SPA - Desafio Clark
    Projeto construído no desafio técnico para a vaga de Desenvolvedor Fullstack Jr. para a Clarke Energia.

## Links do deploy:
Front: <https://clarke-alex-yudi.netlify.app/>

Back: <https://odd-red-dibbler-hose.cyclic.app/>

## Tecnologias utilizadas:
    Front: 
        - React com Typescript
        - Styled-components
        - Axios
        - React-hook-form em conjunto com Zod
        - ContextApi
        - React-router-dom
        - RadixUi
        - Cypress para dois testes 2e2
    Back:
        - Node com Typescript
        - Prisma com PostgreSql
        - Apollo-server(graphql) com type-graphql
        - Docker-compose para ambiente de desenvolvimento (BD em container)
        - Vitest para 2 testes unitários
        
## Para rodar a aplicação localmente:
    Será necessário ter instalados em sua máquina: 
        - Node 18.10 ou superior
        - Docker e Docker-compose
        
    1º - Clone este repositório (ele está dividido em front e back, cada um terá seus passos específicos)
    
    2º - A maneira mais "fácil" é abrir duas janelas diferentes do seu editor de código (utilizado no desenvolvimento foi o VsCode), cada uma com uma das pastas do projeto abertas
    
    3º - Na janela do front, dentro dos arquivos, haverá um .env.example; retire a parte do ".example". 
    4º - Após isso, abra o terminal dentro do projeto e execute o comando "npm install"
    5º - Seguido dele, após ocorrer a instalação do node_modules, rode o comando "npm run dev" no terminal. Após isso, o terminal irá informar o link para acessar o projeto da parte do front rodando.
    
    6º - Na janela do back, dentro dos arquivos, haverá um .env.example; retire a parte do ".example". (esse .env está configurado para acesssar o banco de dados via container)
    7º - Após isso, rode o comando "npm install" no terminal
    8º - Antes de rodar o projeto, é necessário iniciar o container, utilize o comando "docker compose up -d"
    9º - Após a confirmação do docker iniciado, será necessário executar as migrations do prisma, rode o comando "npx prisma migrate dev" no terminal
    10º - Haverão casos em que o seu BD não terá dados, mesmo após a migrate. Para casos assim, execute o comando "npx prisma db seed"
    11º - Após esses passos, será possível iniciar o projeto, utilize o comando "npm run dev" no terminal
    
## Após os passoss seguintes o projeto estará rodando completamente em sua máquina.
