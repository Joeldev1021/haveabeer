import dotenv from 'dotenv';
dotenv.config();

const {
    APP_PORT,
    APP_HOST,
    MONGO_COMPASS_URL,
    SECRET,
    EXPIRE_TIME,
} = process.env;

const enviromentConfig = {
    app: {
        port: parseInt(APP_PORT) || 3000,
        host: APP_HOST || 'localhost',
    },
    jwt: {
        secret: SECRET,
        expireTime: EXPIRE_TIME || '8h',
    },
    mongo: {
        url: MONGO_COMPASS_URL,
    }
}

export default enviromentConfig;