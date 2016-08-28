Template.homeView.helpers({
	randomPrompts(){
		let dirArray = [];
		for(let i=0;i<20;i++) {
			dirArray.push(App.getRandomDirective());
		}
		return dirArray;
	}
})