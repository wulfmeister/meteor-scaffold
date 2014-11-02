Template.home.helpers({
  things: function () {
    return Things.find({});
  }
});

Deps.autorun(function () {
  Meteor.subscribe("things")
});