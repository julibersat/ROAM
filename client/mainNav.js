Template.mainNav.helpers({
	displayMainNav(){
		if(FlowRouter.getRouteName() !== "directivePrompt"){
			return true;
		}
	}
})