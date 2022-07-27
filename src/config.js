const config = require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 5000,
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL
}