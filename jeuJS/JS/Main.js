//Start function | executed after HTML & CSS load
$(function(){
	initRoom(1);
	
$(dice1).click(function(){
	dice1Stop = true;
	dicesStates();
});

$(dice2).click(function(){
	dice2Stop = true;
	dicesStates();
});

$(dice3).click(function(){
	dice3Stop = true;
	dicesStates();
});

$(dice4).click(function(){
	dice4Stop = true;
	dicesStates();
});
});

var _Circles = new Array ();
var bool = 0;
var heroPv = 150;
var dice1Value = 1;
var dice2Value = 1;
var dice3Value = 1;
var dice4Value = 1;
var dice1Stop = false;
var dice2Stop = false;
var dice3Stop = false;
var dice4Stop = false;
var heroAtk = 20;
var monsterPv1 = 30;
var monsterPv2 = 50;
var monster = 1;
var actualMonsterPv = 0;

function initRoom(roomNumber) {

	$(life1).animate({
		"left": 30 + "%"
	},1500);

	$(life2).animate({
		"right": 30 + "%"
	},1500);

	$(progress1).css("background-color","rgb(255,0,0)");
	$(progress2).css("background-color","rgb(255,0,0)");
	$(progress1).delay(1500).animate({
		"width": 100 + "%"
		},1500);
	$(progress2).delay(1500).animate({
		"width": 100 + "%"
		},1500);
		
		setInterval(rollingDice,300);

		monster = Math.floor(Math.random() * 1) + 1;
		if ( monster == 1){
			actualMonsterPv = monsterPv1;
		} else if(monster == 2){
			actualMonsterPv = monsterPv2;
		}


	
}

function dicesStates(){
if (dice1Stop && dice2Stop && dice3Stop && dice4Stop){
	if ( (dice1Value + dice2Value) > (dice3Value + dice4Value)){
		updateMonstreLife();
	}
 setTimeout(resetDice,3000);
}
}

function resetDice(){
	dice1Stop = false;
	dice2Stop = false;
	dice3Stop = false;
	dice4Stop = false;
}

function updateMonstreLife(){
	if ((actualMonsterPv - heroAtk) < 0){
	
	}
}

function rollingDice(){

	if(!dice1Stop){
	if (dice1Value < 6 ){
		dice1Value ++;

	}else{
		dice1Value = 1;
		
	}
	$(dice1).text(dice1Value);
	}
	
	if(!dice2Stop){
		if (dice2Value < 6 ){
			dice2Value ++;
	
		}else{
			dice2Value = 1;
			
		}
		$(dice2).text(dice2Value);
		}

	if(!dice3Stop){
	if (dice3Value < 6 ){
		dice3Value ++;

	}else{
		dice3Value = 1;
		
	}
	$(dice3).text(dice3Value);
	}

	if(!dice4Stop){
	if (dice4Value < 6 ){
		dice4Value ++;

	}else{
		dice4Value = 1;
		
	}
	$(dice4).text(dice4Value);
	}

}



