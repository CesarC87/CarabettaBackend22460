require('dotenv').config();

const config = {
    dev: process.env.NOD_ENV !== 'production',
    port: process.env.PORT,
    cors: `${process.env.CORS}` // ¿Por qué en backticks?
}
const db = {
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME
}
const mongoURL = {
    mongoUrl: process.env.MONGO_URL
}

module.exports = { config , db , mongoURL}