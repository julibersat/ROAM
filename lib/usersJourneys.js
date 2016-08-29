UserJourneys = new Mongo.Collection('usersJourneys');

UserJourneys.helpers({
  user(){
    return Meteor.users.findOne({_id: this.userId})
  },
  userCaptures() {
    return UserCaptures.find({userJourneyId: this._id})
  },
  timeLeft() {
    let timeNow = moment(new Date())._d.getTime();
    let timeEnd = moment(this.timeStart).add(this.duration, "minutes")._d.getTime()
    let timeMillis = timeEnd - timeNow;
    return Math.floor(timeMillis/1000);
  }
})

UserJourneys.attachSchema(new SimpleSchema({
  userId: {
    type: String,
    label: "User Id",
    autoValue(){
      if(this.isInsert){
        return this.userId;
      }
    }
  },
  journeyName: {
    type: String,
    label: "Journey name",
    optional: true
  },
  journeyType: {
    type: String,
    label: "Journey Type",
    defaultValue: "timed"
  },
  timeStart: {
    type: Date,
    label: "Start Time",
    optional: true,
    autoValue() {
      if(this.isInsert){
        return new Date();
      }
    }
  },
  duration: {
    type: Number,
    label: "Duration in minutes"
  },
  timeEnd: {
    type: Date,
    label: "End time",
    optional: true
  }
}));