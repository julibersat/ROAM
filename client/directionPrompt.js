var instance;

Template.directivePromptView.onCreated(function(){
	this.randomDirective = new ReactiveVar(false);
	this.randomCapture = new ReactiveVar(false);
	this.isCapturing = Session.get("isCapturing");
	this.directiveId = new ReactiveVar(false);
	this.timeLeft = new ReactiveVar(false);
	let self = this;
	window.setInterval(function(){
		let tl = UserJourneys.findOne({_id: FlowRouter.getParam("journeyId")}).timeLeft()
		self.timeLeft.set(tl);
	}, 1000)
	Meteor.call("getRandomDirectivePrompt", function(err, res){
		console.log("toot", err, res)
		self.randomDirective.set(res.text);
		self.directiveId.set(res._id);
	});
	Meteor.call("getRandomCapturePrompt", function(err, res){
		self.randomCapture.set(res);
	});
	instance = this;
})
AutoForm.hooks({
	newUserCapture: {
		onSuccess(doc) {
			var uj = UserJourneys.findOne({_id: FlowRouter.getParam("journeyId")})
			if(uj.timeLeft() < 0){
				FlowRouter.go("journeyEnd", {journeyId: FlowRouter.getParam('journeyId')})
			}
			else {
				Meteor.call("getRandomDirectivePrompt", function(err, res){
					instance.randomDirective.set(res.text);
					instance.directiveId.set(res._id);
				});
				Meteor.call("getRandomCapturePrompt", function(err, res){
					instance.randomCapture.set(res);
				});
				Session.set("isCapturing", false);
			}
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
	userJourney() {
		return UserJourneys.findOne({_id: FlowRouter.getParam('journeyId')})
	},
	dirImage(){
		let dt = DirectiveTypes.findOne({_id: Template.instance().directiveId.get()})
		if(dt){
			return Images.findOne({_id: dt.iconId})
		}
	},
	dirType(){
		return DirectiveTypes.findOne({_id: Template.instance().directiveId.get()}) && DirectiveTypes.findOne({_id: Template.instance().directiveId.get()}).name;
	},
	timeLeft(){
		let timeLeft = Template.instance().timeLeft.get();
		if(timeLeft > 0) {
			return Template.instance().timeLeft.get();
		}
		else {
			return "Finish this last capture to complete your journey!"
		}
	}
})

Template.directivePromptView.events({
	"click [data-new-directive]" (e, t){
		let self = t;
		Meteor.call("getRandomDirectivePrompt", function(err, res){
			console.log(err, res)
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