'use strict';

console.log('Hey There');

var republicanButton = document.querySelector('#republican');
var democraticButton = document.querySelector('#democratic');
var nextButton = document.querySelector('#next');

democraticButton.addEventListener('click', function (e) {
	e.preventDefault();
	console.log('dem');
	// checkCurrentParty();
	// if (true) {
	// 	democraticButton.classlist.add('right');
	// } else {
	// 	democraticButton.classlist.add('wrong');
	// }
});

republicanButton.addEventListener('click', function (e) {
	e.preventDefault();
	console.log('rep');
	// checkCurrentParty();
	// if (true) {
	// 	republicanButton.classlist.add('right');
	// } else {
	// 	republicanButton.classlist.add('wrong');
	// }
});
//# sourceMappingURL=main.js.map
