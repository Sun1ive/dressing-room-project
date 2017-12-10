const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log('Server is on'));
