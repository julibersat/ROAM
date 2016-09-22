Template.capturePrompt.events({
	"click [data-capture-image]"(){
		$('#capture-image').next().click()
	}
})

Template.capturePrompt.helpers({
	hasImageUpload(){
		return AutoForm.getFieldValue("newUserCapture", "captureImageId");
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

