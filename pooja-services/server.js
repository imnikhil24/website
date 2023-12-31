const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 80;

app.use(bodyParser.json());

// Define your API routes here

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
