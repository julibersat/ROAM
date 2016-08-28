DirectiveTypes = new Mongo.Collection("directiveTypes");

DirectiveTypes.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Direction Type This",//direction // distance // stop
  },
  iconId: {
    type: String,
    label: "Directive Icon",
    autoform: {
      afFieldInput: {
        type: "fileUpload",
        collection: 'Images'
      }
    }
  }
}));