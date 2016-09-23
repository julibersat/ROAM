Template.mainNav.helpers({
	displayMainNav(){
		if(FlowRouter.getRouteName() !== "roamingGame"){
			return true;
		}
	}
})

Template.mainNav.events({
	"click [data-open-nav]"(){
		Session.set("navOpen", true)
	}
})

Template.mainNav.events({
	"click [data-close-nav]"(){
		Session.set("navOpen", false)
	}
})