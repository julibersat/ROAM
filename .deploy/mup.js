module.exports = {
  servers: {
    one: {
      host: '159.203.98.172',
      username: 'root',
      password: 'kl0n0likespen15',
      // pem: './mykey',
    },
  },

  meteor: {
    name: 'roam',
    path: '../',
    servers: {
      one: {},
    },
//    buildOptions: {
//      serverOnly: true
 //   },
    dockerImage: 'abernix/meteord:base',
    env: {
      ROOT_URL: 'http://roamgetlost.com',
      MONGO_URL: 'mongodb://localhost/meteor'
    },
  }
};
