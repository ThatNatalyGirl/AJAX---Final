console.log(`live`)

var PropublicModule = (function () {

	var API_KEY = '3d4emVKIGokBm9UP9x2Nd8LECwP8or7MS6fBCSiB'

	//create the arrays
	var twitterArray = [];
	var partyArray = []

	function searchPropublic(callback) {
		axios.get('https://api.propublica.org/congress/v1/115/senate/members.json', {
			headers: {
				'X-API-Key': API_KEY
			}
		}).then(function (response) {

			var membersArray = response.data.results[0].members
			// console.log(response.data.results[0].members)

			for (var i = 0; i < membersArray.length; i++) {
				twitterArray.push(membersArray[i].twitter_account);
				partyArray.push(membersArray[i].party);
			}

			callback(membersArray)

		});
	}	
	// searchPropublic();	
	// console.log('check twitter', twitterArray);
	// console.log('check party', partyArray);


	// getRandomMember(twitterArray);

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

	
	return {
		search: searchPropublic
	}

}());



