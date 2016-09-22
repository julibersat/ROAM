Template.capturePrompt.events({

})

Template.capturePrompt.helpers({
	hasImageUpload(){
		//AutoForm.captureImageId
	}
})

AutoForm.hooks({
	newUserCapture: {
		onSuccess(doc) {
			Session.set("isCapturing", false);
			if(Meteor.user().activeJourney().timeLeft() < 0){
				FlowRouter.go("journeyEnd")
			}
			else {
				App.newDirectivePrompt();
				App.newCapturePrompt();
			}
		}
	}
})

