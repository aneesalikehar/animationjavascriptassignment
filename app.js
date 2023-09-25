
var left = 0;
function abc(){
    var character = document.getElementById('character')
        if(event.keyCode === 68){
            left = left + 10;
            character.style.left = left + 'px'
        }
    var character = document.getElementById('character')
        if(event.keyCode === 65){
            left = left + 10;
            character.style.left = left + 'px';
            character.src = 'img/captainamerica-chargingstar.gif' 
            character.style.width = '600px'
            character.style.height = '70vh'
            character.style.top = '35%'
        }

}
var right = 0;
function def(){
    var character = document.getElementById('character2')
    console.log(event.keyCode)
        if(event.keyCode === 75){
            right = right + 10;
            character.style.right = right + 'px'
        }
        if(event.keyCode === 76){
            right = right + 10;
            character.style.right = right + 'px'
            character.src = 'img/iron1.gif'
            character.style.width = '700px'
            character.style.height = '100vh'
            character.style.top = '9%'

        }
}

document.addEventListener('keydown',abc);
document.addEventListener('keydown',def);


