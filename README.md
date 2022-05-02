<h1 align=center>
Recoleta
</h1>

<h3 align="center">

♻️ Recoleta é um projeto social para ajudar pessoas a coletarem e doar lixo reciclado, ajudando assim
o meio ambiente e geração de renda.

</h3>

<hr>

## **Tecnologias utilizadas**

#### **Website** (React)

- **React Router Dom**
- **React Icons**
- **Axios**
- **Leaflet**
- **React Leaflet**

<hr>

#### **Server** (NodeJS + TypeScript)

- **Express**
- **CORS**
- **Postgres**
- **Typescript**

<hr>

#### **Utilitários**

- Protótipo: **[Figma](https://www.figma.com/)** &rarr; **<kbd>[Protótipo (Recoleta)](https://www.figma.com/file/ph7xMWIglBnWM0pkZf30oI/Recoleta?node-id=102%3A2)</kbd>**
- Maps: **Leaflet**
- Editor: **Visual Studio Code**
- Teste de API: **Insomnia + Postman**

<hr>

## **COMO UTILIZAR**

### Configurações Iniciais

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina.

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[asdf]</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório (para o gerenciamento de commits), no diretório do **RECOLETA-BACKEND** e no diretório do **RECOLETA-FRONTEND**. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ npm install

# ou

$ yarn

```

<hr>

## **Funcionalidades**

### A maioria das informações estão mocadas

- [x] Criação de conta
- [x] Logar na plataforma
- [x] Criar uma doação
- [x] Visualizar doações criadas por outros usuários 

<hr>

### Utilizando o Server

```sh
# Baixe o repositório:
$ git clone https://github.com/douglas-filipe/recoleta-backend.git

# Abrindo o terminal no diretório do servidor:
$ cd recoleta-backend

# Se quiser iniciar o docker

$ docker-compose up -d

# Instanciando o banco de dados:
$ npx prisma migrate dev

# Executando a aplicação em modo de desenvolvimento:
$ yarn dev
```

### Utilizando o Website

```sh
# Baixe o repositório:
$ git clone https://github.com/monicadasilva/recoleta-frontend.git

# Abrindo o terminal no diretório do website:
$ cd recoleta-frontend

# Executando o website:
$ yarn start
```

> Se o browser não abrir automaticamente, acesse: http://localhost:3000.

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório.

<h3 align="center"> 🚧️ Em construção 🚧️</h3>
