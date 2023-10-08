import express from "express";
import bodyParser from "body-parser";
import gamesRouter from "./routes/games.js"
import customersRouter from "./routes/customers.js"
import cors from 'cors'

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use("/api/games", gamesRouter);
app.use("/api/customers", customersRouter);


app.listen (5001, () => {
    console . log ("On ecoute sur le port 5001 ");
    });