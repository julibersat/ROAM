Meteor.users.helpers({
	userJourneys() {
		return UserJourneys.find({userId: this._id})
	},
	activeJourney() {
		return UserJourneys.findOne({userId: this._id, isActive: true});
	}
})