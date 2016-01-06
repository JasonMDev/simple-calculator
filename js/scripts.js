//When the document is ready the following actions will take place.
$(document).ready(function() { 
	
	//"Click" event handler for Contact Submit Button
	$(".calc-button").on("click", function() {
		//Declare variables.
		var screenDisplay = "";
		var valBtn = $(this).val();
		var evalScreen = "";

		//What is teh bvalue of click.
		console.log(valBtn);
		
		//Flow control.
		switch(valBtn) {
			//When "=" is pressed
			case "=":
			  //console.log("Pressed =.");
			  evalScreen = eval($(".calc-memory").html());
			  console.log(evalScreen);
			  $(".calc-screen").html(evalScreen);
			  $(".calc-memory").html("");
			  break;
    	
    	//When "%" is pressed
    	case "%":
        console.log("Pressed %.");
        
        if ($(".calc-screen").html() === "") {
        	//true
        	evalScreen = eval($(".calc-memory").html())/100;
        	$(".calc-screen").html(evalScreen);
        	$(".calc-memory").html("");
        } else {
        	//false
        	evalScreen = eval($(".calc-screen").html())/100;
        	$(".calc-screen").html(evalScreen);
        	$(".calc-memory").html("");
        };

        //$(".calc-screen").html(evalScreen);
        //$(".calc-memory").html("");
        break;

    	//When "CE" is pressed
    	case "CE":
        console.log("Pressed CE.");
        $(".calc-screen").html("");
        break;

    	// Be default other elements get added.
    	default:
        $(".calc-screen").html(valBtn);
        $(".calc-memory").append(valBtn);
        //$(".calc-screen").append(valBtn);
		};
		
		
		
		
		

	});
	

});