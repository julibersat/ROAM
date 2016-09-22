DirectionVerbs = new Mongo.Collection("directionVerbs");

DirectionVerbs.attachSchema(new SimpleSchema({
  text: {
    type: String,
    label: "Direction Verb",
  },
  imageId: {
    type: String,
    label: "Dis a gif",
    autoform: {
      afFieldInput: {
        type: "fileUpload",
        collection: 'Images'
      }
    }
  }
}));