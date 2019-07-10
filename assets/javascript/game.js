var attack;
		var defend;
		var attackcharacter;
		var attackerHP;
	    var attackerAP;
	    var attackerCAP;
	    var defendcharacter;
	    var defenderHP;
	    var defenderAP;
	    var defenderCAP;
	    var name;
	    var YourCharacter;
	    var YourDefender;
	    var myChar = "";
	    var myDef = "";

function reset() {	
	
	$("#picRow").show();

	$(".restart").hide();
	$(".attackButton").show();

	var myChar = "";
	var myDef = "";

	characters.House.healthPoints = 300;
	characters.Legion.healthPoints = 500;
	characters.NCR.healthPoints = 550;
	characters.Yesman.healthPoints = 275;
	characters.BoS.healthPoints = 250;
<<<<<<< HEAD
=======
	characters.Enclave.healthPoints = 200;
>>>>>>> b3e7b7e6a4388edd31cb2ed9a76bcbb709583b79

	characters.House.attackPower = 35;
	characters.Legion.attackPower = 60;
	characters.NCR.attackPower = 75;
	characters.Yesman.attackPower = 40;
	characters.BoS.attackPower = 55;
<<<<<<< HEAD
=======
	characters.Enclave.attackPower = 25;
>>>>>>> b3e7b7e6a4388edd31cb2ed9a76bcbb709583b79

	$(".youAttacked").empty();
	$(".attackedBack").empty();
	$(".youDefeated").empty();
	$(".youWon").empty();
	$(".youLose").empty();
	$(".noEnemy").empty();

	$(".nameh").html(characters.House.fullName);
	$(".namel").html(characters.Legion.fullName);
	$(".namen").html(characters.NCR.fullName);
	$(".namey").html(characters.Yesman.fullName);
	$(".nameb").html(characters.BoS.fullname);
<<<<<<< HEAD
=======
	$(".namee").html(characters.Enclave.fullname);
>>>>>>> b3e7b7e6a4388edd31cb2ed9a76bcbb709583b79

	$("#house").appendTo("#picRow");
	$("#legion").appendTo("#picRow");
	$("#ncr").appendTo("#picRow");
	$("#yesman").appendTo("#picRow");
	$("#bos").appendTo("#picRow");
	$("#enclave").appendTo("#picRow");

	$(".househp").html(characters.House.healthPoints);
	$(".legionhp").html(characters.Legion.healthPoints);
	$(".ncrhp").html(characters.NCR.healthPoints);
	$(".yesmanhp").html(characters.Yesman.healthPoints);
<<<<<<< HEAD
	$(".boshp").html(characters.BoS.healthPoints);
=======
>>>>>>> b3e7b7e6a4388edd31cb2ed9a76bcbb709583b79

	$(".firstRow").css({"background-color": "white", "outline-color": "orangered", 
	"border-width": "3px", "outline-style": "solid", "border-color": "white", "outline-width": "3px"});

};

