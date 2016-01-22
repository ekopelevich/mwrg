module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/mwrgdb'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
