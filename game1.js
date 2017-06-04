
$(document).ready(function(){
   		   	// $(".fullover").show();

    $("#playButton").click(function(){
        $("#titleScreen").hide();
        $(".power").show();
        // $(".over").show();
		startgame();
		// gameover();
    });

    function startgame() {
    	// Countdown timer;
    	timer();
		var hit = 0;
		var missed = 0;
	   var game = setInterval(function () {
	   	   
	   	// Generate cell id randomly
	   	var min = 1;
	    var max = 25;
	   	var number = Math.floor(Math.random()*(max-min+1)+min);
	   	// Remove the minion from previous postion and show it on particular position
		$(".cell").removeClass("active");
	   	$("#"+ number).addClass("active");
	   	// Off click unbind all click functions
	   	// One for one time click

		$(".cell").off("click").one("click",function(){
		   	if ($(this).hasClass("active")) {
		       hit++;
			    $(".hit").html("Hit:"+hit);  
		    if (hit==10){
		    	$(".bigwin,.fullover").show();
	   		   	$(".table , .timer").hide();
	   		   	clearInterval(game);
	   		   	clearInterval(timer);

		   	}
		   }
	   	else {
	   		missed++;
			$(".missed").html("Missed:"+missed);	
			if(missed==5){

				  	$(".loser,.fullover").show();
			   		   	$(".table , .timer").hide();
			   		   	clearInterval(game);
			   		   	clearInterval(timer);


			}
	   	}
		});

	},1000);
    }
    function timer() {
       var countdown = 20;
	   var timer = setInterval(function () {
	   	countdown--;
	   	$(".timer .countdown").html(countdown);
		   if (countdown <= 10) {
		   	$(".shout").animate({opacity:'1'});
		   	$(".shout").animate({opacity:'0'});
			$(".hurry").animate({opacity:'1'});
			$(".hurry").animate({opacity:'0'});

		   }
   		   if (countdown == 00) {
   		   	clearInterval(timer);
   		  gameover(countdown);
			
		   }
		    	
	   },1000);
    }
    function gameover(countdown) {

       if (countdown == 00) {
       		
   		   	$(".fullover").show();
   		   	// $(".table ,.loser ,.bigwin").hide();
   		   	
    }
    	
}
});

