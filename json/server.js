const db = require ('./json-server/patentes.json');
const dbExp = require('./json-server/Exprimentos.json')
const dbCore = require('./json-server/Corrents.json')
const express = require ('express');
const app = express ();
const cors = require ('cors');
const port = 3005;
app.use (cors ());
app.use (express.json ());
app.use (express.urlencoded ({extended: true}));
app.get ('/api/Exprimentos', (req, res) => {
    res.json (dbExp);
});
app.get ('/api/Corrents', (req, res) => {
    res.json (dbCore);
});
app.get ('/api/Patentes', (req, res) => {
    res.json (db);
});
app.listen (port, () => {
    console.log (`server is running on port http://localhost:${port}`);
});
