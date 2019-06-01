// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById("myButton");
var boxes = document.getElementsByClassName("box");
var len =  boxes.length;

button.addEventListener('click', function(){
    for(var i=0 ; i<len; i++){
        boxes[i].style.backgroundColor="blue";
     }
    
    })

