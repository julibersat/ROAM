Template.capturePrompt.onCreated(function(){
	this.hasImageUpload = new ReactiveVar(false);
	this.clock = window.setInterval(()=>{
		this.hasImageUpload.set(AutoForm.getFieldValue("captureImageId", "newUserCapture"))
	}, 1000)
})

Template.capturePrompt.events({
	"click [data-capture-image]"(){
		$('#capture-image').next().click()
	}
})

Template.capturePrompt.helpers({
	hasImageUpload(){
		return Template.instance().hasImageUpload.get();
	}
})

AutoForm.hooks({
	newUserCapture: {
		before: {
			insert(doc){
				doc.directive = App.currentDirectivePrompt.get()
				return doc;
			}
		},
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

