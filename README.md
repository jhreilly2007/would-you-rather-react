# Would you Rather...

# Summary
This my submission for Project 2, Would you rather, as part of the Udacity React nanodegree.


## Run the project
To run this project, clone the repository from GitHub:

### Steps: 
1. $ git clone https://github.com/jhreilly2007/would-you-rather-react.git

2. to install project dependencies: ``npm install --no-audit`` SEE: https://github.com/facebook/create-react-app/issues/11174

3. Start the server: ``npm start``


## My approach
I broke the UI down visually into parts: login, Questions, LeaderBoard, AddNewQuestion, Question details, Results.

Top Level
- (1)App.js is the top level, state is managed by redux.
  - On login, Get initital users/questions data action is dispatched handleInitialData() 
  - determines Private/public Routing

Login
- PrivateRoute: Once a user logs in, setAuthUser(id) action is dispatched. All private routes are now made available to loggedIn user

![image](https://user-images.githubusercontent.com/45285387/174064818-cde7a3b7-31eb-43e3-a60f-09381efb6293.png)


Home/Questions
- Displays a list of unanswered/answered questions to the logged in user. Questions are orderd by date desc.
- Username is displayed, and navigation routes to 
	- Questions(Home), 
	- LeaderBoard
	- Add New Question
	
![image](https://user-images.githubusercontent.com/45285387/174065019-b10c868f-6980-41b9-a6f8-7d51f18e852a.png)


Questions/:question_id
- User can select any unanswered question from HomePage and navigate to details of that poll. 
	- If Unanswered
		- User can select option 1 or option 2 to answer
		- User is redirected back to HomePage where question is at the top of the unanswered Question list
	- If answered
		- The option selected by the user is presented
		- The number of people who voted for which option
		- percent of users who voted
Answered: ![image](https://user-images.githubusercontent.com/45285387/174065198-c77ea000-2323-41d7-aef0-14222e069dcf.png)

Unanwered: ![image](https://user-images.githubusercontent.com/45285387/174065306-9b95207a-0f1b-4462-8af3-f1343e76c658.png)

LeaderBoard
- available at /leaderboard
- Displays users in order of highest scoring
	- users name
	- avatar
	- no. of Questions asked
	- no. of Questions answered
	- ordered in dec by total asked and answer combined
	
![image](https://user-images.githubusercontent.com/45285387/174065449-93473bf3-6ab8-49e6-8796-1d7e81181aaf.png)


Add Question
- available at /add
	- displays 'Would you rather...'
	- gives user form to enter 2 options
	- votes work correctly
	- new question appears at the top of unanswered list

The app intereact with the _DATA.js backend correctly and uses Redux to manage state.

![image](https://user-images.githubusercontent.com/45285387/174065591-f40dd4d7-738c-444d-8050-d320e3af2f16.png)

Appears at top of Unanswered Questions
![image](https://user-images.githubusercontent.com/45285387/174065758-568b71b8-58f9-4105-ae23-3e9e5172dcea.png)


### All specifications as detailed in the Udacity project specifications have been met









# Would You Rather Project

This is the starter code for the final assessment project for Udacity's React & Redux course.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).

## BootStrap Navgation 
