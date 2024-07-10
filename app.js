import Server from './server/Server.js';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
Server.run(process.env.PORT || 8080)