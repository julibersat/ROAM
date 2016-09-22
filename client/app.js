App = {};

App.currentDirectivePrompt = new ReactiveVar("directivePrompt");
App.currentCapturePrompt = new ReactiveVar("capturePrompt");

App.currentDirectivePromptImage = function(){
	let dt = DirectiveTypes.findOne({_id: App.currentDirectivePrompt.get().directiveTypeId})
	if(dt) {
		return Images.findOne({_id: dt.iconId}).link();
	}
}
App.currentDirectiveVerbImage = function(){//for later???
	let dt = DirectiveTypes.findOne({_id: App.currentDirectivePrompt.get().directiveTypeId})
	if(dt) {
		return Images.findOne({_id: dt.iconId}).link();
	}
}

App.newDirectivePrompt = function() {
	Meteor.call("getRandomDirectivePrompt", function(err, res){
		App.currentDirectivePrompt.set(res);
	});
}

App.newCapturePrompt = function() {
	Meteor.call("getRandomCapturePrompt", function(err, res){
		App.currentCapturePrompt.set(res);
	});
}

App.newDirectivePrompt();

App.newCapturePrompt();

 Helpers.addScope('App', App);