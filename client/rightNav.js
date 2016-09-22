Template.rightNav.onCreated(function(){
	this.timeLeft = new ReactiveVar(false);
	let self = this;
	window.setInterval(function(){
		if(Meteor.user() && Meteor.user().activeJourney()){
			let tl = Meteor.user().activeJourney().timeLeft();
			self.timeLeft.set(tl);
		}
	}, 1000)
})

Template.rightNav.helpers({
	timeLeft(){
		return Template.instance().timeLeft.get();
	}
})

Template.rightNav.events({
	"click [data-stop-journey]"(){
		if(confirm("Are you sure you wanna stop?")){
			UserJourneys.update({_id: Meteor.user().activeJourney()._id}, {$set: {isActive: false}})
			FlowRouter.go("home")
		}
	}
})