FlowRouter.route("/", {
	name: "home",
	action(){
		BlazeLayout.render("mainLayout", {main: "homeView"})
	}
})

FlowRouter.route("/safety-claus",{
	name: "safetyClaus",
	action(){
		BlazeLayout.render("mainLayout", {main: "safetyClausView"})
	}
})

FlowRouter.route("/liability-agreement",{
	name: "liabilityAgreement",
	action(){
		BlazeLayout.render("mainLayout", {main: "liabilityAgreementView"})
	}
})

FlowRouter.route("/journey-options",{
		name: "journeyOptions",
	action(){
		BlazeLayout.render("mainLayout", {main: "journeyOptionsView"})
	}
})

FlowRouter.route("/direction-prompt",{
		name: "directionPrompt",
	action(){
		BlazeLayout.render("mainLayout", {main: "directionPromptView"})
	}
})

FlowRouter.route("/capture-prompt",{
		name: "capturePrompt",
	action(){
		BlazeLayout.render("mainLayout", {main: "capturePromptView"})
	}
})

FlowRouter.route("/journey-end",{
		name: "journeyEnd",
	action(){
		BlazeLayout.render("mainLayout", {main: "journeyEndView"})
	}
})

FlowRouter.route("/journey-list",{
		name: "journeyList",
	action(){
		BlazeLayout.render("mainLayout", {main: "journeyLisView"})
	}
})

FlowRouter.rout("/journey-map",{
		name: "journeyMap",
	action(){
		BlazeLayout.render("mainLayout", {main: "journeyMapView"})
	}
})