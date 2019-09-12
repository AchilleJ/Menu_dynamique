
//2 bars joins

function animateBar(){
	document.getElementById("b1").animate([
	{ transform: 'translateY(0px)' }, 
	{ transform: 'translateY(8px)' }
	], { 

	duration: 300,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	iterations: 1,
	fill: "forwards"
	});

	document.getElementById("b2").animate([
	{ transform: 'translateY(0px)' }, 
	{ transform: 'translateY(-8px)' }
	], { 

	duration: 300,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	iterations: 1,
	fill: "forwards"
	});

}

function animateBarReverse(){
	document.getElementById("b1").animate([
	{ transform: 'translateY(8px)' }, 
	{ transform: 'translateY(0px)' }
	], { 

	duration: 300,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	iterations: 1,
	fill: "forwards"
	});

	document.getElementById("b2").animate([
	{ transform: 'translateY(-8px)' }, 
	{ transform: 'translateY(0px)' }
	], { 

	duration: 300,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	iterations: 1,
	fill: "forwards"
	});

}

document.getElementById('hamburger').addEventListener("mouseenter",animateBar);

document.getElementById('hamburger').addEventListener("mouseleave",animateBarReverse);

/*
function croix(){
	document.getElementById("b1").animate([
	{ transform: 'rotate(0deg)' }, 
	{ transform: 'rotate(45deg)' }
	], { 

	duration: 300,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	iterations: 1,
	fill: "forwards"
	});

	document.getElementById("b2").animate([
	{ transform: 'rotate(0deg)' }, 
	{ transform: 'rotate(-45deg)' }
	], { 

	duration: 300,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	iterations: 1,
	fill: "forwards"
	});

document.getElementById('hamburger').addEventListener("click",croix);

}
*/




