function toggleSidebar() {
    "use strict";
    document.getElementById("sidebar").classList.toggle('active');
}

document.getElementById("Social-Drop").onclick = function() {SocialDropFun()};

/*function SocialDrop() {
    document.getElementById("Social-Sublist").classList.toggle("show");
}*/

$(document).ready(function(){
  $("#PAC-checkbox").click(function(){
    $("#PAC-EVENTS").toggle();
  });
});