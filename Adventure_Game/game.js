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


var lives = {
    lifeLeft: 100,
}

var checkInv = function(){
    alert("Gold Coins: "+inventory.coins.gold+"\n Silver coins: " +inventory.coins.silver+"\n Copper coins: "+inventroy.coins.copper);
}


var inventory = {
    coins:{
        gold:10,
        silver:12,
        copper:2000,
    },
    glasses: 0,
    pocketNote: 1,
    log: 0,
    
    
}

Game();

function Game(){
//Island();
    var islandNames = ["Island"];
    
    alert("Stolen "+islandNames[0]+"!" );
    
    var playerName = prompt("What is your name?");
    
    alert("Welcome to the Stolen Island "+ playerName);
    
    Boat();
    
    function Boat(){
        var boat = prompt("You wake up...and find your self in a small boat. You notice that you have a horrible headache. \n -look at the island \n -look in the water \n -look in the boat.").toLowerCase();
        
        if(boat == "look at the island" || boat == "island"){
            
            var islandLook = confirm("You see a small island with only 3 trees to the north. You see a small box poking out of the sand.");
            Boat();
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
        
        
        
    else if(boat == "look in the boat" || boat == "boat"){
            
            var boatLook = prompt("You see a cloak under the seat of the boat. When you look at it. It seems to look back. You feel it's fabric it feels like metal but it acts like fabric. \n -keep it \n -leave it \n -throw it in the water").toLowerCase();
            
    if(boatLook == "keep it" || "keep"){
                alert("You got a cloak!");
                inventory.cloak = inventory.cloak + 1;
        Island();
    }
    else if(boatLook == "leave it"){
        alert("You left it!");

    }   
        
            else{
                alert("I don't know what "+boat+" is!");
                boat();
            }
            }
    }
        
    
      
    
    function Island(){
      // You can only get to this if you take the cloak.  
        var island1 = prompt("When you take the cloak the boat disapers and you end up on the sand. \n -go to the trees \n -go to the box").toLowerCase();
        //Go to the trees
        if(island1 == "go to the trees" || island1 == "trees"){
            Trees();
        }
        //They go to the box
        else if(island1 == "go to the box" || island1 == "box"){
            var box = alert("You start to walk and every time you step it starts to move farther into the sand. You get there and realize that it's not a box it's a hole you fall down you hit the bottom and die... how sad")

        }
        }
    
    function Trees(){
            var insideTrees = prompt("You get to the trees \n- brake off a branch \n -dig \n -pull off bark").toLowerCase();
            
           switch(insideTrees){
                case "branch":
                   var branch = prompt("You brake off the branch and water pours out. You drink the water and get powers. You start to fly and you fly over the water looking down you see all the creachers... good thing you didn't go swimming. You win!!!!!!!!!!!!!");
                    
                    Trees();
                //break;
               // case "downstairs":
                    //prompt("You go downstairs");
                
                //break;
                //case "courtyard":
                    //prompt("You go courtyard");
                
                //break;
                //case "balcony":
                    //prompt("You go balcony");
                
                //break;
                //default:
                    //alert("I don't know what "+insideCastle+" is!");
                //break;
              
            //}
}