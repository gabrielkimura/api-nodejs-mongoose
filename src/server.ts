import express, { type Express } from "express";
const app: Express = express();

/*
  ## Middlewares
*/
app.use(express.json());

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});