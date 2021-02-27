var form = document.querySelector("form");
var imgone = document.querySelector(".rolled-dice #one");
var imgtwo = document.querySelector(".rolled-dice #two");
var imgthree = document.querySelector(".rolled-dice #three");
var inputs = Array.from(document.querySelectorAll("input[type='number']"));
var bets = [];


var add = document.querySelectorAll(".add");
var sub = document.querySelectorAll(".sub");

        

var isChecked = false;

function randFace(){
    return ["diamond", "flower","heart","spade", "anchors", "crown"][Math.floor(Math.random()*6)];
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
        break;
           
    }

    

    if (isChecked) {
        imgone.src = 'img/' + rolledDiceResult[0] + '.png';
        imgtwo.src = 'img/' + rolledDiceResult[1] + '.png';
        imgthree.src = 'img/' + rolledDiceResult[2] + '.png';
        
        for (let index = 0; index < rolledDiceResult.length; index++) {
            const chance = rolledDiceResult[index];


            for (let i = 0; i < bets.length; i++) {
                const bet = bets[i];

                if (chance === bet.card) {
                    console.log("results are equal");
                    
                } else {
                   console.log("results are not equal");
                }
                
            }
            
        }
        
    } else {
        alert("please insert atlest one value");
    }

    var counter = 0, card_1, card_2, card_3, randCards = [];
    function randomCards(){
         card_1 = randFace();
         card_2 = randFace();
         card_3 = randFace();
        imgone.src = 'img/' + card_1 + '.png';
        imgtwo.src = 'img/' + card_2 + '.png';
        imgthree.src = 'img/' + card_3 + '.png';
        counter++;
        if(counter == 50){
            clearInterval(intervals);
            
            console.log(card_1, card_2, card_3);
            randCards[0] = card_1;
            randCards[1] = card_2;
            randCards[2] = card_3;

            console.log(randCards);

        }
        console.log(card_1, card_2, card_3);

        console.log(counter);

    }

    
    var intervals = setInterval(randomCards, 100);

    


    console.log(bets);
    
    
});

// setInterval(() => {
//         document.body.style['background-color'] = randColor();
// }, 200);


add.forEach(addBtn => {
    addBtn.addEventListener("click", function(e){
        var value = parseInt(e.target.previousElementSibling.firstChild.nodeValue), plus;
        if(!(value >= 10)){
            plus = value + 1;
            e.target.previousElementSibling.textContent = plus;
        } else {
            alert("$10 is the maximum amount you can bet for each card");
        }

        for(var i = 0; i<inputs.length; i++){
            if(e.target.parentElement.parentElement.dataset.title == inputs[i].id){
                inputs[i].value =  plus;
            }
        }

    });
});

function randColor(){
    return ["#736a45", "#45736f","#734555","#456f73", "#4a7345", "#734545"][Math.floor(Math.random()*6)];
}








sub.forEach(subBtn => {
    subBtn.addEventListener("click", function(e){
        let value = parseInt(e.target.nextElementSibling.firstChild.nodeValue), minus;
        if(!(value <= 0)){
            minus = value - 1;
            e.target.nextElementSibling.textContent =  minus;
        } else {
            alert("$0 is the minimum amount you can bet for each card");
        }

        for(var i = 0; i<inputs.length; i++){
            if(e.target.parentElement.parentElement.dataset.title == inputs[i].id){
                inputs[i].value =  minus;
            }
        }

    });
    
});

