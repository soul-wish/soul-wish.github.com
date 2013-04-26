(function () {
	var seconds = 0,
		minutes = 0,
		time = '';
	function Timer () {
		seconds++;
		if (seconds == 60) {
			minutes++;
			seconds = 0;
			var canvas = document.createElement('canvas');
		    canvas.width = 16;canvas.height = 16;
		    var ctx = canvas.getContext('2d');
		    var img = new Image();
		    img.src = 'favicon.ico';
		    img.onload = function() {
		    	console.log(minutes);
		        ctx.drawImage(img, 0, 0);
		        ctx.fillStyle = "#F00";
		        ctx.fillRect(10, 7, 6, 8);
		        ctx.fillStyle = '#FFFFFF';
		        ctx.font = 'bold 10px sans-serif';
		        ctx.fillText(minutes, 10, 14);

		        var link = document.createElement('link');
		        link.class = 'favicon';
		        link.type = 'image/x-icon';
		        link.rel = 'shortcut icon';
		        link.href = canvas.toDataURL("image/x-icon");
		        $('.favicon').remove();
		        document.getElementsByTagName('head')[0].appendChild(link);
		    }
		}
		time = minutes + ':' + seconds;

		

		$('title').text(time);
	}
	setInterval( function() { Timer() }, 200 );
})();