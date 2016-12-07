/* speach.js */

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


recognition.onresult = function(event) {

  var last = event.results.length - 1;
  var answr = event.results[last][0].transcript;
  
  CalcAnswr(answr);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  popupmsg("I didn't recognise that.");
  //alert("I didn't recognise that.");
}

recognition.onerror = function(event) {
   popupmsg('Error occurred in recognition: ' + event.error);
  //alert('Error occurred in recognition: ' + event.error);
}