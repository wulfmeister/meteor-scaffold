if (Things.find().count() === 0) {
  Things.insert({
    title: 'a thing!'
  });
}