

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
  text: "Take a picture of something red."
},
{
  ext: "Take a picture of an animal.”
},
{
  text: "Take a picture of  something that directs traffic.”
},
{
  text: "Take a picture of a mode of transportation.”
},
{
  text: "Take a picture of a vehicle.”
},
{
  text: "Take a picture of a living thing.”
},
{
  text: "Take a picture of the sky.”
},
{
  text: "Take a picture of a bus stop.”
},
{
  text: "Take a picture of a seat.”
},
{
  text: "Take a picture of a crack in the sidewalk.”
},
{
  text: "Take a picture of a wheel.”
},
{
  text: "Take a picture of a traffic.”
},
{
  text: "Take a picture of road sign.”
},
{
  text: "Take a picture of a crosswalk.”
},
{
  text: "Take a picture of a pedestrian.”
},
{
  text: "Take a picture of a sewer.”
},
{
  text: "Take a picture of a drain.”
},
{
  text: "Take a picture of a bench.”
},
{
  text: "Take a picture of stairs.” },
  {
  text: "Take a picture of a window.”
},
{
  text: "Take a picture of yourself in a reflection.”
},
{
  text: "Take a picture of a border.”
},
{
  text: "Take a picture of a boundary.”
},
{
  text: "Take a picture of a restricted area.”
},
{
  text: "Take a picture of a corner.”
},
{
  text: "Take a picture of waste.”
},
{
  text: "Take a picture of garbage.”
},
{
  text: "Take a picture of a car.”
},
{
  text: "Take a picture of a bicycle.”
},
{
  text: "Take a picture of a brick wall.”
},
{
  text: "Take a picture of concrete.”
},
{
  text: "Take a picture of asphalt.”
},
{
  text: "Take a picture of dirt.”
},
{
  text: "Take a picture of a plant.”
},
{
  text: "Take a picture of a bird.”
},
{
  text: "Take a picture of the sun.”
},
{
  text: "Take a picture of a cloud.”
},
{
  text: "Take a picture of a leaf.”
},
{
  text: "Take a picture of a store.”
},
{
  text: "Take a picture of an advertisement.”
},
{
  text: "Take a picture of a gift.”
},
{
  text: "Take a picture of a stranger.”
},
{
  text: "Take a picture of a threat.”
},
{
  text: "Take a picture of an authority.”
},
{
  text: "Take a picture of a home.”
},
{
  text: "Take a picture of something red.”
},
{
  text: "Take a picture of something blue.”
},
{
  text: "Take a picture of something yellow.”
},
{
  text: "Take a picture of something green.”
},
{
  text: "Take a picture of something black.”
},
{
  text: "Take a picture of something white.”
},
{
  text: "Take a picture of something pink.”
},
{
  text: "Take a picture of something orange.”
},
{
  text: "Take a picture of something purple.”
},
{
  text: "Take a picture of something teal.”
},
{
  text: "Take a picture of something blank.”
},
{
  text: "Take a picture of something for sale.”
},
{
  text: "Take a picture of something free.”
},
{
  text: "Take a picture of something moving.”
},
{
  text: "Take a picture of something discarded.”
},
{
  text: "Take a picture of something lost.”
},
{
  text: "Take a picture of something precious.”
},
{
  text: "Take a picture of something beautiful.”
},
{
  text: "Take a picture of something savage.”
},
{
  text: "Take a picture of something heavy.”
},
{
  text: "Take a picture of something moving.”
},
{
  text: "Take a picture of something empty.”
},
{
  text: "Take a picture of something full.”
},
{
  text: "Take a picture of something long.”
},
{
  text: "Take a picture of something large.”
},
{
  text: "Take a picture of something lightweight.”
},
{
  text: "Take a picture of something very closeup.”
},
{
  text: "Take a picture of something far away.”
},
{
  text: "Take a picture of something that directs traffic.”
},
{
  text: "Take a picture of something next to you.”
},
{
  text: "Take a picture of something flowing.”
},
{
  text: "Take a picture of something important.”
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
