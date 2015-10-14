$(document).ready(function() {
    var answer=Math.floor(Math.random()*100+1);
    var total_guesses=0;
    console.log( $("#user_number").val());
    console.log(answer);
    $("#submit").on('click', function(){
    	var new_guess=$("#user_number").val();
    	if(isNaN(new_guess))
    		console.log("invalid number");
    	else{
    		total_guesses++;
    		console.log(new_guess);
    	var difference=Math.abs(answer-new_guess);
    	if (difference===0){
    		console.log("Damn your punk ass got me!");
    	}
    	else if(difference>50){
    		if(answer>new_guess){
    			$(this).text("cold as fuck yo! guess higher... you got " + (5-total_guesses) + " guesses remainging");
    		}
    		if(new_guess>answer)
    			$(this).text("cold as fuck yo! guess lower... you got " + (5-total_guesses) + " guesses remainging"); 		
    	}
    	else if (difference>25){
    		if(answer>new_guess){
    			$(this).text("cold yo! guess higher... you got " + (5-total_guesses) + " guesses remainging");
    	}
    		if(new_guess>answer){
    			$(this).text("cold yo! guess lower... you got " + (5-total_guesses) + " guesses remainging");
    		}
    	}
    	else if (difference>15){
    		if(answer>new_guess){
    			$(this).text("gettin warm yo! guess higher... you got " + (5-total_guesses) + " guesses remainging");
    	}
    		if(new_guess>answer){
    			$(this).text("gettin warm yo! guess lower... you got " + (5-total_guesses) + " guesses remainging");
    		}
    	}
    	else if (difference>10){
    		if(answer>new_guess){
    			$(this).text("Really warm yo! guess higher... you got " + (5-total_guesses) + " guesses remainging");
    	}
    		if(new_guess>answer){
    			$(this).text("Really warm yo! guess lower... you got " + (5-total_guesses) + " guesses remainging");
    		}
    	}
    	else if (difference>=1){
    		if(answer>new_guess){
    			$(this).text("Burnin' up yo! guess higher... you got " + (5-total_guesses) + " guesses remainging");
    	}
    		if(new_guess>answer){
    			$(this).text("Burnin up yo! guess lower... you got " + (5-total_guesses) + " guesses remainging");
    		}
    	}
    	if(5-total_guesses===0)
    		$(this).text("Game over duder... try again... or don't")	
    	}    	    
    })

    }
);
