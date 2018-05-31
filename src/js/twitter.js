var TwitterApi = (function(options) {
	var shared = {};
	var options = options || {};

	function setupListeners() {
		console.log('setupListeners()');

		//set up two variables for the buttons
		//
		var url = 'twitter-proxy.php?op=search_tweets&':
		
	}

	var init = function() {
		console.log('init()');
	};
	shared.init = init;

	return shared;
}());

TwitterApi.init();