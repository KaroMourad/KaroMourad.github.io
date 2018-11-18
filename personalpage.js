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
		let run = easeOutCubic(timeElapsed,startPosition,distance,duration);
		window.scrollTo(0,run);
		if(timeElapsed < duration) {
			requestAnimationFrame(animation);
		}
	}
	function easeOutCubic(t, b, c, d) {
		t /= d;
		t--;
		return c*(t*t*t + 1) + b;
	};

	requestAnimationFrame(animation);
}

let sectionEduc = document.querySelector('.sectionEd');

sectionEduc.addEventListener('click', function() {
	smoothScroll('.education',1000);
});


let sectionAbout = document.querySelector('.sectionAb');

sectionAbout.addEventListener('click', function() {
	smoothScroll('.aboutme',1000);
});

let sectionContact = document.querySelector('.sectionCon');

sectionContact.addEventListener('click', function() {
	smoothScroll('.contact',1000);
});


window.onscroll = function() {scrollButton()};
let x = document.querySelector(".scrollT");

function scrollButton() {
	x.style.opacity = "0.5";
	x.addEventListener("click",function() {
		smoothScroll("body",2000);
	});
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

