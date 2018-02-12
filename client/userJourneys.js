Template.userHistory.onCreated(function(){
  this.autorun(() => {
    this.subscribe("userJourneys");
  });
});