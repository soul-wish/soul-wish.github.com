(function() {
	var speakBtn = document.querySelector('.js-speak'),
		speakText = document.querySelector('.js-text'),
		text;

	speakBtn.addEventListener('click', function(e) {
		e.preventDefault();
		if (speakText.value) {
			text = new SpeechSynthesisUtterance(speakText.value);
			speechSynthesis.speak(text);
		} else {
			text = new SpeechSynthesisUtterance("Hey! Can you type some text in the field?");
			speechSynthesis.speak(text);
		}
	});
})();