module.exports = {
  servers: {
    one: {
      host: '67.205.134.184',
      username: 'root',
      password: 'Passw0rd',
      // pem: './mykey',
    },
  },

  meteor: {
    name: 'ROAM',
    path: '../',
    servers: {
      one: {},
    },
    buildOptions: {
//      serverOnly: true
    },
    dockerImage: 'abernix/meteord:base',
    env: {
      ROOT_URL: 'http://staging.roamgetlost.com',
      MONGO_URL: 'mongodb://localhost/meteor'
    },
  },
  mongo: { // optional
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
