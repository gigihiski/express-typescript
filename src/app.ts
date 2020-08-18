import express from "express";
import bodyParser from "body-parser";
import { Main } from "./routes/index";
import { Welcome } from "./routes/welcome";

const app: express.Application = express();
const port: number = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", Main);
app.use("/welcome", Welcome);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
