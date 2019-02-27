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
    Cloak: 0,
    
    
}

Game();

function Game(){
//Island();
//Box();
    var islandNames = ["Island"];
    
    alert("Stolen "+islandNames[0]+"!" );
    
    var playerName = prompt("What is your name?");
    
    while(!confirm("Are you sure you want "+playerName+" as a name?")){
        playerName = prompt("What name do you want?")
    }
    
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
        
    if(boat == "look in the boat" || boat == "boat"){
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
                boat();
            }
            }
        
         else{
            alert("I don't know what"+boat+" is.")
            
        
        Boat();
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
            Box();

        }
        }
    
    
    
    
    function Box(){
        var box = prompt("You get to the box and instead of a box it was a hole you fall down, as you hit the bottom water starts filling it up, and the top of the hole closes up.").toLowerCase();
        
        if(box == "cloak" || box == "use cloak" && inventory.cloak >= 1){
            
                var useCloak = confirm("You sure");
            
            if(useCloak){
                
                alert("You take out the cloak and teleport out of the hole to the trees.");
                
            }
            Trees();
        
        }
    }
  
    
    function Trees(){
            var insideTrees = prompt("You get to the trees. You see a hill farther away. \n- brake off a branch \n -dig \n -pull off bark \n -go swimming \n -go to hill").toLowerCase();
            //This is a game ending so you can win.
           switch(insideTrees){
                case "brake off a branch":
                   alert("You brake off the branch and water pours out. You drink the water and get powers. You start to fly and you fly over the water looking down you see all the creatures... good thing you didn't go swimming. You win!!!!!!!!!!!!!");

                break;
                case "dig":
                    alert("You dig and dig and find nothing.");
                
                   Trees();
                break;
                case "pull off bark":
                    prompt("You pull off the bark and see water you drink it.").toLowerCase();
                    alert("That was poison hahaha...");
                   
                    break;
                case "swim":
                    alert("You go swimming, fall asleep in the water, and die!").toLowerCase();
                   
                   break;
               case "hill":
                   alert("You go to the hill").toLowerCase();
                   Hill();

                }
                
           }
    function Hill(){
        var hill = prompt("").toLowerCase();
    }
        
    }
