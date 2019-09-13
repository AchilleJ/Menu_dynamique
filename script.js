
//2 bars joins

bar1 = document.getElementById("b1");
bar2 = document.getElementById("b2");
hamburger = document.getElementById('hamburger');

hamburger.addEventListener("mouseenter",animateBar);
hamburger.addEventListener("mouseleave",animateBarReverse);

function animateBar(){
	bar1.animate([
	{ transform: 'translateY(0px)' }, 
	{ transform: 'translateY(8px)' }
	], { 

	duration: 300,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	iterations: 1,
	fill: "forwards"
	});

	bar2.animate([
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

	bar1.animate([
	{ transform: 'translateY(8px)' }, 
	{ transform: 'translateY(0px)' }
	], { 

	duration: 300,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	iterations: 1,
	fill: "forwards"
	});

	bar2.animate([
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

	bar1.style.width = "100%"
	bar1.animate([
	{ transform: 'rotate(0deg)' }, 
	{ transform: 'rotate(45deg) translateY(12px)'}
	], { 

	duration: 300,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	iterations: 1,
	fill: "forwards",
	});
	bar1.style.backgroundColor = 'red'

	bar2.animate([
	{ transform: 'rotate(0deg)' }, 
	{ transform: 'rotate(-45deg) translateY(-10px)'}
	], { 

	duration: 300,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	iterations: 1,
	fill: "forwards"
	});
	bar2.style.backgroundColor = 'red'
	open();
}


function open(){
	hamburger.removeEventListener("click",croix);
	hamburger.addEventListener("click",croixReverse);

	document.getElementById('barre_blanche').animate([
		{ width : '0%' }, 
		{ width : '13%' }
		], { 

		duration: 500,
		easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		iterations: 1,
		fill: "forwards",
		});

	document.getElementById('barre_rouge').animate([
		{ width : '0%' }, 
		{ width : '100%' }
		], { 

		duration: 800,
		delay: 100,
		easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		iterations: 1,
		fill: "forwards",
		});

	document.getElementById('langue').style.display = 'block';
	navAnimation('langue',500,'normal',400);

	document.getElementById('nav').style.display = 'block';

	navAnimation('li1',500,'normal',400);
	navAnimation('li2',600,'normal',400);
	navAnimation('li3',700,'normal',400);
	navAnimation('li4',800,'normal',400);

	hamburger.removeEventListener("mouseenter",animateBar);
	hamburger.removeEventListener("mouseleave",animateBarReverse);
}


function croixReverse(){
	bar1.style.width = "100%"
	bar1.animate([
	{ transform: 'rotate(0deg) ' }, 
	{ transform: 'rotate(45deg) translateY(12px)'}
	], { 

	duration: 300,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	iterations: 1,
	direction: "reverse",
	fill: "forwards"
	});
	bar1.style.backgroundColor = 'white';

	bar2.animate([
	{ transform: 'rotate(0deg) ' }, 
	{ transform: 'rotate(-45deg) translateY(-10px)'}
	], { 

	duration: 300,
	easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
	iterations: 1,
	direction: "reverse",
	fill: "forwards"
	});
	bar2.style.backgroundColor = 'white';
	close()
}

function close(){
	hamburger.removeEventListener("click",croixReverse);
	hamburger.addEventListener("click",croix);

	document.getElementById('barre_rouge').animate([
		{ width : '100%' }, 
		{ width : '0%' }
		], { 

		duration: 600,
		easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		iterations: 1,
		fill: "forwards",
		});

	document.getElementById('barre_blanche').animate([
		{ width : '13%' }, 
		{ width : '0%' }
		], { 

		duration: 300,
		easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		iterations: 1,
		delay: 350,
		fill: "forwards",
		});

	navAnimation('li1',0,'reverse',200);
	navAnimation('li2',0,'reverse',200);
	navAnimation('li3',0,'reverse',200);
	navAnimation('li4',0,'reverse',200);

	setTimeout(function(){document.getElementById('nav').style.display = 'none';}, 200);

	navAnimation('langue',0,'reverse',400);
	setTimeout(function(){document.getElementById('langue').style.display = 'none';}, 400);

	hamburger.addEventListener("mouseenter",animateBar);
	hamburger.addEventListener("mouseleave",animateBarReverse);
}



function navAnimation(id,ndelay,RevORnot,duree){

	document.getElementById(id).animate([
		{ opacity : 0, }, 
		{ opacity : 0.9,}
		], { 

		duration: duree,
		easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		delay: ndelay,
		direction: RevORnot,
		iterations: 1,
		fill: "forwards",
		});
}

