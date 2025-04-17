import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import mysql from 'mysql2';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested - With, Content - Type, Accept, Access - Control - Allow - Request - Method');

    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

export default app;