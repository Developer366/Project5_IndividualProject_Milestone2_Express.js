//filename : script.js
console.log("Hello, running script.js")

// Require express library
// require exword is like import a library
var express = require('express');
const PORT = 3000;
const path = require('path');
var app = express();

// Require the module that defines the JSON object
const dataset = require('./json_dataset');
const quiz_data = dataset.quiz_data;
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.set('json spaces', 2);
// Start a server
app.listen(PORT, function() {
	console.log('Example app listening on port 3000!');
});

// HomePage -- TEST ROUTE -- Prints quiz HTML WEBSITE
app.get('/', function(req, res){	
	res.redirect('/api/quiz/list');
	//res.render('')
});


//--------------------Use-Case Routes--------------------------------------------------------------------------------// 

//returns json array with info about tests supported by api.
//returns only the quiz information-> *quiz id, title, and description. NO quiz questions.*
app.get('/api/quiz/list', (req, res) =>{		
	var quiz_info = quiz_data['list'];
	
	for (var i=0; i < quiz_info.length; i++){
		delete quiz_info[i].data;
	}		
	
	res.sendFile(path.join(__dirname, 'Project4_IndividualProject_Quiz', 'index.html'));
	res.json(quiz_info);
	console.log("Inside the api/quiz/list")
});

//returns a single json object with the quiz information whose id equals to :quizid parameter in the route.
//Quiz id must be a field in the json {not index of the quiz in the internal array storing the quizes}
app.get('/api/quiz/:quizid', (req, res) =>{
	//get quiz id from the route's url
	var q_id = req.params['quizid'];
	//filter array and return entries with the quiz id you selected.
	var quiz_with_specific_id = quiz_data["list"].filter(q => q.quizid == q_id);    
	res.json(quiz_with_specific_id)
});

//return single json object with a specific questionID. Answer is not included in this response. 
//Question answer should not be included. Meta field will have next question value.
app.get('/api/quiz/:quizid/:questionid', (req, res) =>{
	//get the url parameters 
	var q_id = req.params['quizid'];	
	var quest_id = req.params['questionid'];
	
	//var question_data = quiz_data['list'][q_id]['data']
	
	//var quiz_with_specific_id = quiz_data["list"].filter(q => (q.quizid == q_id) => (q.questionId == q.ques_id)) ;   
	//var specific_quiz_question = question_data.filter(qu => qu.questionId == ques_id); 
	//res.json(specific_quiz_question)
	
	// This should return an array of a single element (i.e. the quize with the id 1_id) 
	var quiz_with_specific_id = quiz_data["list"].filter(q => q.quizid == q_id); 

	// then you can filter out the question with id  quest_id, using somthing like. 
	var question_with_specific_id = quiz_with_specific_id[0].data.filter(q => q.questionId == quest_id);
	
	//delete question_with_specific_id[0].questiontype;
	//delete question_with_specific_id[0].question;
	//delete question_with_specific_id[0].options;
	delete question_with_specific_id[0].answer;
	delete question_with_specific_id[0].user_answer;
	delete question_with_specific_id[0].correct;
	delete question_with_specific_id[0].explanation;
	delete question_with_specific_id[0].message;
	//delete question_with_specific_id[0].meta;

	
	res.json(question_with_specific_id)
});

//the route checks the answer parameter with the correct answer of the question with id 'questionID'
//depending on true or false returns feedback view 
app.get('/api/check_answer/:quizid/:questionid/:answer', (req, res) =>{
	var q_id = req.params['quizid'];	
	var quest_id = req.params['questionid'];
	var answer = req.params['answer'];
	
	var quiz_with_specific_id = quiz_data["list"].filter(q => q.quizid == q_id); 
	var question_with_specific_id = quiz_with_specific_id[0].data.filter(q => q.questionId == quest_id);
	question_with_specific_id[0].user_answer = answer;  
	
	//console.log(question_with_specific_id[0].explanation)
	console.log(answer)
	console.log(question_with_specific_id[0].answer)
	//if the answer is correct 
	if (question_with_specific_id[0].user_answer == question_with_specific_id[0].answer){
		question_with_specific_id[0].correct = true;
		console.log(question_with_specific_id[0])
		
		delete question_with_specific_id[0].questiontype;
		delete question_with_specific_id[0].question;
		delete question_with_specific_id[0].options;
		delete question_with_specific_id[0].answer;
		delete question_with_specific_id[0].explanation;
		delete question_with_specific_id[0].meta;
		console.log(question_with_specific_id[0])
		res.json(question_with_specific_id[0])
		
		//res.json(question_with_specific_id[0].questionId)
		//res.json(question_with_specific_id[0].user_answer)
		//res.json(question_with_specific_id[0].correct)
		//res.json(question_with_specific_id[0].message)
	}
	
	//if question is wrong 
	else if (question_with_specific_id[0].user_answer != question_with_specific_id[0].answer){
		question_with_specific_id[0].correct = false;
		//console.log(question_with_specific_id[0].explanation)
		
		delete question_with_specific_id[0].questiontype;
		delete question_with_specific_id[0].question;
		delete question_with_specific_id[0].options;
		delete question_with_specific_id[0].answer;
		delete question_with_specific_id[0].message;
		delete question_with_specific_id[0].meta;
		console.log(question_with_specific_id[0])
		res.json(question_with_specific_id[0])
	}
	
	question_with_specific_id = quiz_with_specific_id[0].data.filter(q => q.questionId == quest_id);
	//res.json(question_with_specific_id)
});


app.use((req,res)=> {
	res.status(404)
		.send('Unknown Request');
});

//delete quiz_info[i].data;









/*  Old code

	//var list_info = quiz_info.filter(i => i.Array.isArray(quiz_info) == false);
	//var list_info = quiz_info.filter(i =>i.title=="Java Quiz");
	//res.json(quiz_data.list)


//filter array and return entries with the quiz id you selected.
	
	//var quiz_with_specific_id = quiz_data["list"].filter(q => q.quizid == q_id);
	
	//selected_question_id = quiz_with_specific_id["data"].filter(q =>q.questionId == ques_id);
	
	//selected_question_id = quiz_with_specific_id.filter(q => q.questionId == )
	//var selected_question_id = quiz_data["data"].filter(q =>q.questionId == ques_id);


// Define a TEST route.
app.get('/api/quiz', (req, res) =>{
	//res.send('<h1>Hello World!</h1>');
	var quiz = {
		q1: "What is 1+1",
		a1: 2
	}
	res.json(quiz)
});










*/


