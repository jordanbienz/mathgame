var gameStatus = 0;

function pageLoad(){
	
	sessionStorage.correctAnswer = 0;
	sessionStorage.totalAnswer = 0;
	sessionStorage.score = 0;
	
	document.getElementById("numrange1").value = "1";
	document.getElementById("numrange2").value = "10";
	document.getElementById("answrbutton").style.display = 'none';
	document.getElementById("CalcForm").style.display = 'none';
	
	genratePointValue();
	
}

function startGame(){
	gameStatus = 0;
	
	document.getElementById("numrange1").disabled = true;
	document.getElementById("numrange2").disabled = true;
	document.getElementById("answrbutton").style.display = 'block';
	document.getElementById("startgamebutton").style.display = 'none';
	document.getElementById("CalcForm").style.display = 'block';
	
	generateQuestion();
}

function genratePointValue(){
	var numrange1 = parseInt(document.getElementById("numrange1").value);
	var numrange2 = parseInt(document.getElementById("numrange2").value);
	
	sessionStorage.pointvalue = Math.ceil(((((numrange2 + 1) - numrange1) * numrange2) * 0.1));
	
	document.getElementById("pointValue").innerHTML = '<p>Point Value: ' + sessionStorage.pointvalue + '</p>';
	
}



function generateQuestion(){
	
	var numrange1 = parseInt(document.getElementById("numrange1").value);
	var numrange2 = parseInt(document.getElementById("numrange2").value);
	
	mathoperatornum = Math.floor((Math.random() * 3) + 1);
	mathoperatorsign = '';
		
	switch(mathoperatornum){
		case 1:
			mathoperatorsign = '+';
			break;
		case 2:
			mathoperatorsign = '-';
			break;
		case 3:
			mathoperatorsign = '*';
			break;
		case 4:
			mathoperatorsign = '/';
			break;
	}
	
	
	document.getElementById("firstnum").innerHTML = Math.floor((Math.random() * numrange2) + numrange1);
	document.getElementById("secondnum").innerHTML = Math.floor((Math.random() * numrange2) + numrange1);
	document.getElementById("mathoperator").innerHTML = mathoperatorsign;
	//document.getElementById("CalcSum").value = '';
	//document.getElementById("CalcSum").focus();
	
	//sessionStorage.pointvalue = Math.ceil(((((numrange2 + 1) - numrange1) * numrange2) * 0.1));
	//document.getElementById("pointvalue").innerHTML = sessionStorage.pointvalue;
	//genratePointValue();
	
	
	//displayhighscore();
	
	return false;
}

function CalcAnswr(guess){
	
	var firstnum = document.getElementById("firstnum").innerHTML;
	var secondnum = document.getElementById("secondnum").innerHTML;
	var mathoperatorsign = document.getElementById("mathoperator").innerHTML;
	var answr = parseInt(eval(firstnum + mathoperatorsign + secondnum));
	//var answrguess = document.getElementById("CalcSum").value;
	var answrguess = guess;
	
	if ( answrguess === ''){
		popupmsg("Please Enter an Answer");
		//alert("Please Enter an Answer");
		return false;
	}

	if (answr == answrguess) {
		popupmsg("Correct!");
		//alert("Correct!");
		if (sessionStorage.correctAnswer) {
    	sessionStorage.correctAnswer = Number(sessionStorage.correctAnswer) + 1;
    	sessionStorage.score = Number(sessionStorage.score) + Number(sessionStorage.pointvalue);
		} else {
    	sessionStorage.correctAnswer = 1;
    	sessionStorage.score = sessionStorage.pointvalue;
		}
		
		//checkHighScore(sessionStorage.score);
	}
	else{
		popupmsg("Wrong, the correct answer was " + answr);
		//alert("Wrong, the correct answer was " + answr);
		gameStatus = 1;
	}
	
	if (sessionStorage.totalAnswer) {
    	sessionStorage.totalAnswer = Number(sessionStorage.totalAnswer) + 1;
		} else {
    	sessionStorage.totalAnswer = 1;
		}
		
	displayScore();
	//displayhighscore();;
	//resetForm();
	generateQuestion();
	return false
}



function displayScore(){
	
	var percentage = 0;
	
	if (parseInt(sessionStorage.totalAnswer) !== 0){
				percentage = (parseFloat(sessionStorage.correctAnswer)/parseFloat(sessionStorage.totalAnswer))*100;
	}
	
	document.getElementById("currentscore").innerHTML = "<p>" + sessionStorage.correctAnswer + " out of " + sessionStorage.totalAnswer 
	+ " Questions Correct</p>" + "<p>Points: " + sessionStorage.score + "</p>";
}

/*
function displayhighscore(){
	
		if (typeof(Storage) !== "undefined") {
			
			var text = '';
			
			if (!localStorage.setItem) {
    		var highscore = '{"highscores":[' +
				'{"id":"1","name":"","score":""},' +
				'{"id":"2","name":"","score":"" },' +
				'{"id":"3","name":"","score":"" },' +
				'{"id":"4","name":"","score":"" },' +
				'{"id":"5","name":"","score":"" },' +
				'{"id":"6","name":"","score":"" }]}';
				
				localStorage.setItem('highscore', highscore);
			}
			
			var retrievedObject = localStorage.getItem('highscore');
				
			var jsontest = JSON.parse(retrievedObject);

			
			for(var i = 0; i < (Object.keys(jsontest.highscores).length); i++) {
				text = text + '<p>' + jsontest.highscores[i].name + ' - ' + jsontest.highscores[i].score + '</p>';
			}
			
			document.getElementById("highscores").innerHTML = text;
			
			}
}



function checkHighScore(playerscore){
	
	var retrievedObject = localStorage.getItem('highscore');
	var jsontest = JSON.parse(retrievedObject);
	
	
	for(var i = (Object.keys(jsontest.highscores).length); i > 0; i--){
    
    if((parseInt(playerscore) <= parseInt(jsontest.highscores[(i-1)].score))& (i < 6)){
			if(parseInt(playerscore) > parseInt(jsontest.highscores[(i)].score)){
				var player = prompt("Please enter your name", "New Player");
				jsontest.highscores[(i)].name = player;
				jsontest.highscores[(i)].score = parseInt(playerscore);
				localStorage.setItem('highscore', JSON.stringify(jsontest));
			}
			i=0;
		}
	}
}
*/
