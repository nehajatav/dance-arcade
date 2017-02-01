var score  = document.getElementById("score");
score.value = 0;
var tile = document.getElementById("tile");
document.addEventListener("keyup",function(event){
event.preventDefault();
if(event.keyCode==13){
score.value+=10;
score.textContent = 'Score: '+score.value;
var rand = Math.floor(Math.random()*4);
console.log(rand);
if(rand==0){
 tile.src="img/tr.png";
} else if(rand==1){
tile.src="img/bl.png";
} else if(rand==2){
tile.src="img/br.png";
} else {
tile.src="img/tl.png";
}
}
});
document.getElementById("reset").addEventListener("click", function(){
score.value = 0;
score.textContent = 'Score: '+score.value;
tile.src="img/reset.png";
this.blur();
});
