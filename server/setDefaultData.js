

Meteor.methods({
  "setDefaultData"(){
    DirectionUnits.remove({});
    DirectionVerbs.remove({});
    DirectiveTypes.remove({});
    CapturePrompts.remove({});
    _.each(directionUnits, function(directionUnit) {
      DirectionUnits.insert({text: directionUnit.text})
    });
    _.each(directionVerbs, function(directionVerb) {
      DirectionVerbs.insert({text: directionVerb.name, imageURL: directionVerb.imageURL})
    });
    _.each(directiveTypes, function(directiveType) {
      DirectiveTypes.insert({name: directiveType.name, iconURL: directiveType.imageURL});
    });
    _.each(capturePrompts, function(capturePrompt) {
      CapturePrompts.insert({text: capturePrompt.text});
    })
    console.log("done")
  }
})

var capturePrompts = [{
  text: "capture"
}]

var directionUnits = [{
  text: "minutes"
},
{
  text: "feet"
},
{
  text: "steps"
},
{
  text: "minutes"
},
{
  text: "blocks"
}]

var directionVerbs = [{
  name: "walk",
  imageURL: "/verbs/footsteps.svg"
},
{
  name: "run",
  imageURL: "/verbs/forward-arrow-stripes.svg"
},
{
  name: "jump",
  imageURL: "/verbs/footsteps.svg"
},
{
  name: "skip",
  imageURL: "/verbs/footsteps.svg"
},
{
  name: "go",
  imageURL: "/verbs/flash-forward-arrow.gif"
},
{
  name: "drift",
  imageURL: "/verbs/footstep.svg"
},
{
  name: "glide",
  imageURL: "/verbs/forward-arrow-icon.svg"
},
{
  name: "meander",
  imageURL: "/verbs/footsteps-icon.svg"
}];

var directiveTypes = [{
  name: "u-turn",
  imageURL: "/types/u-turn.png"
},
{
  name: "turn-right",
  imageURL: "/types/turn-right.png"
},
{
  name: "turn-left",
  imageURL: "/types/turn-left.png"
},
{
  name: "frosty-box",
  imageURL: "/types/frosty-box.png"
},
{
  name: "distance",
  imageURL: "/types/turn-left.png"
}
]
