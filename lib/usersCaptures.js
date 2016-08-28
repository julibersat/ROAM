UsersCaptures = new Mongo.Collection(“usersCaptures”);

UsersCaptures.attachSchema({
  userId: {
    type: String,
    label: “User Id”
  },
  journeyId: {
    type: String,
    label: “Journey Id”
  },
  captureImageId: {
    type: String,
    label: “Capture Image”,
  },
  tags: {
    type: [String],
    label: “Tags”,
    maxLength: 3,
    minLength: 1
  }
});