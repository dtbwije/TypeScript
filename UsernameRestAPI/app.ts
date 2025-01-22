import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());

app.get('/users', ( req,res) => {
    const tom = new User()
    tom.name = req.query.name
    tom.age = req.query.age
    res.json([{ name: 'John Doe', age: 30 }]);
});

app.post('/users', (req, res) => {
    console.log("Body"+ req.body);
    const { name, age } = req.body;
    res.json({ name, age });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});