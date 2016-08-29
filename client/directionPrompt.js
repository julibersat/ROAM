Template.directivePromptView.onCreated(function(){
	this.randomDirective = new ReactiveVar(false);
	this.randomCapture = new ReactiveVar(false);
	this.isCapturing = Session.get("isCapturing");
	this.directiveId = new ReactiveVar(false);
	let self = this;
	Meteor.call("getRandomDirectivePrompt", function(err, res){
		self.randomDirective.set(res.text);
		self.directiveId.set(res._id);
	});
	Meteor.call("getRandomCapturePrompt", function(err, res){
		self.randomCapture.set(res);
	});
})
AutoForm.hooks({
	newUserCapture: {
		onSuccess(doc) {
			Session.set("isCapturing", false);
		}
	}
})


Template.directivePromptView.helpers({
	getRandomDirectivePrompt(){
		return Template.instance().randomDirective.get();
	},
	getRandomCapturePrompt() {
		return Template.instance().randomCapture.get();
	},
	isCapturing(){
		return Session.get("isCapturing");
	},
	journeyId() {
		return FlowRouter.getParam('journeyId')
	},
	dirImage(){
		let dt = DirectiveTypes.findOne({_id: Template.instance().directiveId.get()})
		if(dt){
			return Images.findOne({_id: dt.iconId})
		}
	},
	dirType(){
		return DirectiveTypes.findOne({_id: Template.instance().directiveId.get()}) && DirectiveTypes.findOne({_id: Template.instance().directiveId.get()}).name;
	}
})

Template.directivePromptView.events({
	"click [data-new-directive]" (e, t){
		let self = t;
		Meteor.call("getRandomDirectivePrompt", function(err, res){
			self.randomDirective.set(res.text);
			self.directiveId.set(res._id);
		});
	},
	"click [data-new-capture]" (e, t){
		Session.set("isCapturing", true)
		/*let self = t;
		Meteor.call("getRandomCapturePrompt", function(err, res){
			self.randomCapture.set(res);
		});*/
	}
})