const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3030;


app.listen(PORT, () => {
  console.log('app is listening on port 3030');
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});