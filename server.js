//filename : server.js
console.log("Hello, running script.js")

// Require express library
// require exword is like import a library
var express = require('express');
var PORT = process.env.PORT || 3000;
const path = require('path');
//module quiz_started_routes
var inprogress = require('./quiz_started_routes');


var app = express()
app.use('/inprogress', inprogress);

// Require the module that defines the JSON object
const dataset = require('./json_dataset');
const quiz_data = dataset.quiz_data;

// Set static folder
			//app.use(express.static(path.join(__dirname, 'public')));
app.use('/resource',express.static('static_resources_folder'))

app.set('json spaces', 2);
// Start a server
app.listen(PORT, function() {
	console.log('Example app listening on port 3000!');
});

// HomePage -- TEST ROUTE -- Prints quiz HTML WEBSITE
app.get('/', function(req, res){	
	//res.sendFile(path.join(__dirname, 'Project4_IndividualProject_Quiz', 'index.html'));
	res.send("Welcome to Kamil Peza's website/app on Heroku!");
	//res.redirect('/api/quiz/list');
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


//	inprogress/api/quiz/:quizid/:questionid
//	inprogress/api/check_answer/:quizid/:questionid/:answer


app.use((req,res)=> {
	res.status(404)
		.send('Unknown Request');
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


