Meteor.publish(null, function(){
	if(!this.userId){
		return this.ready();
	}
	return Meteor.users.find({_id: this.userId})
});

Meteor.publish(null, function(){
  if(!this.userId){
    return this.ready();
  }
  else 
    return UserJourneys.find({userId: this.userId}, {sort: {timeStart: -1}, limit: 1});
});

Meteor.publish("oneDirective", function(directiveId){
  return DirectiveTypes.find({_id: directiveId});
});

Meteor.publish("oneCapturePrompt", function(captureId){
  return CapturePrompts.find({_id: captureId})
});

//Meteor.publish("randomDirective")