import express from 'express';
import '@babel/polyfill';
import bodyParser from 'body-parser';
import debug from 'debug';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute';

const log = debug('http');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config();
const port = process.env.PORT || 3000;

app.use('/api/v1', userRoute);

app.get('/', (req, res) => {
  res.send('Welcome to Property Pro');
});

app.listen(port, () => {
  log(`App started on PORT ${port}`);
})

export default app;