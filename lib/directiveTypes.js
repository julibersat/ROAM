DirectiveTypes = new Mongo.Collection("directiveTypes");

DirectiveTypes.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Direction Type This",//direction // distance // stop
    autoform: {
      options: [
        {label: "Direction", value: "direction"},
        {label: "Distance", value: "distance"},
        {label: "Stop", value: "stop"}
      ]
    }
  },
}));