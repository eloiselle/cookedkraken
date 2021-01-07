
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
import https from "https"
import { updateDatabase } from "./databaseProperties.js";
dotenv.config()

// Check database version and update if necessary
updateDatabase()

const env = process.env.NODE_ENV ?? "dev"
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

app.locals.pretty = true;


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

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app = routes(app);


// ▄████.██████.▄████▄.█████▄.██████.
// ██......██...██..██.██..██...██...
// ▀███▄...██...██████.█████....██...
// ...██...██...██..██.██..██...██...
// ████▀...██...██..██.██..██...██...

// Load the SSL certificate when in production and start the server
if (env == "prod") {
  let privateKey = fs.readFileSync('private.key', 'utf8');
  let certificate = fs.readFileSync('eloiselle_tech.crt', 'utf8');
  let credentials = { key: privateKey, cert: certificate };

  let httpsServer = https.createServer(credentials, app);
  httpsServer.listen(port, () => console.log(`Server running on https://eloiselle.tech:${port}`));
}

// Open without SSL in any other environment
else { 
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
}