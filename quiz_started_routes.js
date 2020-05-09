//quiz_started_routes.js
//moduel with routes that are used wqhen the quiz has started

// Get an instance of the Router() object
const express = require('express')
const router = express.Router()
// Require the module that defines the JSON object
const dataset = require('./json_dataset');
const quiz_data = dataset.quiz_data;

// Register two routes to the router object instace  

//return single json object with a specific questionID. Answer is not included in this response. 
//Question answer should not be included. Meta field will have next question value.
router.get('/api/quiz/:quizid/:questionid', (req, res) =>{
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
router.get('/api/check_answer/:quizid/:questionid/:answer', (req, res) =>{
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


// To make the routes avaiable we need to export the router object.
// now the router object can be imported by other modules in our applications.
module.exports = router