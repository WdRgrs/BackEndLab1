const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 4000
app.listen(port, () => console.log(`Server port number : ${port}`));

app.get('/api/users', (req, res) => {
    let friendsArr = ['Tom', 'Sam', 'Sara', 'Alex', 'Jon', 'George', false, NaN, null, 1, '1', undefined]
    res.status(200).send(friendsArr);
});

app.get('/weather/:temperature', (req, res) => {
    let phrase = `<h1>It is ${req.params.temperature} today.</h1>`
    res.status(202).send(phrase);
});
