Meteor.methods({
	getRandomDirectivePrompt() {
		let dirArray = DirectiveTypes.find().fetch()
		let randIndex = Math.floor(Math.random() * dirArray.length);
		let randDir = dirArray[randIndex];
		if(Math.random() > .3){
			randDir = DirectiveTypes.findOne({name: "Distance"})
			//randDir.name = "Distance"
		}
		console.log(randDir)
		let directionText = randDir.name;
		if(randDir.name === "Distance"){
			let unitArray = DirectionUnits.find().fetch()
			let randIndexUnit = Math.floor(Math.random() * unitArray.length);
			let randUnit = unitArray[randIndexUnit];
			let verbArray = DirectionVerbs.find().fetch()
			let randIndexVerb = Math.floor(Math.random() * verbArray.length);
			let randVerb = verbArray[randIndexVerb];
			//get random verb // get random unit
			//generate random prime number
			let randNum = Math.floor(Math.random() * 20) + 1;
			directionText = randVerb.text + " " + randNum + " " + randUnit.text;
		}
		return {text: directionText, _id: randDir._id};
	},
	getRandomCapturePrompt() {
		let dirArray = CapturePrompts.find().fetch()
		let randIndex = Math.floor(Math.random() * dirArray.length);
		let randDir = dirArray[randIndex];
		return randDir.text;
	},
	signSafety(){
		console.log("calling")
		if(!this.userId) return;
		Meteor.users.update({_id: this.userId}, {$set: {hasSignedSafety: true}})
	},
	signLiability(){
		if(!this.userId) return;
		Meteor.users.update({_id: this.userId}, {$set: {hasSignedLiability: true}})
	}
})