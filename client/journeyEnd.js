Template.journeyEndView.helpers({
	journey(){
		return UserJourneys.findOne({_id: FlowRouter.getParam("journeyId")});
	}
})

AutoForm.hooks({
	nameJourney: {
		onSuccess(doc){
			FlowRouter.go("journeyList")
		}
	}
})