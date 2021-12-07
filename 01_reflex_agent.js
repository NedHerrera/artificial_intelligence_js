// MIT License
// Copyright (c) 2020 Luis Espino
// NED homework

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function test(states){
       var location = states[0];		
       var state = states[0] == "A" ? states[1] : states[2];
       var action_result = reflex_agent(location, state);
       document.getElementById("algoritmo").innerHTML+="<br> State: ".concat(states[1]).concat("/").concat(states[2]).concat("<br>Sector: ").concat(location).concat(" / Action: ").concat(action_result);	
       if(states[1]=="CLEAN" && states[2]=="CLEAN")
       {
       		if(flag)
		{
            		document.getElementById("algoritmo").innerHTML+="<br>";
            		return;
        	}
	       else
	       { 
            		flag = true;
            		states[1] = "DIRTY";
            		states[2] = "DIRTY";           
        	}
       	}
	else if(action_result == "CLEAN")
	{
         	if (location == "A") states[1] = "CLEAN";
          	else if (location == "B") states[2] = "CLEAN";
       	}
       	else if (action_result == "RIGTH") states[0] = "B";
       	else if (action_result == "LEFT") states[0] = "A";	
 	setTimeout(function(){ test(states); }, 2000);
}

var  flag = false;
var states = ["B","DIRTY","DIRTY"];
test(states);
