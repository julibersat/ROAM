Tracker.autorun(function(){
	if(Meteor.user() && Session.get("startNewGame")){
		FlowRouter.go("journeyOptions");
		Session.set("startNewGame", false)
	}
})

App = {};

App.currentDirectivePrompt = new ReactiveVar("directivePrompt");
App.currentCapturePrompt = new ReactiveDict("capturePrompt");

App.currentDirectivePromptImage = function(){
	let dt = DirectiveTypes.findOne({_id: Template.instance().directiveId.get()})
	if(dt) {
		return Images.findOne({_id: dt.iconId})
	}
}
App.currentDirectiveVerbImage = function(){
	let dt = DirectiveTypes.findOne({_id: Template.instance().directiveId.get()})
	if(dt) {
		return Images.findOne({_id: dt.iconId})
	}
}

App.newDirectivePrompt = function() {
	let self = this;
	Meteor.call("getRandomDirectivePrompt", function(err, res){
		console.log(res)
		/*self.randomDirective.set(res.text);
		self.directiveId.set(res._id);*/
	});
}

App.newCapturePrompt = function() {
	let self = this;
	Meteor.call("getRandomCapturePrompt", function(err, res){
		instance.randomCapture.set(res);
	});
}

 Helpers.addScope('App', App);