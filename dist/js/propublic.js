'use strict';

console.log('I lived through this horror. I can take the next thing that comes along');

var PropublicModule = function () {

	var API_KEY = '3d4emVKIGokBm9UP9x2Nd8LECwP8or7MS6fBCSiB';
	var picture = document.querySelector('.picture');
	var republicanButton = document.querySelector('#republican');
	var democraticButton = document.querySelector('#democratic');
	var nextButton = document.querySelector('#next');

	democraticButton.addEventListener('click', function (e) {
		e.preventDefault();
		checkParty();
		console.log('dem');
		if (true) {
			democraticButton.classlist.add('right');
		} else {
			democraticButton.classlist.add('wrong');
		}
	});

	republicanButton.addEventListener('click', function (e) {
		e.preventDefault();
		checkParty();
		if (true) {
			republicanButton.classlist.add('right');
		} else {
			republicanButton.classlist.add('wrong');
		}
	});

	function checkParty(response) {
		//make a function
	}

	function searchPropublic(options) {

		axios.get('https://api.propublica.org/congress/v1/115/senate/members.json', {
			headers: {
				'X-API-Key': API_KEY
			}
		}).then(function (response) {
			console.log('here is the get response data for key:', response.data, response);

			//run a function here and use the response.members
		});
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

// function displayArticles(articleArray) {
// 	console.log("HeyO");
// 	console.log(articleArray.length);
// 	if (articleArray.length) {
// 		resultsEl.innerHTML = '';
// 		for (var i = 0; i <= articleArray.length - 1; i++) {
// 			var tempArrayElement = articleArray[i];
// 			displayArticle(tempArrayElement);
// 		}
// 		// now add the new results	
// 		console.log("Here I am");
// 		// send it over to google
// 		createMarkers(yelpLatLong);
// 	}
// }

//on page load init function
//# sourceMappingURL=propublic.js.map
