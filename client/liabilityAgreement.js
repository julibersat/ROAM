Template.liabilityAgreementView.events({
	"click [data-sign-liability]"(){
		Meteor.call('signLiability')
	}
})