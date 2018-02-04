$(window).load(function() {
	$('video').mediaelementplayer({
		// Do not forget to put a final slash (/)
		pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
		// this will allow the CDN to use Flash without restrictions
		// (by default, this is set as `sameDomain`)
		shimScriptAccess: 'always',
		// more configuration
		features: ['playpaus', 'current', 'progress', 'duration', 'volume', 'fullscreen']
	});

	const video = document.querySelector('#video');
	const span = document.querySelectorAll('#transcript span');
	const transcript = document.querySelector('#transcript');

  // event listener when video time updated
	video.addEventListener('timeupdate', () => {
		for (var i = 0; i < span.length; i++) {
			let currentTime = video.currentTime;
			let startTime = span[i].getAttribute('data-start');
			let endTime = span[i].getAttribute('data-end');
			currentTime
			if(currentTime >= startTime && currentTime <= endTime){
				span[i].className = 'highlight';
			} else {
				span[i].className = '';
			}
	  }
	});

	transcript.addEventListener('click', (e) => {
		if(e.target.tagName == 'SPAN') {
			video.currentTime = e.target.getAttribute('data-start');
		}
	});

});
