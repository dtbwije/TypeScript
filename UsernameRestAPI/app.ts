import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/users', ( req,res) => {
    console.log(req.baseUrl)
    res.json([{ name: 'John Doe', age: 30 }]);
});

app.post('/users', (req, res) => {
    const { name, age } = req.body;
    res.json({ name, age });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});