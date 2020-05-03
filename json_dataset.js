//filename : json_dataset.js

const quiz_data = {		
	list : [
		{
			"quizid" : "1",
			"title" : "Java Quiz",
			"description" : "Quiz with 20 questions on java structure and code",
			data : [
			{
				"questionId": 1,
				"questiontype": "MC",
				"question": "What is the numerical range of a char data type in Java?",
				"options": [ "-128 to 127", "0 to 256", "0 to 32767", "0 to 65535" ],
				"answer": "0 to 65535",
				"explanation": " Char occupies 16-bit in memory, so it supports 2^16 i:e from 0 to 65535.",
				"message": "Nice Job!"
			},
			{
				"questionId": 2,
				"questiontype": "MC",
				"question": "Which of these coding types is used for data types of characters in Java?",
				"options": ["ASCII", "ISO-LATIN-1", "UNICODE", "None of the above"],
				"answer": "UNICODE",
				"explanation": "Unicode defines fully international character set that can represent all the characters found in all human languages. Its range is from 0 to 65536.",
				"message":"Good Answer!"
			}
			],
		},		
		{
			"quizid": "2",
			"title": "HTML and CSS Quiz",
			"description": "Quiz with 21 questions on html and css code and structure"	
		
		}
		]  
}

module.exports.quiz_data = quiz_data;