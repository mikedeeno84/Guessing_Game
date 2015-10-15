$(document).ready(function() {
    var answer=Math.floor(Math.random()*100+1);
    console.log(answer);
    var total_guesses=0;
    console.log( $("#user_number").val());

    $("#submit").on('click', function(event){
        event.preventDefault();
    	var new_guess=$("#user_number").val();
        var guesses_left=4-total_guesses;
        var guess_array=[];
    	if(isNaN(new_guess)||(new_guess<1||new_guess>100))
    		$("#update").text("Invalid number. Please enter a number from 1-100");
    	else{
            guess_array.push(new_guess);
            if (total_guesses===0)
                $("#guess_1").text(new_guess);
            else if (total_guesses===1)            
                $("#guess_2").text(new_guess);
            else if (total_guesses===2)            
                $("#guess_3").text(new_guess);
            else if (total_guesses===3)            
                $("#guess_4").text(new_guess);
            else if (total_guesses===4)            
                $("#guess_5").text(new_guess);

    		total_guesses++;

    		console.log(new_guess);
    	var difference=Math.abs(answer-new_guess);
    	if (difference===0){
    		$("#update").text("You Win!");
    	}
    	else if(difference>50){
    		if(answer>new_guess){
    		  $("#update").text("cold as fuck yo! guess higher"   );
    		}
    		if(new_guess>answer)
    			$("#update").text("cold as fuck yo! guess lower"   ); 		
    	}
    	else if (difference>25){
    		if(answer>new_guess){
    			$("#update").text("cold yo! guess higher"   );
    	}
    		if(new_guess>answer){
    			$("#update").text("cold yo! guess lower"   );
    		}
    	}
    	else if (difference>15){
    		if(answer>new_guess){
    			$("#update").text("gettin warm yo! guess higher"   );
    	}
    		if(new_guess>answer){
    			$("#update").text("gettin warm yo! guess lower"   );
    		}
    	}
    	else if (difference>10){
    		if(answer>new_guess){
    			$("#update").text("Really warm yo! guess higher"   );
    	}
    		if(new_guess>answer){
    			$("#update").text("Really warm yo! guess lower"   );
    		}
    	}
    	else if (difference>=1){
    		if(answer>new_guess){
    			$("#update").text("Burnin' up yo! guess higher"   );
    	}
    		if(new_guess>answer){
    			$("#update").text("Burnin up yo! guess lower");
    		}
    	}
        $("#guess_count").text(guesses_left);
    	if(guesses_left===0)
    		$("#update").text("Game over duder... try again... or don't");
    	}    	    
    })
$("#play_again").on('click', function(){
    $("#da_answer").text(answer).slideUp();
    answer=Math.floor(Math.random()*100+1);
    guesses_left=5;
    $("#submit").text("Submit");
    $("#guess_count").text(guesses_left);
});
$("#hint").on('click', function(){
    $("#da_answer").text(answer);
    $("#da_answer").text(answer).slideDown();
})
 
 });
