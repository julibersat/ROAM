Template.homeView.onCreated(function(){
	this.randomDirective = new ReactiveVar(App.getRandomDirectivePrompt());
	this.isCapturing = new ReactiveVar(false);
})

Template.homeView.helpers({
	getRandomDirectivePrompt(){
		return Template.instance().randomDirective;
	},
	getRandomCapturePrompt() {
		let dirArray = CapturePrompts.find().fetch()
		let randIndex = Math.floor(Math.random() * dirArray.length);
		let randDir = dirArray[randIndex];
		return randDir.text;
	},
	isCapturing(){
		return Template.instance().isCapturing;
	}
})

Template.homeView.events({
	"click [data-new-directive]"(){
		Template.instance().randomDirective.set(App.getRandomDirectivePrompt())
	},
	"click [data-new-capture]"(){
		Template.instance().isCapturing.set(true);
	}
})