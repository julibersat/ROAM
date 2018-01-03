App = {};

App.backgroundPosition = new ReactiveVar(0);
App.currentDirectivePrompt = new ReactiveVar("directivePrompt");
App.currentCapturePrompt = new ReactiveVar("capturePrompt");

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