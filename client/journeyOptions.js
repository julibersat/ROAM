AutoForm.hooks({
	newJourney: {
		onSuccess(type, doc){
			console.log(type, doc)
			FlowRouter.go("directivePrompt", {journeyId: doc})
		}
	}
})