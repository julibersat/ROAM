DirectiveTypes = new Mongo.Collection("directiveTypes");

DirectiveTypes.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Directive Type This",//direction // distance // stop
  },
  iconURL: {
    type: String,
    label: "Directive Icon",
  }
}));