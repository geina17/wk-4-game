//random #to match
$(document).ready(function() {
    var random = Math.floor(Math.random() *101 + 2);
        console.log(random);
        $("#guessingNumber").text(random);

    var wins = 0;
    var loses = 0;
    var currentScore = 0;
    var targetNumber = 0;
           
    var gems = {
        gem1: {
            name: "Gem1",
                value: 0
        },
        gem2: {
            name: "Gem2",
                value: 0
        },
        gem3: {
            name: "Gem3",
                value: 0
        }
};

var startGame =function(){

	currentScore = 0;

	// Assigning a random value to my first gem :
	gems.gem1.value= Math.floor(Math.random() *(10-5));
	console.log("Gem1 value is:" + gems.gem1.value);
	
	gems.gem2.value= Math.floor(Math.random() *(20-15));
	console.log(gems.gem2.value);

	gems.gem3.value= Math.floor(Math.random() *(30-25));
	console.log(gems.gem3.value);

	gems.gem4.value= Math.floor(Math.random() *(40-35));
	console.log(gems.gem4.value);
}

$(".gem1").click(function(){

	currentScore+= gems.gem1.value;
	console.log("gem1");
});
$(".gem2").click(function(){

	currentScore+= gems.gem2.value;
	console.log("gem1");	
});
$(".gem3").click(function(){

	currentScore+= gems.gem3.value;
	console.log("gem1");	
});
 
$(".gem4").click(function(){

	currentScore+= gems.gem4.value;
	console.log("gem1");	
});

function currentScore(){
	if(currentScore === targetNumber){
			alert("You're Incredible!");
		wins++;
	} else if (currentScore==targetNumber) {
		alert("I need to be standing or else it doesn’t work..");
		loses++;
	}
}
function reset(){
	var random = Math.floor(Math.random() *101 + 2);
        console.log(random);
    $("#guessingNumber").text(random);
	total= 0;
	$("gemValue").text(total);
};
