Template.mainNav.helpers({
	displayMainNav(){
		if(FlowRouter.getRouteName() !== "roamingGame"){
			return true;
		}
	}
})