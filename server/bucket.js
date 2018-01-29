Slingshot.createDirective("uploads", Slingshot.S3Storage, {
  bucket: "roam-game-captures",

  acl: "public-read",

  authorize: function () {
    //Deny uploads if user is not logged in.
    if (!this.userId) {
      var message = "Please login before posting files";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },

  key: function (file) {
    //Store file into a directory by the user's username.
    var user = Meteor.users.findOne(this.userId);
    var filename = user._id + "/" + file.name;
    console.log(filename)
    return filename;
  }
});