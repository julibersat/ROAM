Template.capturePrompt.onCreated(function(){
	this.hasImageUpload = new ReactiveVar(false);
	console.log(AutoForm.getFieldValue("captureImageURL", "newUserCapture"));
	this.clock = window.setInterval(() => {
		if(AutoForm.getFieldValue("captureImageURL", "newUserCapture")){
			this.hasImageUpload.set(true);
			window.clearInterval(this.clock);
		}
	}, 1000)
})

Template.capturePrompt.onDestroyed(function(){
	window.clearInterval(this.clock);
})

Template.capturePrompt.events({
	"click [data-capture-image]"(){
		$('[file-input]').click()
		App.backgroundPosition.set(App.backgroundPosition.get()-50);
	}
})

Template.capturePrompt.helpers({
	hasImageUpload(){
		return Template.instance().hasImageUpload.get();
	},
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
			App.backgroundPosition.set(App.backgroundPosition.get()-50);
			Session.set("isCapturing", false);
			if(Meteor.user().activeJourney().timeLeft() == "Times up!"){
				FlowRouter.go("journeyEnd")
			}
			else {
				App.newDirectivePrompt();
				App.newCapturePrompt();
			}
		}
	}
})