const db = require ('./json-server/patentes.json');
const express = require ('express');
const app = express ();
const cors = require ('cors');
const port = 3005;
app.use (cors ());
app.use (express.json ());
app.use (express.urlencoded ({extended: true}));

app.get ('/api/Patentes', (req, res) => {
    res.json (db);
});


app.listen (port, () => {
    console.log ('Server running on port ' + port);
});
