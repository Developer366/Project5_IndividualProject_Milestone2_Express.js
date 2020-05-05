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
				"user_answer" : "1",
				"correct" : false,
				"explanation": " Char occupies 16-bit in memory, so it supports 2^16 i:e from 0 to 65535.",
				"message": "Nice Job!",
				"meta": {
					"next_question": 2
				}
			},
			{
				"questionId": 2,
				"questiontype": "MC",
				"question": "Which of these coding types is used for data types of characters in Java?",
				"options": ["ASCII", "ISO-LATIN-1", "UNICODE", "None of the above"],
				"answer": "UNICODE",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "Unicode defines fully international character set that can represent all the characters found in all human languages. Its range is from 0 to 65536.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 3,
				"questiontype": "MC",
				"question": "java.util.Collections is a:",
				"options": ["Class", "Interface", "Object", "None of the above"],
				"answer": "Class",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "java.util.Collections is a: Class. Class is an extensible program-code-template for creating objects.",
				"message":"Amazing!",
				"meta": {
					"next_question": 4
				}
			},
			{
				"questionId": 4,
				"questiontype": "MC",
				"question": "Which of these coding types is used for data types of characters in Java?",
				"options": ["A public member of a class can be accessed in all the packages", "A private member of a class cannot be accessed by the methods of the same class", "A private member of a class cannot be accessed from its derived class", "A protected member of a class can be accessed from its derived class"],
				"answer": "A private member of a class cannot be accessed by the methods of the same class",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "The class members declared as private can be accessed only by the functions inside the class. They are not allowed to be accessed directly by any object or function outside the class. Only the member functions or the friend function are allowed to access the private data members of a class.",
				"message":"I am proud of you!",
				"meta": {
					"next_question": 5
				}
			},
			{
				"questionId": 5,
				"questiontype": "MC",
				"question": "In object-oriented programming, composition relates to",
				"options": ["The use of consistent coding conventions", "The organization of components interacting to achieve a coherent, common behavior", "The use of inheritance to achieve polymorphic behavior", "The organization of components interacting not to achieve a coherent common behavior"],
				"answer": "The organization of components interacting to achieve a coherent, common behavior",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "Make objects that can have similar behavior and can interact with each other",
				"message":"Good Answer!",
				"meta": {
					"next_question": 6
				}
			},
			{
				"questionId": 6,
				"questiontype": "IMC",
				"question": "What will the output of the following code be?",
				"questionImage": "https://d2h0cx97tjks2p.cloudfront.net/blogs/wp-content/uploads/sites/2/2018/07/Java-Quiz-One-Q.2.jpg",
				"options": ["[1,1,2,3]", "[1,2,2,3]", "[1,1,3,2]", "[1,2,3]"],
				"answer": "[1,1,3,2]",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "The add() method in Java LinkedHashSet is used to add a specific element into a LinkedHashSet. This method will add the element only if the specified element is not present in the LinkedHashSet else the function will return False if the element is already present in the LinkedHashSet.",
				"message":"Nice Thinking!",
				"meta": {
					"next_question": 7
				}
			},
			{
				"questionId": 7,
				"questiontype": "IMC",
				"question": "What will the output of the following program be?",
				"questionImage": "JavaTest_images/QuestionID_7.PNG",
				"options": ["15 times ***", "15 times +++++", "8 times *** and 7 times +++++", "Both will print only once"],
				"answer": "8 times *** and 7 times +++++",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "For all odd numbers till 15 (1, 3, 5, 7, 9, 11, 13, 15), it will print (***), and for all even numbers till 14 (2, 4, 6, 8, 10, 12, 14) it will print (+++++). Hence, an asterisk (***) will be printed eight times, and plus (+++++) will be printed seven times.",
				"message":"Genius over here!",
				"meta": {
					"next_question": 8
				}
			},
			{
				"questionId": 8,
				"questiontype": "TF",
				"question": "In an instance method or a constructor, THIS is a reference to the current object.",
				"options": ["True", "False"],
				"answer": "True",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "Keyword THIS in Java is a reference variable that refers to the current object.",
				"message":"You are soo cool!",
				"meta": {
					"next_question": 9
				}
			},
			{
				"questionId": 9,
				"questiontype": "TF",
				"question": "Garbage Collection is a manual process.",
				"options": ["True", "False"],
				"answer": "False",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "The Java runtime environment has a garbage collector that periodically frees the memory used by objects that are no longer referenced. The garbage collector does its job automatically when it determines that the time is right.",
				"message":"Nice Job!",
				"meta": {
					"next_question": 10
				}
			},
			{
				"questionId": 10,
				"questiontype": "TF",
				"question": "Constructor overloading is not possible in Java.",
				"options": ["True", "False"],
				"answer": "False",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "Constructor overloading is possible in Java. The Java compiler differentiates the constructors based on the number and the type of the arguments.",
				"message":"Nice Job!",
				"meta": {
					"next_question": 11
				}
			},
			{
				"questionId": 11,
				"questiontype": "TF",
				"question": "Java Technology is both a programming language and a platform.",
				"options": ["True", "False"],
				"answer": "True",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "A platform is the hardware or software environment in which a program runs. Most platforms can be described as a combination of the operating system and hardware.",
				"message":"You are Smart!",
				"meta": {
					"next_question": 12
				}
			},
			{
				"questionId": 12,
				"questiontype": "FITB",
				"question": "The ________ statement is used to include another Java package in a Java source file.",
				"answer": "import",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "In Java, the import statement is used to bring certain classes or the entire packages, into visibility. As soon as imported, a class can be referred to directly by using only its name.",
				"message":"Great!",
				"meta": {
					"next_question": 13
				}
			},
			{
				"questionId": 13,
				"questiontype": "FITB",
				"question": "__________ is the process by which objects of one class acquire the properties of another class.",
				"answer": "inheritence",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "Inheritance in Java is a mechanism in which one object acquires all the properties and behaviors of a parent object. You can create new classes that are built upon existing classes. When you inherit from an existing class, you can reuse methods and fields of the parent class.",
				"message":"Smart one are ya!",
				"meta": {
					"next_question": 14
				}
			},
			{
				"questionId": 14,
				"questiontype": "FITB",
				"question": "An _________  is an object that is generated when a run time error occurs.",
				"answer": "exception",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "An exception (or exceptional event) is a problem that arises during the execution of a program. When an Exception occurs the normal flow of the program is disrupted and the program/Application terminates abnormally, which is not recommended, therefore, these exceptions are to be handled.",
				"message":"Well done mate!",
				"meta": {
					"next_question": 15
				}
			},
			{
				"questionId": 15,
				"questiontype": "SA",
				"question": "Using a basic output statement, print out the word \"Happy\". Make sure the end the line with a semi-colon.",
				"answer": "System.out.println(\"Happy\");",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "System.out.println(\"text\"); will print what is between the double quotes \" \" and move the printing cursor to the next line.",
				"message":"Awesome!",
				"meta": {
					"next_question": 16  
				}
			},
			{
				"questionId": 16,
				"questiontype": "FITB",
				"question": " _________  means handling multiple tasks simultaneously.",
				"answer": "multithreading",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "In computer architecture, multithreading is the ability of a central processing unit to provide multiple threads of execution concurrently, supported by the operating system.",
				"message":"Nice!",
				"meta": {
					"next_question": 17
				}
			},
			{
				"questionId": 17,
				"questiontype": "IMC",
				"question": "Given the following values of a and the method doubleLast what will the values of a be after you execute: doubleLast()?",
				"questionImage": "JavaTest_images/QuestionID_17.PNG",
				"options": ["{-20,-10,2,8,16,60}", "{-20,-10,2,4,8,30}", "{-10, -5, 1, 8, 16, 60}", "{-10, -5, 1, 4, 8, 30  }"],
				"answer": "{-10, -5, 1, 8, 16, 60}",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "It loops from the middle to the end doubling each value. Since there are 6 elements it will start at index 3.",
				"message":"Nice Job!"
				"meta": {
					"next_question": 18
				}
			},
			{
				"questionId": 18,
				"questiontype": "IMC",
				"question": "Given the following code, what letter will be printed if the score is 76?",
				"questionImage": "JavaTest_images/QuestionID_18.PNG",
				"options": ["A", "B", "C", "D"],
				"answer": "C",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "76 is greater than or equal to 70 and below 80.",
				"message":"Nice Job!",
				"meta": {
					"next_question": 19
				}
			},
			{
				"questionId": 19,
				"questiontype": "SA",
				"question": "What variable stores values with two states: true or false?",				
				"answer": "boolean",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "Boolean stores values with two states: true or false.",
				"message":"Awesome!",
				"meta": {
					"next_question": 20
				},
			},
			{
				"questionId": 20,
				"questiontype": "SA",
				"question": "What does calling a constructor create?",
				"answer": "object",				
				"user_answer" : "1",
				"correct" : false,
				"explanation": "A constructor is a special type of subroutine called to create an object.",
				"message":"Good!"
				"meta": {
					"next_question": -1
				}
			}
		],			
		},
	],	
},
		
		{
			"quizid": "2",
			"title": "HTML and CSS Quiz",
			"description": "Quiz with 21 questions on html and css code and structure",
			data : [
			{
				"questionId": 1,
				"questiontype": "MC",
				"question": "What does HTML stand for?",
				"options": [ "Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Model Layout" ],
				"answer": "Hyper Text Markup Language",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "HTML stands for Hyper Text Markup Language",
				"message": "Correct!",
				"meta": {
					"next_question": 2
				}
			},
			{
				"questionId": 2,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 3,
				"questiontype": "MC",
				"question": "Which of the following property is used to create a small-caps effect?",
				"options": ["font-family", "font-style", "font-variant", "Cascade Style Systems"],
				"answer": "font-variant",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "The font-variant property is used to create a small-caps effect.",
				"message":"Awesome!",
				"meta": {
					"next_question": 4
				}
			},
			{
				"questionId": 4,
				"questiontype": "MC",
				"question": "CSS stands for?",
				"options": ["Case Sensitive Style", "Computers Style Sheets", "Cascade Style Sheets", "font-weight"],
				"answer": "Cascade Style Sheets",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "CSS stands for Cascading Style Sheets.",
				"message":"High-Five!",
				"meta": {
					"next_question": 5
				}
			},
			{
				"questionId": 5,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 6,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 7,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 8,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 9,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 10,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 11,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 12,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 13,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 14,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 15,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 16,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 17,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 18,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 19,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 20,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": 3
				}
			},
			{
				"questionId": 21,
				"questiontype": "MC",
				"question": "Choose the correct HTML tag for the largest heading.",
				"options": ["H1", "Heading", "Head", "H6"],
				"answer": "H1",
				"user_answer" : "1",
				"correct" : false,
				"explanation": "H1 is the tag for the largest heading, while H6 is the smallest heading.",
				"message":"Good Answer!",
				"meta": {
					"next_question": -1
				}
			}
			
			}
			]		
		}
		]  
}

module.exports.quiz_data = quiz_data;