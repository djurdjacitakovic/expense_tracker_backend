require('dotenv').config();
const env = process.env.NODE_ENV; // 'dev' or 'test'

const dev = {
    app: {
      port: 3000
    },
    db: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      cluster: process.env.DB_CLUSTER,
      dbname: process.env.DB_DBNAME
    }
   };
   const test = {
    app: {
      port:3000
    },
    db: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      cluster: process.env.DB_CLUSTER,
      dbname: process.env.DB_DBNAME_TEST
    }
   };
   
   const config = {
    dev,
    test
   };
   
   module.exports = config[env];