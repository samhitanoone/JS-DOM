// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var header = document.getElementById("section-header");

header.addEventListener('click', function(){
    var off=document.getElementById("section");
    if (off.style.display == "none") {
        off.style.display = "block";
    } else {
        off.style.display = "none";
    }      
} );

// document.addEventListener("click", function() {
//     var section = document.getElementById("section");
//     if (section.style.display == "none") {
//       section.style.display = "block";
//     } else {
//       section.style.display = "none";
//     }
//   });
