const express = require('express');

const app = express();
app.use(express.static(__dirname + '/example/build/'));

app.listen(process.env.PORT || 3010);
