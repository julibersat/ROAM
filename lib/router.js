FlowRouter.route("/", {
	name: "home",
	action(){
		BlazeLayout.render("mainLayout", {main: "homeView"})
	}
})