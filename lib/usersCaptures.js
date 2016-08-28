UsersCaptures = new Mongo.Collection("usersCaptures");

UsersCaptures.helpers({
  user() {
    return Meteor.users.findOne({_id: this.userId})
  },
  userJourney() {
    return UserJourneys.findOne({_id: this.userJourneyId})
  },
  captureImage(){
    return false;//return image later
  }
})

UsersCaptures.attachSchema({
  userId: {
    type: String,
    label: "User Id"
  },
  userJourneyId: {
    type: String,
    label: "Journey Id"
  },
  captureImageId: {
    type: String,
    label: "Capture Image",
  },
  tags: {
    type: [String],
    label: "Tags",
   // maxLength: 3,
  //  minLength: 1
  },
  directiveText: {
    type: String,
    label: "Directive Text"
  },
  directiveType: {
    type: String,
    label: "Directive Type"
  },
  createdAt: {
    type: Date,
    label: "created At",
    autoValue() {
      if(this.isInsert){
        return new Date();
      }
    }
  }
});