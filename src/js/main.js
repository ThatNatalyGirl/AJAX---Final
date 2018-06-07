console.log(`Hey There`)

var picture = document.querySelector('.picture');
var republicanButton = document.querySelector('.republican');
var democraticButton = document.querySelector('.democratic');
var nextButton = document.querySelector('#next');
var rightPic = document.querySelector('.result-right');
var wrongPic = document.querySelector('.result-wrong');


nextButton.addEventListener('click', function (e) {
	e.preventDefault();
	democraticButton.classList.remove('right');
	republicanButton.classList.remove('right');
	democraticButton.classList.remove('wrong');
	republicanButton.classList.remove('wrong');
	rightPic.style.display = 'none';
	wrongPic.style.display = 'none';

	PropublicModule.search(function(members) {
		console.log("members!", members);
		var randomMember = getRandomMember(members);
		// Give a random image to twitter to get the image 
		TwitterModule.lookUpUser(randomMember, (function(twitterImg) {
			var sm = '_normal';
			var img = twitterImg;
			var lrgString = img.replace(sm, '');
			//change the normal image to the original large size
			picture.innerHTML = '<img src=' + lrgString + '>';
		}));		
	})
});

//getting a random member
function getRandomMember(arr) {
	var randomMember = arr[Math.floor(Math.random()*arr.length)];
	var randomMembersTwitter = randomMember.twitter_account;
	var randomMembersParty = randomMember.party;
	console.log('rando', randomMembersTwitter + '' + randomMembersParty);

	//set up two variables for the buttons
	democraticButton.addEventListener('click', function (e) {
		democraticButton.classList.remove('right');
		republicanButton.classList.remove('right');
		democraticButton.classList.remove('wrong');
		republicanButton.classList.remove('wrong');
		rightPic.style.display = 'none';
		wrongPic.style.display = 'none';
		e.preventDefault();
		if (randomMembersParty === "D") {
			democraticButton.classList.add('right');
			rightPic.style.display = 'block';
			console.log('Dem right')
		} else {
			democraticButton.classList.add('wrong');
			wrongPic.style.display = 'block';
			console.log('Dem wrong')
		}
	});

	republicanButton.addEventListener('click', function (e) {
		democraticButton.classList.remove('right');
		republicanButton.classList.remove('right');
		democraticButton.classList.remove('wrong');
		republicanButton.classList.remove('wrong');
		rightPic.style.display = 'none';
		wrongPic.style.display = 'none';
		e.preventDefault();
		if (randomMembersParty === "R") {
			republicanButton.classList.add('right');
			rightPic.style.display = 'block';
			console.log('Rep right')
		} else {
			republicanButton.classList.add('wrong');
			wrongPic.style.display = 'block';
			console.log('Rep wrong')
		}

	});

	return randomMembersTwitter;
}










