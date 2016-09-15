Template.safetyClauseView.events({
	"click [data-sign-safety]"(){
		Meteor.call("signSafety")
	}
})