UserCaptures = new Mongo.Collection("usersCaptures");

UserCapturesIndex = new EasySearch.Index({
  collection: UserCaptures,
  fields: ['tags'],
  engine: new EasySearch.Minimongo()
});

UserCaptures.helpers({
  user() {
    return Meteor.users.findOne({_id: this.userId})
  },
  userJourney() {
    return UserJourneys.findOne({_id: this.userJourneyId})
  },
  captureImage(){
    return Images.findOne({_id: this.captureImageId});//return image later
  }
})

UserCaptures.attachSchema({
  userId: {
    type: String,
    label: "User Id",
    autoValue(){
      if(this.isInsert){
        return this.userId;
      }
    }
  },
  userJourneyId: {
    type: String,
    label: "Journey Id",
    optional: true,
    autoValue() {
      if(this.isInsert){
        return Meteor.users.findOne({_id: this.userId}).activeJourney()._id
      }
    }
  },
  tags: {
    type: [String],
    label: "Use at most 3 words to describe this.",
    maxCount: 3,
    minCount: 1
  },
  directive: {
    type: Object,
    defaultValue: {},
    blackbox: true,
    label: "directive",
  },
  createdAt: {
    type: Date,
    label: "created At",
    autoValue() {
      if(this.isInsert){
        return new Date();
      }
    }
  },
  captureImageId: {
    type: String,
    label: "Upload a photo",
    autoform: {
      afFieldInput: {
        type: "fileUpload",
        collection: 'Images'
      }
    }
  }
});