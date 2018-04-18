// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


//simple function to detect 'click'
function clickedWindow(){
	console.log("clicked");
}

window.addEventListener('click',clickedWindow);

//to change the background color of the nav bar
window.addEventListener('load', function(){
	//console.log("window loaded");
	var x = 0;
	var headerText = document.getElementById("Home");
	var colors = ["#fce4ec", "#f8bbd0", "#f48fb1", "#f06292", "#ec407a","#e91e63","#d81b60","#c2185b","#ad1457","#f50057" ];
	headerText.addEventListener('click', function(){
			this.style.background = colors[x];
		   	x += 1;
	console.log(this.style.backgroundColor);
	});
});

//scroll
var x = setInterval(function(){
  window.scrollBy(0, 3);

}, 10);

// and to clear the interval (stop the scroll)
clearInterval(x);

// var lItem = document.getElementById('home-link');
// var mySection = lItem.getAttribute('data-sectionId');
// lItem.addEventListener('click',function(){
// 	var offset = mySection.offsetTop();
// 	window.scrollTo(offset);
// 	clearInterval(offset);
// });



// remember the data attribute for the html tags
// you can set it to data-anything="anything else so it can be used to store the id of the section to scroll to"
//<li id="about-link" data-sectionid="#about">About</li>

// ******************* ASSIGNMENT
// Step1: Take each <li> (menu item) in a variable [var lItem = document.getElementById('about-link')]
// Step2: Find corresponding section in another variable [var mySection = li.getAttribute('data-sectionid')];
// Step3: Add click event listener to lItem with a function which scrolls down to mySection (get the offset of the section from top)
// Step4: What if you are at a lower placed section and need to go back to a section above
// Step5: Improve the logic/make it more generic wherever you think
