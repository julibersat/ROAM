DirectionPrompts = new Mongo.Collection("directionPrompts");

DirectionPrompts.attachSchema(new SimpleSchema({
  directionType: {
    type: String,
    label: "Direction Type This",
    autoform: {
      options: [
        {label: "Direction", value: "direction"},
        {label: "Distance", value: "distance"},
        {label: "Stop", value: "stop"}
      ]
    }
  },
  unit: {
    type: String,
    label: "Distance Unit",
    autoform: {
      options: [
        {label: "Feet", value: "feet"},
        {label: "Steps", value: "steps"},
        {label: "Paces", value: "paces"}
      ]
    },
    optional: true
  },
  verb: {
    type: String,
    label: "Distance Verb",
    optional: true
  },
  amount: {
    type: String,
    label: "Distance Amount",
    optional: true,
  }
}));