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
    name: 'DentonRadio',
    path: '../',
    servers: {
      one: {},
    },
    buildOptions: {
//      serverOnly: true
    },
    dockerImage: 'abernix/meteord:base',
    env: {
      ROOT_URL: 'http://dentonradio.com',
      MONGO_URL: 'mongodb://mongodb.dentonradio.com/wyvaT9en'
    },
  }
};
