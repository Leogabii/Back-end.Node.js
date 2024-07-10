import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
const config = {
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DB
}

export default config