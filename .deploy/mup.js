module.exports = {
  servers: {
    one: {
      host: '138.197.38.248',
      username: 'root',
      //password: 'kl0n0likespen15',
       pem: '~/.ssh/id_rsa',
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
    dockerImage: 'abernix/meteord:node-8.4.0-base',
    env: {
      ROOT_URL: 'http://game.roamgetlost.com',
      MONGO_URL: 'mongodb://localhost/meteor'
    },
  },
  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  }
};
