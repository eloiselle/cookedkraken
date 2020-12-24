
console.log("Server starting at " + new Date().toLocaleTimeString());

// Allow __dirname variable
const __dirname = fs.realpathSync('.');

// ██.██....██.█████▄.▄█████▄.█████▄.██████.
// ██.███▄▄███.██..██.██▀.▀██.██..██...██...
// ██.██.██.██.█████▀.██...██.█████....██...
// ██.██....██.██.....██▄.▄██.██..██...██...
// ██.██....██.██.....▀█████▀.██..██...██...

//import { config } from "dotenv"

import cors from "cors"
import express from "express";
import { routes } from "./routes.js";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config()


const port = process.env.SERVER_PORT ?? 80;
export const router = express.Router({ strict: true });
export let app = express();
app.use(cors())


// ▄████.█████.██████.
// ██....██......██...
// ▀███▄.████....██...
// ...██.██......██...
// ████▀.█████...██...

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src', 'views'));

app.locals.pretty = true; // Pretty json


// ██...██.▄████.█████.
// ██...██.██....██....
// ██...██.▀███▄.████..
// ██...██....██.██....
// ▀█████▀.████▀.█████.

app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(path.join(__dirname, 'dist', 'src', 'scripts')));
app.use('/css', express.static(path.join(__dirname, 'dist', 'src', 'css')));
app.use('/js', express.static(path.join(__dirname, 'dist', 'src', 'js')));
app.use('/controllers', express.static(path.join(__dirname, 'dist', 'src', 'controllers')));
//app.use('/views',  express.static(path.join(__dirname, 'dist', 'src', 'views')));

app.use(express.json()); // Json middleware
app.use(express.urlencoded({ extended: true }))

app = routes(app); //register the routes


// ▄████.██████.▄████▄.█████▄.██████.
// ██......██...██..██.██..██...██...
// ▀███▄...██...██████.█████....██...
// ...██...██...██..██.██..██...██...
// ████▀...██...██..██.██..██...██...

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
//module.exports = app