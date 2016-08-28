DirectionUnits = new Mongo.Collection("directionUnits");

DirectionUnits.attachSchema(new SimpleSchema({
  text: {
    type: String,
    label: "Direction Unit",
  }
}));