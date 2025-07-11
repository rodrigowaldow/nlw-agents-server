# NLW Agents

Este projeto, **NLW Agents**, foi desenvolvido durante o evento da Rocketseat. Ele consiste em uma API Node.js para gerenciamento de salas, utilizando tecnologias modernas e padrões de projeto recomendados.

## Tecnologias Utilizadas

- **[Fastify](https://fastify.dev/):** Framework web rápido e eficiente para Node.js.
- **[drizzle-orm](https://orm.drizzle.team/):** ORM moderno para TypeScript, utilizado para manipulação do banco de dados PostgreSQL.
- **[postgres](https://github.com/porsager/postgres):** Cliente PostgreSQL para Node.js.
- **[zod](https://zod.dev/):** Validação de esquemas e tipos.
- **[fastify-type-provider-zod](https://github.com/fastify/fastify-type-provider-zod):** Integração entre Fastify e Zod para validação de rotas.
- **[drizzle-seed](https://github.com/arthurfiorette/drizzle-seed):** Utilitário para popular o banco de dados com dados fictícios.
- **[@fastify/cors](https://github.com/fastify/fastify-cors):** Middleware para habilitar CORS.

## Padrões de Projeto

- **Barrel Files:** Utilização de arquivos `index.ts` para centralizar exports dos módulos.
- **Validação de ambiente:** Uso do Zod para garantir variáveis de ambiente válidas.
- **Separação de responsabilidades:** Código organizado em camadas (`db`, `http/routes`, etc).

## Setup e Configuração

1. **Clone o repositório e instale as dependências:**
   ```sh
   npm install
   ```

2. **Configure o arquivo `.env`:**
   - Copie `.env.example` para `.env` e ajuste as variáveis conforme necessário.

3. **Suba o banco de dados PostgreSQL com suporte a vetores:**
   ```sh
   docker-compose up -d
   ```

4. **Execute as seeds para popular o banco:**
   ```sh
   npm run db:seed
   ```

5. **Inicie o servidor em modo desenvolvimento:**
   ```sh
   npm run dev
   ```

## Observações

- O projeto utiliza TypeScript com configurações estritas.
- As rotas principais estão em `src/http/routes`.
- O schema do banco está em `src/db/schema`.

---

Desenvolvido durante o evento NLW da Rocketseat