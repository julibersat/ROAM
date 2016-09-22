AutoForm.hooks({
	nameJourney: {
		onSuccess(doc){
			FlowRouter.go("gallery")
		}
	}
})