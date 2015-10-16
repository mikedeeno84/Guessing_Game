$(document).ready(function() {
    var answer=Math.floor(Math.random()*100+1);
    console.log(answer);
    var total_guesses=0;
    console.log( $("#user_number").val());
    var guess_array=[];
    var closer="";

    $("#submit").on('click', function(event){
        event.preventDefault();
    	var new_guess=Math.floor($("#user_number").val());
        $("#user_number").val("");
        var guesses_left=4-total_guesses;
    	if(isNaN(new_guess)||(new_guess<1||new_guess>100))
    		$("#update").text("Invalid number. Please enter a number from 1-100");
        else if(guess_array.indexOf(new_guess)!=-1)
            $("#update").text("You guessed that already!");
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
        if(total_guesses>1){
            if(difference<=Math.abs(guess_array[total_guesses-2]-answer))
                closer="Getting Warmer... ";
            if(difference>Math.abs(guess_array[total_guesses-2]-answer))
                closer="Getting Colder... ";
        }
    	if (difference===0){
    		$("#update").text("You Win!").css({"font-size":"36px","color":"blue"});
            $("#victory").slideDown('slow');
    	}
    	else if(difference>50){
    		if(answer>new_guess){
    		  $("#update").text(closer + "Cold as heck yo! Guess higher"   );
    		}
    		if(new_guess>answer)
    			$("#update").text(closer + "Cold as heck yo! Guess lower"   ); 		
    	}
    	else if (difference>25){
    		if(answer>new_guess){
    			$("#update").text(closer + "Cold yo! Guess higher"   );
    	}
    		if(new_guess>answer){
    			$("#update").text(closer + "Cold yo! Guess lower"   );
    		}
    	}
    	else if (difference>15){
    		if(answer>new_guess){
    			$("#update").text(closer + "Gettin warm yo! Guess higher"   );
    	}
    		if(new_guess>answer){
    			$("#update").text(closer + "Gettin warm yo! Guess lower"   );
    		}
    	}
    	else if (difference>10){
    		if(answer>new_guess){
    			$("#update").text(closer + "Really warm yo! Guess higher"   );
    	}
    		if(new_guess>answer){
    			$("#update").text(closer + "Really warm yo! Guess lower"   );
    		}
    	}
    	else if (difference>=1){
    		if(answer>new_guess){
    			$("#update").text(closer + "Burnin' up yo! Guess higher"   );
    	}
    		if(new_guess>answer){
    			$("#update").text(closer + "Burnin up yo! Guess lower");
    		}
    	}
        $("#guess_count").text(guesses_left);
    	if(guesses_left===0 && new_guess!=answer)
    		$("#update").text("Game over duder... Try again!.. or don't");
    	}    	    
    })
$("#play_again").on('click', function(){
    $("#da_answer").text(answer).slideUp();
    answer=Math.floor(Math.random()*100+1);
    guesses_left=5;
    guess_array=[];
    closer="";
    $("#update").text("");
    $("#guess_count").text(guesses_left);
    $("#guess_1").text("");
    $("#guess_2").text("");
    $("#guess_3").text("");
    $("#guess_4").text("");
    $("#guess_5").text("");

});
$("#hint").on('click', function(){
    $("#da_answer").text(answer + " ...Cheater!").slideDown();
})
 
 });
