!(function() {
	window.setTimeout(function() {
		var sel = 'head > link, head > script, body > div:first-child, div[onclick][style], .addthis_toolbox'
		,	remove = document.querySelectorAll(sel);

		for (var i = 0; i < remove.length; i++) {
			remove[i].parentNode.removeChild(remove[i]);
		};

	}, 500);
}());