var characters = { 

	House: {
			name: "House",
			visual: 'assets/css/images/house.png',
			healthPoints: 300,
			attackPower: 35,
			fullName: "Mr. House's NV",
			counterAttackPower: 45
			},

	Legion:{
			name: "Legion",
			visual: 'assets/css/images/legion.png',
			healthPoints: 500,
			attackPower: 60,
			fullName: "Caesar's Legion",
			counterAttackPower: 50
			},

	NCR:{ 
			name: "NCR",
			visual: 'assets/css/images/ncr.jpg',
			healthPoints: 550,
			attackPower: 75,
			fullName: "NCR",
			counterAttackPower: 80
			},

	Yesman:{ 
			name: "Yesman",
			visual: 'assets/css/images/yesman.png',
			healthPoints: 275,
			attackPower: 40,
			fullName: "Independent NV",
			counterAttackPower: 25
			},

	BoS:{ 
			name: "BoS",
			visual: 'assets/css/images/bos.jpg',
			healthPoints: 250,
			attackPower: 55,
			fullName: "BoS",
			counterAttackPower: 10
			},
<<<<<<< HEAD
=======
		
	Enclave:{ 
			name: "Enclave",
			visual: 'assets/css/images/enclave.jpg',
			healthPoints: 200,
			attackPower: 25,
			fullName: "Enclave",
			counterAttackPower: 1
			},
>>>>>>> b3e7b7e6a4388edd31cb2ed9a76bcbb709583b79

};


	$(document).ready(function(){
		reset();
		
	$(".firstRow").click(function(){
                
           if (myChar == "") {
	       console.log(this);	       
	       $(this).appendTo("#yourChar");
	       myChar = $(this);
	       YourCharacter = $(myChar).attr("value");
       	   }
	       if (YourCharacter == characters.House.name) {
	       		attackerHP = characters.House.healthPoints;
	       		attackerAP = characters.House.attackPower;
	       		attackerCAP = characters.House.counterAttackPower;
	       		attackerFN = characters.House.fullName;
	       		attack = characters.House;
	       }
	       else if (YourCharacter == characters.Legion.name){
	       		attackerHP = characters.Legion.healthPoints;
	       		attackerAP = characters.Legion.attackPower;
	       		attackerCAP = characters.Legion.counterAttackPower;
	       		attackerFN = characters.Legion.fullName;
	       		attack = characters.Legion;
	       }
	       else if (YourCharacter == characters.NCR.name){
	       		attackerHP = characters.NCR.healthPoints;
	       		attackerAP = characters.NCR.attackPower;
	       		attackerCAP = characters.NCR.counterAttackPower;
	       		attackerFN = characters.NCR.fullName;
	       		attack = characters.NCR;
	       }
	       else if (YourCharacter == characters.Yesman.name){
	       		attackerHP = characters.Yesman.healthPoints;
	       		attackerAP = characters.Yesman.attackPower;
	       		attackerCAP = characters.Yesman.counterAttackPower;
	       		attackerFN = characters.Yesman.fullName;
	       		attack = characters.Yesman;
	       }
		   else if (YourCharacter == characters.BoS.name){
			   attackerHP = characters.BoS.healthPoints;
			   attackerAP = characters.BoS.attackPower;
			   attackerCAP = characters.BoS.counterAttackPower;
			   attackersFN = characters.BoS.fullName;
			   attack = characters.BoS;
		   }
<<<<<<< HEAD

	       for (var i = 0; i < 9; i++) {
	       	$("._" + [i]).not(myChar).appendTo("#enemies" + [i]);
				
=======
		   else if (YourCharacter == characters.Enclave.name){
			   attackersHP = characters.Enclave.healthPoints;
			   attackersAP = characters.Enclave.attackPower;
			   attackerCAP = characters.Enclave.fullName;
			   attack = characters.Enclave;
		   }

	       for (var i = 0; i < 4; i++) {
	       	$("._" + [i]).not(myChar).appendTo("#enemies" + [i]);

>>>>>>> b3e7b7e6a4388edd31cb2ed9a76bcbb709583b79
	       	$("._" + [i]).not(myChar).css({"background-color": "red", "outline-color": "black", 
	       		"border-width": "3px", "outline-style": "solid", "border-color": "black", "outline-width": "1px"});


	       }

	       $("#picRow").hide();
	      
    });
  
     $(".move").click(function(){

	     	$(this).appendTo("#defender");
	     	myDef = $(this);
	     	YourDefender = $(myDef).children().attr("value");
	     	$(".youDefeated").empty();

	       if (YourDefender == characters.House.name) {
	       		defenderHP = characters.House.healthPoints;
	       		defenderAP = characters.House.attackPower;
	       		defenderCAP = characters.House.counterAttackPower;
	       		defenderFN = characters.House.fullName;
	       		defend = characters.House;
	       	
	       	}
	       	else if (YourDefender == characters.Legion.name){
	       		defenderHP = characters.Legion.healthPoints;
	       		defenderAP = characters.Legion.attackPower;
	       		defenderCAP = characters.Legion.counterAttackPower;
	       		defenderFN = characters.Legion.fullName;
	       		defend = characters.Legion;
	       		
	       }
	       else if (YourDefender == characters.NCR.name){
	       		defenderHP = characters.NCR.healthPoints;
	       		defenderAP = characters.NCR.attackPower;
	       		defenderCAP = characters.NCR.counterAttackPower;
	       		defenderFN = characters.NCR.fullName;
	       		defend = characters.NCR;
	       		
	       }
	       else if (YourDefender == characters.Yesman.name){
	       		defenderHP = characters.Yesman.healthPoints;
	       		defenderAP = characters.Yesman.attackPower;
	       		defenderCAP = characters.Yesman.counterAttackPower;
	       		defenderFN = characters.Yesman.fullName;
	       		defend = characters.Yesman;
	       		
		   }
		   else if (YourDefender == characters.BoS.name){
			   defenderHP = characters.BoS.healthPoints;
			   defenderAP = characters.BoS.attackPower;
			   defenderCAP = characters.BoS.counterAttackPower;
			   defenderFN = characters.BoS.fullName;
			   defend = characters.BoS;

		   }
<<<<<<< HEAD
		   
=======
		   else if (YourDefender == characters.Enclave.name){
			   defenderHP = characters.Enclave.healthPoints;
			   defenderAP = characters.Enclave.attackPower;
			   defenderCAP = characters.Enclave.counterAttackPower;
			   defenderFN = characters.Enclave.fullname;
			   defend = characters.Enclave;

		   }
>>>>>>> b3e7b7e6a4388edd31cb2ed9a76bcbb709583b79
	    

     });

    
     $(".attackButton").click(function(){

     		if ($("#defender").children().length == 0) {
     			$(".noEnemy").html("No enemy here.");
     		}

     		if (!(attackerHP < 1) || !(defenderHP < 1)) {

     		attackerHP = (attackerHP - defenderCAP);
     		 
     		$("." + YourCharacter).html(attackerHP);

     		$(".youAttacked").html("You attacked " + defenderFN + " for " + attackerAP + " damage.");

     		defenderHP = (defenderHP - attackerAP);

     		$(".attackedBack").html(defenderFN + " attacked you back for " + defenderCAP + " damage.");
			
			$("." + YourDefender).html(defenderHP);

     	} 
     		if (defenderHP <= 0) {

     			$(".youAttacked").empty();
     			$(".attackedBack").empty();
     			$(".youDefeated").html("You have defeated " + defenderFN + ", you can choose to fight another enemy.");

     			$("#defender").empty();

     			console.log(attackerAP);
     			attackerAP = (attackerAP + 10);

     			attack.attackPower = attackerAP;
     			console.log(attackerAP);

     		}
     		
     		if ($(".move").children().length == 0){
     		 
     		 $(".youAttacked").empty();
     		 $(".attackedBack").empty();
     		 $(".youDefeated").empty();
     		 $(".noEnemy").empty();
     		 $(".youWon").html("You Won!!!! GAME OVER!!!"); 

     		 $(".restart").show();

     		 $(".restart").click(function(){
     		 	location.reload(true);
     		 })
     		      			
     		}

     		if (attackerHP <= 0) {

     			$(".restart").show();

     			$(".attackButton").hide();

     			$(".youAttacked").empty();
     		 	$(".attackedBack").empty();
     			$(".youDefeated").empty();
     			$(".youLose").html("You've been defeated...GAME OVER!!!")
 
	     		 $(".restart").click(function(){
	     		 	location.reload(true);
	     		 });

     		}      
     		
     });

});
