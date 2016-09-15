Meteor.users.helpers({
	userJourneys() {
		return UserJourneys.find({userId: this._id})
	},
	hasActiveJourney() {
		return false;
	}
})