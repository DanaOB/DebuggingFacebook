# Debugging Facebook

Imagine you're a contracted engineer brought on by Facebook to fix some of their internal bugs.The programmer before you made a lot of mistakes and its your job to use your new knowledge to clean up the mess.

Even though they weren't a very good programmer, they were VERY thorough about leaving comments. Read the comments to get tips about the bugs as well as insights into new information about JavaScript.

This section focuses on Objects. The code is running with pretty limited functionality. Throughout the day we'll fix bugs, which will unlock more robust functionality so that you can see how your fundamentals will be used in the wild.

### Tips
1. Each function depends on the one before it.
Don't uncomment the next function until you've fixed the
previous one.

2. This is a bug treasure hunt. Some mistakes are obvious, 
others are not -- attention to detail is key.

3. The console is your friend and will *usually* lead you in the
right direction to the next bug.

4. If you don't recognize something look it up. The internet
is every programmer's best friend - make sure you utilize it and expand
your programming knowlege. Full time engineers use Google and
StackOverflow constantly- this is a part of your required learning.
5. Have fun, if you're stuck for too long it becomes tedious.
Don't feel bad for using the hints, these are tough exercises!

## Requirements
**These functions and methods are riddled with bugs. Study each line of code carefully, and assess whether or not it does what you need for your functions to work properly.**

### facebookUser
Each part of this object will be filled out by the user using prompts. If you're unfamiliar with prompts heres a good article: http://bit.ly/1CzM0Oe. You **do not** need to change anything from this block of code.

### signUpNewMember
**Note:** If you need a hint, find where a hint is invoked (e.g. `hintOne()`, `hintTwo()`, etc.) and uncomment it.

### signUp
Checks a new facebookUser, and prompts the user to fill in each property with `null` values.
* [ ] find where signUp is invoked and uncomment it.
* [ ] get signUp to function properly.

### checkAllFields
Checks facebookUser for properties that still have `null` value(s) after signUp. In the event that there are any, it prompts the user to fill in those properties.
* [ ] find where checkAllFiends is invoked and uncomment it.
* [ ] get checkAllFields to function properly.

###  confirmInformation
After signUp and checkAllFields, lists the information for the user on a pop-up box, and prompts for confirmation.
* [ ] find where confirmInformation is invoked and uncomment it.
* [ ] get confirmInformation to function properly.
