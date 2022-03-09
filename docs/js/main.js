$(document).ready(function() {
    $("#greeting").hide();
})
$(window).on('load', function () {
     $("#load").hide(); 
     $("#greeting").show();
     setTimeout(function() {
         $("#greeting").hide();
     }, 1500);
});

var p1_button = document.querySelector(".project1");
var p2_button = document.querySelector(".project2");
var p3_button = document.querySelector(".project3");
var works_button = document.querySelector(".work");
var about_button = document.querySelector(".about");

p1_button.addEventListener("click", go_p1);
p2_button.addEventListener("click", go_p2);
p3_button.addEventListener("click", go_p3);
works_button.addEventListener("click", go_works);
about_button.addEventListener("click", go_about);

function go_p1(){location.href = "/skim_p1.html";};
function go_p2(){location.href = "/skim_p2.html";};
function go_p3(){location.href = "/skim_p3.html";};

function go_works(){location.href = "/skim_work.html";};
function go_about(){location.href = "/skim_about.html";};
