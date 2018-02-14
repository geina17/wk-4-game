//random #to match
$(document).redy(function(){
	var random = math.floor(math.random()*101+2)
		console.log(random)
	$("#numberOptions").text(random);
	
	var wins=0;
	var loses=0;

	var numberOptions = [];
	var targetNumber = [];
	var gemValue=[];
}	

//clickity click
$("#gems").on("click" function(){
	total = total + numberOptions[0];
	console.log("new totat="+total);
	$("#combined").text(total);
		if (total == random){
			woo();
		}else if( toatl > random){
			nay();
		}

});

function woo(){
	alert("Youre Incredible!")
	wins++;
	$("#wins").text(wins);
	reset();
}
console.log()

function nay(){
	alert("I need to be standing or else it doesn’t work.")
	loses++
	$("loses").text(loses);
	reset()
}
console.log()

function reset(){
	random=Math.floor(math.random()*101+2);
	console.log(random)
	$("#number").text(random);
	numberOptions = [];
	fourRandomNumbers();
	total= 0;
	$("combined").text(total);
}

// for (var i = 0; i < 4; i++) {
// 	$("#gems").append(gems);
// }

// function shuffle(array) {
//   var numberOptions = array.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== numberOptions) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * numberOptions);
//     numberOptions -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[numberOptions];
//     array[numberOptions] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
// document.getElementById('gems');
// $("gems").on("click",function() {
// 	.onclick(math.sum)
	 
// });
// function targetNumber(){
// for (var i=0; i <targetNumber)
// 	var gemValue = ($(this).attr("data-gemValue	"))
// };
// console.log()

