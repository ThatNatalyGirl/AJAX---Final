'use strict';

console.log('I lived through this horror. I can take the next thing that comes along');

var PropublicModule = function () {

	var API_KEY = '3d4emVKIGokBm9UP9x2Nd8LECwP8or7MS6fBCSiB';
	var picture = document.querySelector('.picture');
	var republicanButton = document.querySelector('#republican');
	var democraticButton = document.querySelector('#democratic');
	var nextButton = document.querySelector('#next');

	//create the arrays
	var twitterArray = [];
	var partyArray = [];

	function searchPropublic() {
		axios.get('https://api.propublica.org/congress/v1/115/senate/members.json', {
			headers: {
				'X-API-Key': API_KEY
			}
		}).then(function (response) {

			var membersArray = response.data.results[0].members;
			// console.log(response.data.results[0].members)

			for (var i = 0; i < membersArray.length; i++) {
				twitterArray.push(membersArray[i].twitter_account);
				partyArray.push(membersArray[i].party);
			}
		});
	}
	searchPropublic();
	console.log('check twitter', twitterArray);
	console.log('check party', partyArray);

	//not working
	function getRandomMember(arr) {
		var randomItem = arr[Math.floor(Math.random() * arr.length)];
		console.log('rando', randomItem);
		return randomItem;
	}

	getRandomMember(twitterArray);

	function checkCurrentParty(response) {
		//make a function
		//getRandomMember(twitterArray);
		//somehow pull same partyArray[] as twitterArray's random[]

	}

	var congressImg = [];

	//displayArticle(curbus)
	function displayImg(currentImg) {
		console.log("check this", currentBusiness);
	};

	var init = function init() {
		console.log('init()');
	};

	return {
		search: searchPropublic,
		init: init
	};
}();

PropublicModule.init();
//# sourceMappingURL=propublic.js.map
