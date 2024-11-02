//Adds a basic server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Portfolio.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const username = req.body.name; // access form data
    // Add validation logic here
    res.send(`Message Sent`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
