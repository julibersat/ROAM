CapturePrompts = new Mongo.Collection("capturePrompts");

CapturePrompts.attachSchema(new SimpleSchema({
  text: {
    type: String,
    label: "Capture Prompt"
  }
}));