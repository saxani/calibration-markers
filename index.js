import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;
const __dirname = import.meta.dirname;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
