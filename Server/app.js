import express from 'express';
import '@babel/polyfill';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import logger from './utils/logger';
import swaggerDocument from '../swagger.json';
import userRoute from './routes/userRoute';
import propertyRoute from './routes/propertyRoute';

const app = express();
const env = app.get('env');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/uploads', express.static('uploads'));

dotenv.config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Property Pro API');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', userRoute);
app.use('/api/v1', propertyRoute);

app.all('*', (req, res) => res.status(404).json({
  status: 'error',
  error: 'This route is unavailable',
}));

app.listen(port, () => {
  logger(`${env}:server`, `App started on PORT ${port}`);
})

export default app;
