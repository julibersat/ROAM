Template.roamingGameView.helpers({
	isCapturing(){
		return Session.get("isCapturing");
	},
	dirType(){
		return DirectiveTypes.findOne({_id: Template.instance().directiveId.get()}) && DirectiveTypes.findOne({_id: Template.instance().directiveId.get()}).name;
	},
})

Template.roamingGameView.events({
	"click [data-new-directive]" (e, t){
		let self = t;
		App.newDirectivePrompt();
	},
	"click [data-new-capture]" (e, t){
		App.backgroundPosition.set(App.backgroundPosition.get()-50);
		Session.set("isCapturing", true);
		App.newCapturePrompt();
	}
})