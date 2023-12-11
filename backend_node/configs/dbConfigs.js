module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'aditya1504',
  DB: 'nuvertos',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};