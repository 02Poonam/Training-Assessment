const express = require('express');
const app = express();
const port = 3000;

app.get('/products', (req, res) => {
  res.json([{ id: 1, name: 'Product-1' }, { id: 2, name: 'Product-2' }, { id: 3, name: 'Product-3'}]);
});

app.listen(port, () => {
  console.log(`Product catalog page is running on port ${port}`);
});


