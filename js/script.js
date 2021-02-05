var form = document.querySelector("form");
var imgone = document.querySelector(".rolled-dice #one");
var imgtwo = document.querySelector(".rolled-dice #two");
var inputs = Array.from(document.querySelectorAll("input[type='text']"));

function randFace(){
    return ["img/diamond.jpg", "img/flower.jpg","img/heart.jpg","img/spade.jpg"][Math.floor(Math.random()*4)];
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    for(var i = 0; i<inputs.length; i++){
        if ((inputs[i].value !== "") >= 1 ) {
            imgone.src = randFace();
            imgtwo.src = randFace();
        } else {
            alert("you fogot to place your bet");
            break;
        }
       
            

    }
    
    
    
});
