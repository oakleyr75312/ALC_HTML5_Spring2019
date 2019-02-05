// Single line comment
/* 

Multiline comment

*/

// alert("Warning Will Robinson...Warning!");

// confirm("Do you like pokemon?");

// prompt("What type of pokemon do you like?");

//function Blacksmith(){
            //alert("");
            
            //var blacksmith = prompt("What do you want to buy? /n - sword");
                //if(blacksmith == "sword" && inventory.coin >= 100){
                    //var swordBuy = confirm("You sure");
                        //if(swordBuy){
                            //inventory.sword ++;
                            //alert("You own " +inventory.sword+" swords")
                            //inventory.coin = inventory.coin - 100;
                            //inventory.coin -= 100;
                            //alert("You have "+inventory.coins+" coins remaining");
                            //Blacksmith();
                        //}

var inventory = {
    coin:1000,
    bread:0,
    sword:0,
    map:0,
}





Game();

function Game(){
    
    alert("Stolen Island!");
    var playerName = prompt("What is your name?");
    alert("Welcome to the Stolen Island "+ playerName);
    
    Boat();
    
    function Boat(){
        var boat = prompt("You wake up...and find your self in a small boat. You notice that you have a horrible headache. \n -look at the island \n -look in the water \n -look in the boat.").toLowerCase();
        
        if(boat == "look at the island" || boat == "island"){
            
            var IslandLook = prompt("You see a small island with only 3 trees to the north. You see a small box poking out of the sand. \n -look in the water \n -look in the boat");
        }
        
        
        
    
        else if(boat == "look in the water" || boat == "water"){
            // Fall asleep because of the water
            alert("You look over at the water and while you watch the waves you start to fall asleep.");
            var resume = confirm("Do you wish to continue?");
        
            if(resume){
                Boat();
            }
        
            else{
                alert("Game over!");
            }
        }
    }
        
        
        
        else if(boat == "look in the boat" || boat == "boat"){
            
            var BoatLook = prompt("You see a cloak under the seat of the boat. When you look at it. It seems to look back. You feel it's fabric it feels like metal but it acts like fabric. \n -pick it up \n -throw it in the water \n -leave it in the boat.").toLowerCase();
            
            if(boat == "pick it up" || "keep"){
                alert("YOU GOT A CLOAK!");
            }
            
            else if(boat == "throw it in the water" || "water"){
                alert("The cloak hits the water and explodes throwing you and your boat into a tree.");
            }
            else if(boat == "leave it in the boat" || "leave it"){
                alert("You left it in the boat.");
            }
        }
        
        
               
        
        
        
            else{
                alert("I don't know what "+boat+" is!");
                boat();
        }
    
    function Water(){
        
        var water1 = prompt("You enter a dank swamp. \n -swim \n -follow path").toLowerCase();
        
        if(water1 == "swim" || water1 == "go swimming"){
            alert("You get eaten by a swamp monster...Game Over!");
        
        }
        
        else if(water1 == "follow path" || water1 == "follow"){
            var waterpath = prompt(" -eat lunch \n -go north");
            // Eat lunch event
            if (waterPath == "eat lunch"){
                alert("You eat your lunch, it was poisioned...how sad! Game Over!");
            }
            // Go north to castle event
            else if(waterPath == "noth"){
                alert("You travel north");
                Water();
            }
        }
        
        else{
            alert("I don't understand " + water1)
            water().toLowerCase();
            
        }
    
    
    }
    
    
        
        function Castle(){
            var insideCastle = prompt("- upstairs \n - downstairs /n - courtyard /n - balcony /n look").toLowerCase();
            
            switch(insideCastle){
                case "upstairs":
                    var upstairs = prompt("You walk a long flight of stairs to the top floor of the castle.");
                    
                    Castle();
                break;
                case "downstairs":
                    prompt("You go downstairs");
                
                break;
                case "courtyard":
                    prompt("You go courtyard");
                
                break;
                case "balcony":
                    prompt("You go balcony");
                
                break;
                default:
                    alert("I don't know what "+insideCastle+" is!");
                break;
              
            }
        }
}
 