Template.galleryView.onCreated(function(){
	this.currentNav = new ReactiveVar("captures"); //journeys//history
})

Template.galleryView.events({
	"click [data-search-captures]"(){
		Template.instance().currentNav.set("captures")
	},
	"click [data-search-journeys]"(){
		Template.instance().currentNav.set("journeys")
	},
	"click [data-my-history]"(){
		Template.instance().currentNav.set("history")
	}
})

Template.galleryView.helpers({
	userJourneys(){
		return UserJourneys.find({});
	},
	currentNav(){
		return Template.instance().currentNav.get();
	},
	userJourneysIndex(){
		return UserJourneysIndex;
	},
	userCapturesIndex(){
		return UserCapturesIndex;
	},
	capture(){
		return UserCaptures.findOne({_id: this._id})
	},
	journey(){
		return UserJourneys.findOne({_id: this._id})
	},
	isActive(section) {
		return (section === Template.instance().currentNav.get() ? "active-red":"")
	},
	capturesAttr(){
		return {placeholder: "Search captures by tag"}
	},
	journeysAttr(){
		return {placeholder: "Search journeys by name"}
	}
})

Template.galleryView.onRendered(function(){
	
})