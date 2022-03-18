$(document).ready(function ()
{
    
    
    
    // a)
	    var fullName = prompt("Please enter your full name "); //asking user for their name
	    //alert('Hi ' + fullName + '!'); //testing input

	    console.log('Hi ' + fullName + '!'); //testing input
	    
	// b) WORKS (input limited as needed)
	   // var skinType = prompt("What's your skin type? \nPlease enter the relevant number on the scale from:\n 1: very fair to 6: very dark"); //asking user on their skin type
	   
	        let skinType = parseInt(prompt("What's your skin type? \nPlease enter the relevant number on the scale from:\n 1: very fair to 6: very dark"));
                while(skinType < 0 || skinType > 6){
                 skinType = parseInt(prompt("Invalid skintype: please re-enter"));
                }
                
	    alert(fullName + ' your skintype is: type ' + skinType); //testing input
	    
	    
	   // var sunscreenSPF = prompt("What level SPF sunscreen do you normally use? \nPlease enter the relevant number from: 0 to 100"); //asking user for input on SPF level, first try, not limited
	  
	   let sunscreenSPF = parseInt(prompt("What level SPF sunscreen do you normally use? \nPlease enter the relevant number from: 0 to 100")); // WORKS (input limited as needed)
                while(sunscreenSPF < 0 || sunscreenSPF > 100){
                 sunscreenSPF = parseInt(prompt("Invalid SPF: please re-enter"));
                }
                
	   //alert(fullName + ' your skintype is: type ' + skinType); //testing input
	   
	    alert('Hi ' + fullName + '\n your skintype is: ' + skinType + '\n and you use SPF:' + sunscreenSPF); //testing all input so far
	    
	    
	// c)
	    var noSunscreen = skinType*5;
	    //alert(fullName + ' you may safely spend ' + skinType*5 + 'minutes in the sunshine without any sunscreen'); // testing calculation
	   //alert(fullName + ' you may safely spend ' + noSunscreen + ' minutes in the sunshine without any sunscreen'); // testing noSunscreen calculation
	    
	    
    // d)
        var withSunscreen = skinType*5*sunscreenSPF;
        //alert(fullName + ' you may safely spend ' + skinType*5*sunscreenSPF + 'minutes in the sunshine with the sunscreen you normally use'); // testing withSunscreen calulation
	
	
	// e)
	    //function userDetails (int){
	    //  var fullName = "";
	    //  var skinType = "";
	    //  var sunscreenSPF = "";
	    //  var noSunscreen = "";
        //  var withSunscreen = "";
	        
	        
	    //    return ( "e) " + fullName + " with skintype " + skinType + ", has an unscreened limit of " + (userDetails(noSunscreen)) + "\n Using sunscreen with SPF" + sunscreenSPF + ", the screened limit is " +  (userDetails(withSunscreen))  );
	    //}
	    
	    
	    //alert();
	
	    alert( "e)" + fullName + " with skintype " + skinType + ", has an unscreened limit of " + noSunscreen + " minutes" + "\n Using sunscreen with SPF " + sunscreenSPF + ", the screened limit is " + withSunscreen + " minutes"); //first try, not a function
	
	// f) Works fully
	
        function timesInTheSun (num){
    	        var hours = Math.floor(num/60);
    	        var minutes = num%60;
    	        
    	        return (hours + " hours and " + minutes + " minutes");
    	    }
	    
	    alert("f) " + fullName + " with skintype " + skinType + ", has an unscreened limit of " + (timesInTheSun(noSunscreen)) + "\n Using sunscreen with SPF" + sunscreenSPF + ", the screened limit is " +  (timesInTheSun(withSunscreen)) );
	    
	    
	// g)
	
	    let sunExposureOnDay = new Array(5);
	    
	    sunExposureOnDay[0] = parseInt(prompt("Please enter how many minutes you spent in the sun five days ago"));
	    sunExposureOnDay[1] = parseInt(prompt("Please enter how many minutes you spent in the sun four days ago"));
	    sunExposureOnDay[2] = parseInt(prompt("Please enter how many minutes you spent in the sun three days ago"));
	    sunExposureOnDay[3] = parseInt(prompt("Please enter how many minutes you spent in the sun two days ago"));
	    sunExposureOnDay[4] = parseInt(prompt("Please enter how many minutes you spent in the sun yesterday"));
	    
	    alert((sunExposureOnDay));
	    //alert (sunExposureOnDay.split("\n"));
	    //alert( "g " + fullName + ", you've spent " + sunExposureOnDay[0] + sunExposureOnDay[1] + " minutes in the sun in the past five days" );
	  
	  // h)
	    
	    // Maximum sun exposure
	    //for (let i=0; i < sunExposureOnDay.length; i++){
	    //   output += sunExposureOnDay[i] + "\n";
	    //}
	    //alert(output);
	    
	    function mostTimeInTHeSun (num){
    	        var maxTime = Math.max.apply(null,sunExposureOnDay);
    	   
    	        return (maxTime);
    	    }
    	    alert("h1)  "+ "Maximum length of exposure was " + (mostTimeInTHeSun()) + " minutes in the past five days.");
	    
	    
	    
	    //Minimum sun exposure
	    
	     function leastTimeInTHeSun (num){
    	        var minTime = Math.min.apply(null,sunExposureOnDay);
    	   
    	        return (minTime);
    	    }
    	    alert("h2)  "+ "Minimum length of exposure was " + (leastTimeInTHeSun()) + " minutes in the past five days.");
	    
	    //Average sun exposure
	    
    	  var sumOfDays = 0;
        for(var i in sunExposureOnDay) {
            sumOfDays += sunExposureOnDay[i];
        }
        
        //Work out how many numbers are
        //in our array.
        var nrOfDays = sunExposureOnDay.length;
        
        //Finally, get the average.
        var averageTime = sumOfDays / nrOfDays;
        
        //Print the median / average to the console.
        //In this case, the average is 7.
        alert("h3)  "+ "Average length of exposure was " + averageTime + " minutes in the past five days.");

    	    //Limited exceeded number of times
	    
	    sunExposureOnDay[i].value > withSunscreen[i].value;
	    
	    
	    
	    //outputs function
	    
	    
	    
	    
	    
	    
	    
	    
	    
});