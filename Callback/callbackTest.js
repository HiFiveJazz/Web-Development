function testEventListener(typeOfEvent, callback) {
  var eventThatHappened = {
    eventType: "keypress",
    key: "p",
    durationOfKeyPress: 2
  }
  if (eventThatHappened.eventType === typeOfEvent ) {
    callback(eventThatHappened);
  }

}
testEventListener ("keypress", function(event) {
}
)
