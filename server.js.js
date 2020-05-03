//filename : script.js
console.log("Hello, running script.js")

// Require express library
//require exword is like import a library
var express = require('express');

//create an instance of express server.
var app = express();

//Require the module that defines the JSON object
const dataset = require('./json_dataset');
//extract the specific JSON object that stores quiz data
const quiz_data = dataset.quiz_data;
//const question_data = quiz_data['list'][0]['data'];
//console.log(question_data)
//console.log(quiz_data)


//---------------------------------------------------------------------------
// Start a server
app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});

// Define a route.
app.get('/', function(req, res){
	res.send('<h1>Hello World!</h1>');
});



// Define a TEST route.
app.get('/api/quiz', (req, res) =>{
	//res.send('<h1>Hello World!</h1>');
	var quiz = {
		q1: "What is 1+1",
		a1: 2
	}
	res.json(quiz)
});


//--------------------Use-Case Routes--------------------------------------------------------------------------------

//returns json array with info about tests supported by api.
//returns only the quiz information-> *quiz id, title, and description. NO quiz questions.*
app.get('/api/quiz/list', (req, res) =>{		
	var quiz_info = quiz_data['list'];
	
	for (var i=0; i < quiz_info.length; i++){
		delete quiz_info[i].data;
	}		
	
	res.json(quiz_info)
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
	var ques_id = req.params['questionid'];
	
	var question_data = quiz_data['list'][q_id]['data']
	
	//var quiz_with_specific_id = quiz_data["list"].filter(q => (q.quizid == q_id) => (q.questionId == q.ques_id)) ;   
	var specific_quiz_question = question_data.filter(qu => qu.questionId == ques_id); 
	//res.json(specific_quiz_question)
	res.json(specific_quiz_question)
});



/*  Old code

	//var list_info = quiz_info.filter(i => i.Array.isArray(quiz_info) == false);
	//var list_info = quiz_info.filter(i =>i.title=="Java Quiz");
	//res.json(quiz_data.list)


//filter array and return entries with the quiz id you selected.
	
	//var quiz_with_specific_id = quiz_data["list"].filter(q => q.quizid == q_id);
	
	//selected_question_id = quiz_with_specific_id["data"].filter(q =>q.questionId == ques_id);
	
	//selected_question_id = quiz_with_specific_id.filter(q => q.questionId == )
	//var selected_question_id = quiz_data["data"].filter(q =>q.questionId == ques_id);

*/


