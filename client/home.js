Template.homeView.events({
	"click [data-start-game]"(){
		Session.set("startNewGame", true);
	}
})