
//2 bars joins

bar1

document.getElementById('hamburger').addEventListener("mouseenter",animateBar);
document.getElementById('hamburger').addEventListener("mouseleave",animateBarReverse);

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


document.getElementById('hamburger').addEventListener("click",croix);

function croix(){
	document.getElementById("b1").style.width = "100%"
	document.getElementById("b1").animate([
	{ transform: 'rotate(0deg) translateY(12px)' }, 
	{ transform: 'rotate(45deg) translateY(12px)'}
	], { 

	duration: 300,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	iterations: 1,
	fill: "forwards",
	});

	document.getElementById("b2").animate([
	{ transform: 'rotate(0deg) translateY(-10px)' }, 
	{ transform: 'rotate(-45deg) translateY(-10px)'}
	], { 

	duration: 300,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	iterations: 1,
	fill: "forwards"
	});

	open();
}


function open(){
	document.getElementById('hamburger').removeEventListener("click",croix);
	document.getElementById('hamburger').addEventListener("click",croixReverse);

	document.getElementById('hamburger').removeEventListener("mouseenter",animateBar);
	document.getElementById('hamburger').removeEventListener("mouseleave",animateBarReverse);
}


function croixReverse(){
	document.getElementById("b1").style.width = "100%"
	document.getElementById("b1").animate([
	{ transform: 'rotate(0deg) translateY(10px)' }, 
	{ transform: 'rotate(45deg) translateY(12px)'}
	], { 

	duration: 300,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	iterations: 1,
	direction: "reverse",
	fill: "forwards"
	});

	document.getElementById("b2").animate([
	{ transform: 'rotate(0deg) translateY(-8px)' }, 
	{ transform: 'rotate(-45deg) translateY(-10px)'}
	], { 

	duration: 300,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	iterations: 1,
	direction: "reverse",
	fill: "forwards"
	});
	close()
}

function close(){
	document.getElementById('hamburger').removeEventListener("click",croixReverse);
	document.getElementById('hamburger').addEventListener("click",croix);

	document.getElementById('hamburger').addEventListener("mouseenter",animateBar);
	document.getElementById('hamburger').addEventListener("mouseleave",animateBarReverse);
}