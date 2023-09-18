import { EnviromentDB } from './enviroment.types';

export const enviromentDB: EnviromentDB = {
  table: process.env.DB_TABLE || '',
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
}
