'use strict';

console.log('Twits away');

var TwitterModule = function (options) {
	var shared = {};

	shared.lookUpUser = function (twitterHandle, callback) {

		var url = 'twitter-proxy.php?op=user_profile&screen_name=' + twitterHandle;
		axios.get(url, {}).then(function (response) {
			var membersImg = response.data.profile_image_url;
			console.log(membersImg);
			//make the picture appear

			callback(membersImg);
		});
	};

	return shared;
}();

//GET https://api.twitter.com/1.1/users/profile_banner.json?screen_name=twitterapi
//# sourceMappingURL=twitter.js.map
