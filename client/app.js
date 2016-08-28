App = {}

App.getRandomDirective = function(){
	let dirArray = DirectiveTypes.find().fetch()
	let randIndex = Math.floor(Math.random() * dirArray.length);
	let randDir = dirArray[randIndex];
	if(randDir.name === "distance"){
		let unitArray = DirectiveTypes.find().fetch()
		let randIndexUnit = Math.floor(Math.random() * dirArray.length);
		let randUnit = dirArray[randIndex];
		let verbArray = DirectiveTypes.find().fetch()
		let randIndexVerb = Math.floor(Math.random() * dirArray.length);
		let randVerb = dirArray[randIndex];
		//get random verb // get random unit
	}
	else {
		return randDir.name;
	}
}

App.getRandomCapturePrompt = function(){

}