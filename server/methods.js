Meteor.methods({
	getRandomDirectivePrompt() {
		let dirPrompt = {};
		let dirArray = DirectiveTypes.find().fetch()
		let randIndex = Math.floor(Math.random() * dirArray.length);
		let randDir = dirArray[randIndex];
		let unitName, verbName, randNum = Math.floor(Math.random() * 20) + 2;
		let dirName = randDir.name;
		if(Math.random() > .3){
			randDir = DirectiveTypes.findOne({name: "Distance"})
			dirName = "Distance"
		}
		let directionText = randDir.name;
		if(dirName === "Distance"){
			let unitArray = DirectionUnits.find().fetch()
			let randIndexUnit = Math.floor(Math.random() * unitArray.length);
			randUnit = unitArray[randIndexUnit];
			let verbArray = DirectionVerbs.find().fetch()
			let randIndexVerb = Math.floor(Math.random() * verbArray.length);
			randVerb = verbArray[randIndexVerb];
			verbName = randVerb.text;
			unitName = randUnit.text;
		}

		return {unit: unitName, randVerb: verbName, directiveTypeId: randDir._id, randNum: randNum, type: dirName};
	},
	getRandomCapturePrompt() {
		let capArray = CapturePrompts.find().fetch()
		let randIndex = Math.floor(Math.random() * capArray.length);
		let randCap = capArray[randIndex];
		return {capturePromptId: randCap._id, text: randCap.text};
	},
	signSafety(){
		if(!this.userId) return;
		Meteor.users.update({_id: this.userId}, {$set: {hasSignedSafety: true}})
	},
	signLiability(){
		if(!this.userId) return;
		Meteor.users.update({_id: this.userId}, {$set: {hasSignedLiability: true}})
	}
})