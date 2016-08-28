UserJourneys = new Mongo.Collection('usersJourneys');

UserJourneys.helpers({
  user(){
    return Meteor.users.findOne({_id: this.userId})
  }
})

UserJourneys.attachSchema(new SimpleSchema({
  userId: {
    type: String,
    label: "User Id"
  },
  journeyType: {
    type: String,
    label: "Journey Type"
  },
  timeStart: {
    type: Date,
    label: "Start Time",
    optional: true,
    autoValue() {
      if(this.isInsert()){
        return new Date();
      }
    }
  },
  timeEnd: {
    type: Date,
    label: "End time",
    optional: true
  }
}));