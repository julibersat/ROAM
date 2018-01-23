Slingshot.fileRestrictions("roamCaptures", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited)
});

UserCaptures = new Mongo.Collection("usersCaptures");

UserCapturesIndex = new EasySearch.Index({
  collection: UserCaptures,
  fields: ['tags'],
  engine: new EasySearch.Minimongo({
    sort: () => { createdAt: -1 }
  })
});

UserCaptures.helpers({
  user() {
    return Meteor.users.findOne({_id: this.userId})
  },
  userJourney() {
    return UserJourneys.findOne({_id: this.userJourneyId})
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
  captureImageURL: {
    type: String,
    label: "Upload a photo",
    optional:true,
    autoform: {
      type: 'slingshotFileUpload',
      afFieldInput:{
        slingshotdirective: {
          directive: 'roamCaptures',
          // onBeforeUpload is called once on each file.
          onBeforeUpload: function(file, callback) {
            Resizer.resize(file, {width: 1020, height: 1020, cropSquare: true}, function(err, file) {
              if( err ){
                console.error( err );
                callback( file );
              }else{
                callback( file );
              }
            });
          }
        }
      }
    }
  }
});