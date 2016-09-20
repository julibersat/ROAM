Tracker.autorun(function(){
	if(Meteor.user() && Session.get("startNewGame")){
		FlowRouter.go("journeyOptions");
		Session.set("startNewGame", false)
	}
})