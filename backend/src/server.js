const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors')
const app = express ();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

require('./controllers/libaryController')(app);

app.listen(5000);