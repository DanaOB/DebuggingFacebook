var facebookUser = {
	firstName: null,
	lastName: null,
	password: null,
	confirmPassword: null,
	email: null,
};

/*

 The signUpNewMember function runs as soon the user gets to the site.
 It will ask the user questions and store answers in our
 facebookUser object so we can add it to the (fictional) database.

 There are a few bugs in our function.

 Follow the console, 1 bug will lead to the next.


*/

function signUpNewMember(){

    /*

    first we've created a signUp function that gets the users
    information  and stores it in our facebookUser object
	according to the corresponding key. First and foremost
	find where signUp is invoked and uncomment it. Your goal
	is to get the prompts to show up to collect user information.
	If you need a hint find where hintOne is invoked and uncomment it.

    */

	function signUp(){

		for (var key in facebookUser) {
		/*
		we need to check to see if the values assigned
		to our keys are null
		*/
		 if (facebookUser.key === null) {

		 /*
		 if a value is null, ask the user to enter their
		 information with a prompt on line 48
		 */

		 //console.log(hintTwo());
		 	var userInput = prompt("What's your " + facebookUser[key] + '?');

		 /*
		 reassign the key value to the usersInput we just
		 gathered from the user.
		 */

		 	key = userInput;
		 //console.log(facebookUser)

		 /*
		 uncomment line 58 to see the reassignment working.
		 Remember to comment it back when you move on to avoid
		 cluttering the console.

		 Your object should look something like this:
		 	facebookUser = {
				firstName: 'Earth',
				lastName: 'Wind, and Fire',
				password: 'bestOfAllTime',
				confirmPassword: 'bestOfAllTime',
				email: 'septemberIsAClassic@gmail.com'
		 	};
		  */

		 //console.log(hintThree())

		 } else {
		 	//console.log(hintOne())
		 }
		}

		// Working? Uncomment the checkAllFields function on line 180 and
		// get started on the next function

	}

	/*

	Next we need to make sure the user didn't forget to put
	any information in. If they have, we have to have them
	fill out that part of the form.

	*/

    function checkAllFields(){
    	facebookUser['favoriteFood'] = null;
    	/* iterate through the facebookUser object*/
    	for (var key in facebookuser) {
    		// check to see if the assigned value is null
    		if (facebookUser.key === null) {

			/*
			if it is null, prompt the user to fill in the field
			they missed and save the answer as a value in your object.
			*/

    			// console.log(hintFive());
    		key = prompt("You missed an input field " + "what's your " + facebookUser['key'] + '?');

    		} else {

    			//console.log(hintFour());
    		}
    	}

    	// uncomment 119 to see if the field has been filled with
    	// the value your user entered.

    	//console.log(facebookUser);

 		// If you're finished, go ahead an uncomment line 181 and
 		// move on to the last function, confirmInformation.
    }


    /*
		Next we need a function that confirms with the user
		that their information is correct. This way, they can
		double check before they make their profile.

    */

    function confirmInformation(){
    	// userPrompt variable holds the explanation for the prompt
    	var userPrompt = "Check to make sure the following information is correct. " +
    	"If it is, type the word 'yes' into the textbox and press enter.\n"

    	// iterate through the facebookUser object
    	for (var key in facebookUser) {

		/*
		 add our list of key's and values to the userPrompt string
		 so they can see the full list of the information they
		 entered.
		*/
    		userPrmpt += (facebookUser[key].toUpperCase() + ': ' + facebookUser[key] + '\n');
    		console.log(hintSix());
    	}

    	// save the users answer in a variable

    	var userAnswer = prompt(userPrompt);

    	/*
    	check to see whether the users answer is yes, they've
    	agreed that it's the right information. Let's go ahead
    	and let them sign in.
    	*/

    	if (useranswer === 'yes') {
    		/*
    		if yes, alert the user that they are signed in by using signInPrompt
    		*/

    		// console.log(hintSeven())

    		var userFirstName = facebookUser.firstName;
    		var userLastName = facebookUser.lastName;

    		var signInPrompt = "Hello " + facebookUser.userFirstName + " " + facebookUser['userLastName'] + "you've been signed in!"

    		alert(signinPrompt);
    		//uncomment 174 once your functions all work
    		//window.location.assign('http://media.tumblr.com/tumblr_m3ppveMgu71r4lux2.gif');
    	}

    }

   //signUp();
   //checkAllFields();
   //confirmInformation();

    return facebookUser;
}

signUpNewMember();































function hintOne(){
	return "Put a console.log into your if statement (line 89) to see if it's running. If its not, what's wrong with our if statement?"
}

function hintTwo(){
	return "Do we want our prompt printing null? If not, how can we make our prompt look like this 'What is your firstName?'"
}

function hintThree(){
	return "Look at your object in the console, shouldn't the 'null' values be replaced with the users input?"
}

function hintFour(){
	return "What's the difference between '=' and '==='";
}

function hintFive(){
	return "Is our prompt asking the user for the right information?"
}

function hintSix(){
	return "Are your fields quite right? Double check and make sure everything makes sense!"
}
function hintSeven(){
	return "Always strive to write more human-sounding code. How do we access a key using a variable?"
}
