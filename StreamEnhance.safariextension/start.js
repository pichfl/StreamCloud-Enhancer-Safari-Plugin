!(function() {
	document.addEventListener('DOMContentLoaded', function() {
		var host = window.location.host.replace(/\./g,'-');
		document.documentElement.classList.add(host);

		var h1 = document.querySelector('#page .content h1')
		,	player = document.getElementById('player_code');

		if (h1 && player) {
			var wrap = document.getElementById('mediaplayer_wrapper')
			,	settings = 'width='+parseInt(wrap.style.width)
					+',height='+(parseInt(wrap.style.height)-55)
					+',top='+100
					+',left='+100
			, 	style = 'html,body{background:#111;color:#ccc;margin:0;'
						+'overflow:hidden;'
						+'padding:0;border:0;font-family: sans-serif;}'
						+'h1{width: 880px;margin:0;padding:10px;'
						+'font-weight:normal;font-size:1em;}'
						+'#mediaplayer_wrapper{margin:0 auto;}'
			,	styleElement = document.createElement('style')
			,	styleText = document.createTextNode(style);

			styleElement.appendChild(styleText);

			player.removeAttribute('style')

			document.body.addEventListener('click', function() {
				var newWindow = window.open('about:blank', 'player', settings)
				,	title = h1.innerText || '';

				newWindow.document.head.appendChild(styleElement);
				newWindow.document.title = title.replace(/dvdrip\s/i,'').replace(/german/i,'').replace(/xvid-sof/i,'').replace(/\sws\s/i,'');
				newWindow.document.body.appendChild(player);
				window.close();
			}, false);
		}

		// Remove Elements
		var sel = 'meta,  #the_lights, body > script, head > script, #javawarning, head > div, div.button-standout, .addthis_toolbox'
		,	remove = document.querySelectorAll(sel);

		for (var i = 0; i < remove.length; i++) {
			remove[i].parentNode.removeChild(remove[i]);
		};

		var divs = document.getElementsByTagName('div');
		for (var i = 0; i < divs.length; i++) {
			var div = divs[i];
			if (div.id == div.getAttribute('name') && !!div.onclick) {
				div.parentNode.removeChild(div);
			}
		}

	}, false);
}());