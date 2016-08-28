Template.directivePromptView.onCreated(function(){
	this.randomDirective = new ReactiveVar(false);
	this.randomCapture = new ReactiveVar(false);
	this.isCapturing = new ReactiveVar(false);
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
	userCapture:{
		onSubmit(err, doc, curr){
			console.log(err, doc, curr)
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
		return Template.instance().isCapturing.get();
	},
	journeyId() {
		return FlowRouter.getParam('journeyId')
	},
	dirImage(){
		let dt = DirectiveTypes.findOne({_id: Template.instance().directiveId.get()})
		if(dt){
			console.log(Images.findOne({_id: dt.iconId}))
			return Images.findOne({_id: dt.iconId})
		}
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
		t.isCapturing.set(true)
		/*let self = t;
		Meteor.call("getRandomCapturePrompt", function(err, res){
			self.randomCapture.set(res);
		});*/
	}
})