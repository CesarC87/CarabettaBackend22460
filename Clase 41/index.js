const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res, next) => {
    console.log(`Server is running on port ${PORT}`);
})