Meteor.methods({
	"nameJourney"(doc, docId){
		doc.$set.isActive = false;
		UserJourneys.update({_id: docId}, doc)
	}
})