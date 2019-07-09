import { Pool } from 'pg';
import dotenv from 'dotenv';
import logger from '../utils/logger';
import envConfig from './db';

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const isProductionEnv = env === 'production';
const config = process.env[envConfig[env].envVariable];
const pool = new Pool({ connectionString: config });

pool.connect()
  .then(logger(`${env}:database`, `connected to ${env} database`))
  .catch(e => logger(`${env}:database`, 'something went wrong'));

export { isProductionEnv };
export default pool;
