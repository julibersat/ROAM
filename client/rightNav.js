Template.rightNav.onCreated(function(){
	this.timeLeft = new ReactiveVar(false);
	let self = this;
	window.setInterval(function(){
		let tl = Meteor.user().activeJourney().timeLeft();
		self.timeLeft.set(tl);
	}, 1000)
})

Template.rightNav.helpers({
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