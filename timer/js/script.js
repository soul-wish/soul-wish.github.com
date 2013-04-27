(function () {
	var seconds = 0,
		minutes = 0,
		timer = '',
		left = 2,
		time = $('time'),
		title = $('title');
	function Timer () {
		seconds++;
		if (seconds == 60) {
			minutes++;
			seconds = 0;
			if (minutes >= 0 && minutes < 10) {
				left = 6;
			}
			else if (minutes > 9 && minutes < 100) {
				left = 4;
			} else {
				left = 2;
			}
			var canvas = document.createElement('canvas');
		    canvas.width = 16;canvas.height = 16;
		    var ctx = canvas.getContext('2d');
		    var img = new Image();
		    img.src = 'favicon.ico';
		    img.onload = function() {
		    	console.log(minutes);
		        ctx.drawImage(img, 0, 0);
		        ctx.fillStyle = '#FFFFFF';
		        ctx.font = 'bold 8px sans-serif';
		        ctx.fillText(minutes, left, 11);

		        var link = document.createElement('link');
		        link.id = 'favicon';
		        link.type = 'image/x-icon';
		        link.rel = 'shortcut icon';
		        link.href = canvas.toDataURL("image/x-icon");
		        var icon = document.getElementById('favicon');
		        icon.parentNode.removeChild(icon);
		        document.getElementsByTagName('head')[0].appendChild(link);
		    }
		}
		timer = minutes + ':' + seconds;
		title.text(timer);
		time.text(timer);
	}
	setInterval( function() { Timer() }, 1000 );
})();