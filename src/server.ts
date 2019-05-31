/**
 * Edinson Carranza Saldaña @FullStack
 */
import ex from 'express';
const app = ex();

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import Port from './config/port'; 
const PortInit = new Port();

const path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(ex.static(path.join(__dirname, '..' ,'public')));



app.get('/', (req, res, next) => {

	res.sendFile('index.html', { root: path.join(__dirname, '..' ,'views') });

});


app.listen(PortInit.init(), () => {
	console.log('server is run');
});