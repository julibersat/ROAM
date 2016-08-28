DirectiveTypes = new Mongo.Collection("directiveTypes");

DirectiveTypes.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Direction Type This",//direction // distance // stop
  },
}));