# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

I love scary movies so I am creating a hangman game with a horror movie theme. I want to hopefully create categories, maybe by decade or movie versus tv. If I am able to implement user category choice, functionality for this will be included on the landing page. 

* The program will begin with a landing page that features a title, a sketch of a full drawn hangman or maybe some interactive media if I have time, and brief insturctions on how the game will work and a button to begin the game. 

* Next, the user will be taken to the hang man screen which will display the alphabet in a form of clickable buttons. Might opt to allow user to just enter letters as guesses via letter + enter keyboard method with a box to update correct guesses and incorrect guesses instead. Will try former method first and reasses if too diffuclt. 

Ideas of how to construct hangman sketch:
https://www.codecademy.com/en/courses/javascript-intermediate-tpoPb/1/5

If I can get to work might model clickable alphabet after this pen: 
https://codepen.io/cathydutton/pen/ldazc?editors=1010

Chosen word for any instance of the game will be chosen using Math.random(). Will create a for loop to loop through the chosen word length to create the _ _ _ _ _ _ _ spaces. Will need to decide on how many guesses I want the user to be able to make as I will probably want to make this uniform amongst all categories and instances of the game. The bottom post for the hangman sketch will be present at start of game. 

User should be allowed to freely enter keys and get back updates of how many guesses they have left inclduing storing incorrect guesses in a "incorrect guess bank" and correct guess in the appropriate _ _ _ _ slot. If all guesses are run out and the hangman drawing is compelete, the game should end, identify the user as a loser, and provide an option to play again. Need to think deeply on if I want the restart of game to return to the initial landing page or provide a prompt of some sort to allow user to choose a cateogry and start the game immediately and bypass the landing page. Same logic goes for if the user wins the game. 

Very difficult deciding which features I might be able to implement and which might be too hard especially if peices of code are contigent upon one another and I discover too late down the road a certain step is too difficult :( 


## Wireframes

Include images of your wireframes.


## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

In order of importance:
1. Getting the hangman to form one body part at a time with each incorrect guess
2. Getting the play game button to take you to the game
3. Getting the click on the alphabet button to correspond to a incorrect guess getting tallied to an "incorrect guess bank" plus a hangman body part addition and vice versa if the letter guess is correct
4. Getting the game to acknowledge an end begin again
5. Add hint on second to last guess in the form of a brief flash of an image - won't stay there for long and will let user know it'll be quick so they should pay attention.
5. Add some hover animations for alphabet buttons
6. Add landing page animations


## Game Components

### Landing Page
What will a player see when they start your game?

* A landing page with a title of the game, an image sketch of a completed hangman (might animate this if I have time on document load), brief instructions on the nature of the game and insturctions, and a button to begin the game. 

### Game Initialization
What will a player see when the game is started? 

* A starting hangman bottom post. An alphabet in the form of clickable buttons and or a box with a to be decided number of _ _ _ _ spaces for possible letter guesses. There will also be information on how many guesses are left. 

### Playing The Game
What will be the flow of the game, what will the user be expeted to do and what will the user expect from the game.

* The user will be expected to click on letters or enter letter key guesses to guess the word before they run out of guesses and the hangman is complete. They will have to answer questions related to famous horror movies across different decades or related to famous spooky folklore. 


### Winning The Game
What does it look like when the game ends, what determines winning or losing?

* Losing means the hangman is complete and has run out of letter guesses. Winning means the user guessed the word before the available guesses have run out. Both outcomes allow the user to choose from different categories to play again. 

### Game Reset
How will the user restart the game once it has been completed.

I will either provide a button to play again for either scenario - winning or losing that will redirect the user to the orginal landing page or I will provide an array of buttons with different categories to begin the game again immediately with a new word to guess from the chosen category and bypass the original landing screen altogether. I need to think about this a little more though. 

## MVP 

Include the full list of features that will be part of your MVP 

Landing page with all aforementioned details - button to start the game - ability to enter letter keys to guess - a feature to allow the user to see the correct and incorrect letter guesses thus far - a hangman that springs body parts with each incorrect letter guess - a notification to the user if they have lost the game and run out of guesses and a notification if they have won and the ability to play again

<!-- 

Model - array of alphabet in the form of clickable buttons 
        counter of letter guesses left 
        button to start the game again 
View - variables to store the letter guesses
       functions to compare the input from the user (letter guesses) to the letters in the chosen word  -->


## POST MVP

Include the full list of features that you are considering for POST MVP

Hints when user is almost out of guesses


## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Constructing hangman with HTML/CSS | 1 | 1hrs| ?hrs | ?hrs |
| Getting button to direct you to game | 1 | 1hrs| ?hrs | ?hrs |
| | 1 | 1hrs| ?hrs | ?hrs |
| Total |  | 10hrs| 12hrs | 12hrs |

<!-- ## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
 -->
