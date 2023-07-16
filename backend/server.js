const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool, Client } = require('pg');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

var corsOptions = {
    origin: 'https://localhost:8081'
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models')
db.sequelize.sync({})
    .then(() => {
        console.log('Synced db');
    })
    .catch((err) => {
        console.log("Failed to sync db:" + err.message);
    });

app.get('/', (req, res) => {
    res.json({message:'Express Server Running...'});
});

require("./routes/user.routes")(app);

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});

