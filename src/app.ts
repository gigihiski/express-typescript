import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { Main } from "./routes/index";
import { Welcome } from "./routes/welcome";

dotenv.config({ path: `.env` });

const app: express.Application = express();
const port: number =
  parseInt(process.env.APP_PORT as string) ||
  parseInt(process.env.PORT as string) ||
  9090;

// options for cors midddleware
const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "*",
  preflightContinue: true,
  optionsSuccessStatus: 200,
};
app.use(cors(options));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", Main);
app.use("/welcome", Welcome);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
