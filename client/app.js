App = {}

App.getRandomDirectivePrompt = function(){
	let dirArray = DirectiveTypes.find().fetch()
	let randIndex = Math.floor(Math.random() * dirArray.length);
	let randDir = dirArray[randIndex];
	let directionText = randDir.name;
	if(Math.random() > .3){
		randDir.name = "Distance"
	}
	if(randDir.name === "Distance"){
		let unitArray = DirectionUnits.find().fetch()
		let randIndexUnit = Math.floor(Math.random() * unitArray.length);
		let randUnit = unitArray[randIndexUnit];
		let verbArray = DirectionVerbs.find().fetch()
		let randIndexVerb = Math.floor(Math.random() * verbArray.length);
		let randVerb = verbArray[randIndexVerb];
		//get random verb // get random unit
		//generate random prime number
		let randNum = Math.floor(Math.random() * 20);
		directionText = randVerb.text + " " + randNum + " " + randUnit.text;
	}
	return directionText;
}

App.getRandomCapturePrompt = function(){

}