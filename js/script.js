var form = document.querySelector("form");
var imgone = document.querySelector(".rolled-dice #one");
var imgtwo = document.querySelector(".rolled-dice #two");
var imgthree = document.querySelector(".rolled-dice #three");
var inputs = Array.from(document.querySelectorAll("input[type='number']"));
var bets = [];

var isChecked = false;

function randFace(){
    return ["diamond", "flower","heart.","spade", "anchors", "crown"][Math.floor(Math.random()*4)];
}

function Eachbet(card, amount){
    this.card = card;
    this.amount = amount;
}

function RolledDice(face, source){
    this.face = face;
    this.soucre = source;
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    for(var i = 0; i<inputs.length; i++){
        if (inputs[i].value !== "" ) {
            var bet = new Eachbet(inputs[i].id, inputs[i].value);
            bets.push(bet);
            if (bets.length > 0) {
                var rolledDiceResult = [randFace(), randFace(), randFace()];
                isChecked = true;
            }
  
        } 
           
    }

    if (isChecked) {
        for (let index = 0; index < rolledDiceResult.length; index++) {
            const chance = rolledDiceResult[index];

            for (let i = 0; i < bets.length; i++) {
                const bet = bets[i];
                if (chance === bet.card) {
                    alert("results are equal");
                    
                } else {
                    alert("results are not equal");
                }
                
            }
            
        }
        
    } else {
        alert("please insert atlest one value");
    }

    console.log(bets);
    
    
});

