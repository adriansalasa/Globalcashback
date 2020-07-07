import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
const multer = require('multer');
// import expressValidator from 'express-validator';
import cors from 'cors';
const app = express()


import 'dotenv/config';
// import './config/database'; //setting database
import route from './routes';
//VARIABLE ON .ENV FILE
const PORT = process.env.PORT

app.use(cors());
app.use(logger('dev'));
app.use(`/${process.env.IMG_ROOT}/`, express.static('src/uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//IMPORT ROUTE
route(app);

app.get('/welcome', (req, res) => res.status(200).send({
    message: 'welcome to default API route',
    name: 'Andra Manday'
}));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
 
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});