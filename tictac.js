$(document).ready(function(){

	var combination = [["1","2","3"],["4","5","6"],["7","8","9"], ["1","4","7"], ["2","5","8"], 
	["3","6","9"], ["1","5","9"], ["3","5","7"]]

	var click = 0;
	$("td").on('click', function(){

		if ($(this).hasClass("oh") || $(this).hasClass("ex")){
			return
		}

		click++;
		if (click % 2 == 0){
			$(this).addClass("oh");
			var now = "oh";
		}
		else{
			$(this).addClass("ex");
			var now = "ex";
		}

		for (var i = 0; i < combination.length; i++) {
			var counter = 0;
			for (var j = 0; j < combination[i].length; j++) {
				if ($("#" + combination[i][j]).hasClass(now)) {
					counter++;
				}	
				if (counter == 3) {
					if (now == "oh") {
						setTimeout(function(){
						$("#game").hide();
						$("#vogonwin").show();}, 100)
					}
					if (now == "ex") {
						setTimeout(function(){
						$("#game").hide();
						$("#earthwin").show();}, 100)

					}
				}
			}
		}

		if (counter != 0 && ($(".oh").length) + ($(".ex").length) == 9){ 
				console.log("game over!");
		}
		
	})
})