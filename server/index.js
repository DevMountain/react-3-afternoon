const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use( cors() );
app.use( bodyParser.json() );

app.use('/api/posts', require('./routes/posts'));

app.listen( 4000, () => console.log('Server listening on port 4000.') );