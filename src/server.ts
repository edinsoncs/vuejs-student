/**
 * Edinson Carranza Saldaña @FullStack
 */
import ex from 'express';
const app = ex();

app.get('/', (req, res, next) => {

	res.write('sheets');
	res.end();

});



app.listen(3000, () => {
	console.log('server is run');
});