const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use( cors() );
app.use( bodyParser.json() );

app.use('/api/posts', require('./routes/posts'));
app.get('/api/posts/filter', require('./controllers/post_controller').filter);

app.listen( 4000, () => console.log('Server listening on port 4000.') );