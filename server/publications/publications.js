Meteor.publish('things', function(options) {
  return Things.find({}, options);
});