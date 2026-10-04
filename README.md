# Backend Facilit

Backend de uma aplicação de **serviços e agendamentos**, desenvolvida com NestJS. A plataforma permite gerenciar usuários, estabelecimentos, serviços, profissionais, horários e agendamentos.

## Objetivo

Construir uma API REST organizada por módulos, aplicando conceitos de arquitetura backend, persistência, autenticação e validação de dados.

## O que o projeto faz

A API permite:

- Cadastrar e gerenciar usuários.
- Cadastrar estabelecimentos.
- Cadastrar serviços oferecidos pelos estabelecimentos.
- Gerenciar profissionais e seus horários.
- Criar e gerenciar agendamentos.
- Realizar autenticação com JWT.
- Validar dados recebidos pela API.
- Armazenar senhas utilizando `bcrypt`.

## Tecnologias

- **Node.js / TypeScript**
- **NestJS**
- **TypeORM**
- **MySQL**
- **Passport + JWT**
- **bcrypt**
- **class-validator**
- **Jest / SuperTest**

## Arquitetura

O projeto segue a arquitetura modular do NestJS, separando responsabilidades por domínio:

```text
src/
├── auth/
├── user/
├── shop/
├── services/
├── workers/
├── times/
├── schedules/
└── migrations/
```

Cada módulo organiza, quando aplicável, `controller`, `service`, `entity`, `dto` e `module`.

A autenticação utiliza Passport e JWT, enquanto `ValidationPipe` e DTOs controlam a entrada de dados.

## Modelagem

```text
User
 └── 1:N ──> Schedule

Shop
 ├── 1:N ──> Service
 ├── 1:N ──> Worker
 ├── 1:N ──> Time
 └── 1:N ──> Schedule

Worker
 └── 1:N ──> Time
```

O modelo representa um estabelecimento com seus serviços, profissionais e horários, enquanto os usuários podem possuir agendamentos.

## Como clonar

```bash
git clone https://gitlab.com/NickFernands/back-end-facilit.git
cd back-end-facilit
```

## Como executar

Pré-requisitos: **Node.js**, **npm** e **MySQL**.

```bash
npm install
npm run start:dev
```

Configure as variáveis de ambiente de conexão com o banco e a chave JWT antes de iniciar a aplicação.

### Testes

```bash
npm test
npm run test:e2e
```

## Observação

Credenciais de banco e chaves de autenticação não devem ser mantidas no código ou publicadas no GitHub.

## Autor

**Nicholas Fernandes**
