import express from 'express';
import debug from 'debug';

const console = debug('http');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Property Pro');
});

app.listen(port, () => {
  console('starting app');
})
export default app;