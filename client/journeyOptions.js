AutoForm.hooks({
	newJourney: {
		onSuccess(type, doc){
			FlowRouter.go("directivePrompt")
		}
	}
})