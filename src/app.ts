import express from "express";
import { Main } from "./routes/index";
import { Welcome } from "./routes/welcome";

const app: express.Application = express();
const port: number = 3000;

app.use("/", Main);
app.use("/welcome", Welcome);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
