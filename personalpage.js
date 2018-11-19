function smoothScroll(target,duration) {
	let targ = document.querySelector(target);
	let targetPosition = targ.getBoundingClientRect().top;
	let startPosition = window.pageYOffset;
	let distance = targetPosition - startPosition;
	let startTime = null;
	
	function animation(currentTime) {
		if(startTime === null) {
			startTime = currentTime;
		}
		let timeElapsed = currentTime - startTime;
		let run = easeInOutQuad(timeElapsed,startPosition,distance,duration);
		window.scrollTo(0,run);
		if(timeElapsed < duration) {
			requestAnimationFrame(animation);
		}
	}
	function  easeInOutQuad (t, b, c, d) {
		t /= d/2;
		if (t < 1) return c/2*t*t + b;
		t--;
		return -c/2 * (t*(t-2) - 1) + b;
	};

	requestAnimationFrame(animation);
}

let sectionEduc = document.querySelector('.sectionEd');

sectionEduc.addEventListener('click', function() {
	smoothScroll('.education',1000);
});


let sectionAbout = document.querySelector('.sectionAb');

sectionAbout.addEventListener('click', function() {
	smoothScroll('.aboutme',1200);
});

let sectionContact = document.querySelector('.sectionCon');

sectionContact.addEventListener('click', function() {
	smoothScroll('.contact',1500);
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

/*
window.onscroll = function() {scrollButton()};
let x = document.querySelector(".scrollT");
let listenscroll = false;

function scrollButton() {
	if(pageYOffset === 0) {
		x.style.opacity = "0"; 
		listenscroll = false;
	}
	if(window.pageYOffset > 350) {
		listenscroll = true;
		x.style.opacity = "0.5"; 
		if(listenscroll) {
			x.addEventListener("click",function() {
				listenscroll = false;
				smoothScroll("body",1500);
			});
		}
		
	}
}
*/
let x = document.querySelector(".scrollT");
let listenscroll = false;

window.onscroll = function() {
	if(window.pageYOffset <= 300) {
		x.style.opacity = "0"; 
		listenscroll = false;
		x.removeEventListener("click",listenScrollFunc);
	}
	if( !listenscroll && window.pageYOffset > 300 ) {
		listenscroll = true;
		x.style.opacity = "0.5";
		x.addEventListener("click",listenScrollFunc);
	}
}

function listenScrollFunc() {
	listenscroll = false;
	smoothScroll("body",1500);
}



