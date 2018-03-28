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

I love scary movies and all things related to horrow so I am creating a trivia game based on horror movies & scary folklore. 

* The program will begin with a landing page that features a title, a sketch of a full drawn TBD monster or maybe some interactive media if I have time, and brief insturctions on how the game will work and a button to begin the game. 

* Next, the user will be taken to a screen which will display a question and multiple choice answers. There will be a timer that count downs for the user to see in real time. If the counter runs out, an X will appear in a flash, then the monsters head will appear and finally the user will be presented with the next question.  

Chosen question for any instance of the game will be chosen using Math.random().  

User can only make one guess. 


## Wireframes

Include images of your wireframes.


## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

In order of importance:
1. Getting the game to start from the landing screen
2. Getting the multiple choice buttons to register correct or incorrect on click
3. Getting the game to proceed to the next question after the counter has run out 
4. Getting the game to end and show an option to replay.
5. Getting the game to show an X or a check mark if the answer is wrong or right 
6. Getting the monster to grow incrementally with each incorrect answer
7. Getting the current state of the monster's body to display to the screen after each incorrect answer and a completed monster if the monster gets completed before all the questions are asked. 



## Game Components

### Landing Page
What will a player see when they start your game?

* A landing page with a title of the game, an image sketch of the completed monster (might animate this if I have time on document load), brief instructions on the nature of the game and a button to begin.

### Game Initialization
What will a player see when the game is started? 

* A question at the top and buttons containing multiple choice answers. 

### Playing The Game
What will be the flow of the game, what will the user be expeted to do and what will the user expect from the game.

* The user will be expected to click on buttons to answer questions within the designated time. There will be a visual countdown for the user to see how much time they have left. The only action the user will have to take is to click on the buttons. 


### Winning The Game
What does it look like when the game ends, what determines winning or losing?

* Losing will show a completed monster at the end with a message notifying the user they lost with an option to play again. Winning means the user completed the quiz before the monster completely generates. The winner will get a message knowing they won and option to play again.  

### Game Reset
How will the user restart the game once it has been completed.

I will either provide a button to play again for either scenario - winning or losing that will redirect the user to the orginal landing page.

## MVP 

Include the full list of features that will be part of your MVP 

Landing page with all aforementioned details - button to start the game - play game button starts the game and shows a question to the user on the page with buttons with answers. If all else fails, a next button will be provided if the user to manually proceed to the next question. Also a static monster that grows incrementally with each incorrect guess. An end game message with option to replay and a win game message with option to replay. 
## POST MVP

Include the full list of features that you are considering for POST MVP

A visual counter. A function to flash a big red X if the counter has run out and the user hasn't selected an answer or if the answer selected within the timeframe is wrong. The monster to flash after the X, not just grow statically on the page. 


## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Constructing a monster - might use graphics and not HTML or CSS | 4 | 2hrs| ?hrs | ?hrs |
| Developing trivia game functionality | 1 | 6 hrs| ?hrs | ?hrs |
| Getting wrong answers to generate a new body part on the monster| 5 | 4hrs| ?hrs | ?hrs |
| Functionality to end game | 2 | 3hrs| ?hrs | ?hrs |
| Functionality to replay game | 3 | 3hrs| ?hrs | ?hrs |
| Total |  | 18hrs| 12hrs | 12hrs |

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
