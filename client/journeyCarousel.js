Template.journeyCarousel.onCreated(function() {
  this.autorun(() => {
    this.subscribe("userCaptures", this.data.__originalId);
  });
});

Template.journeyCarousel.helpers({
  userCaptures() {
    return UserCaptures.find({userJourneyId: Template.instance().data.__originalId})
  }
})