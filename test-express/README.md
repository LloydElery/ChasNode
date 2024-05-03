# Creat a Express-server using TypeScript (Svenska)

<strong>This file has a step by step guide for the following:</strong>

1. Create a express project
2. Install TypeScript
3. Create a server with TypeScript
4. Running TypeScript with ts-node
5. Installing nodemon
6. Setting up TypeScript compiler
7. Install Jest & supertest
8. Installing Cors

### Source link

#### [Express TypeScript](https://blog.logrocket.com/how-to-set-up-node-typescript-express/)

## Skapa ett projekt

1. `npm init -y`
2. Redigera "main" i `package.json` filen så att det står

```json
"main": "src/index.js",
```

````
3. `npm i express dotenv`
4. Skapa en `.env` fil och klistra in följande
```env
# Add all of the environmental variables here instead of
# embedding them directly in the app and utilize them
# with the `DotEnv` package.

PORT=3000
````

5. Skapa en `src` mapp och en fil `index.js` i mappen

```js
// src/index.js
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
```

6. Testa genom att skriva `node src/index.js` i terminalen
   1. Din sida går att hitta på `localhost:3000`
7. Skapa en .gitignore fil
   1. Lägg till `node_modules` på rad 1

---

## Installera TypeScript

1. Installera typescript

```pwsh
npm i -D typescript @types/express @types/node
```

    detta skapar dependencys i din package.json fil

```json
      "devDependencies": {
        "@types/express": "^4.17.21",
        "@types/node": "^20.12.8",
        "typescript": "^5.4.5"
      }
```

2. Skapa en tsconfig fil genom terminalen

```pwsh
npx tsc --init
```

3. Ändra tsconfig filen
   1. `"target": "es2022",`

---

## Skapa en express server med TypeScript

1. Byt namn på `index.js` till `index.ts`
   1. Lägg till dep genom `import` istället för require
   2. Lägg till typer på variabler, parametrar och argument där du har error

```ts
// src/index.js - även kallad app.ts/js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
```

---

## Running TypeScript in Node with ts-node

1. `npx ts-node src/index.ts -> y`
2. Testa om det fungerar `localhost:3000`
   ![](https://i.imgur.com/eSh3IJh.png)

---

## Nodemon

Om servern är igång så öppna ett nytt terminalfönster

1. `npm i -D nodemon ts-node`
2. Lägg till följande scrips i `package.json`

```json
"scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  }
```

3. `npm run dev`
   1. Om detta inte fungerar kan det bero på att localhost:3000 är upptaget. Då behöver du stänga av din tidigare instans av localhost i terminalen du körde `node src/index.js`
   2. Sen kan du köra `npm run dev`

---

## TypeScript Compiler

1. Skapa en distmap genom terminalen `npm run build`
   1. Om ingen dist-mapp skapas behöver du lägga till `./dist` som direktiv i din `tsconfig.json` fil

```json
 "outDir": "./dist" /* Specify an output folder for all emitted files. */,
```

2. I din `dist` mapp finns en `index.js` fil som har följande innehåll

```js
"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.js
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Test Express as a Server.");
});
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
```

---

## Installera Jest & Supertest

### JEST

```pwsh
npm i -D jest typescript
npm i -D jest ts-jest @types/jest
npx ts-jest config:init
npm test 'or' npx jest
```

![](https://i.imgur.com/dQQBBzW.png)

### Supertest

```pwsh
npm install -D supertest superagent @types/supertest @types/superagent
```

![](https://i.imgur.com/i9v1mhs.png)

---

## Installera Cors

### Cors

1. `npm install cors`
2. `npm install --save @types/cors`
3. `import cors` i app
4. Lägg till

```ts
app.use(cors());
```

5. Testa localhost `npm run dev`
