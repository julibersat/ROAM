Template.mainLayout.events({
	"click [data-logout]"() {
		Meteor.logout();
	}
})
