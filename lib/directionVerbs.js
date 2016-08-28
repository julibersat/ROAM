DirectionVerbs = new Mongo.Collection("directionVerbs");

DirectionVerbs.attachSchema(new SimpleSchema({
  text: {
    type: String,
    label: "Direction Verb",
  }
}));