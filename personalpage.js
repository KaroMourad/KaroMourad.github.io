let myheader = document.getElementById("header");
let sectionEduc = document.querySelector('.sectionEd');
let sectionAbout = document.querySelector('.sectionAb');
let sectionContact = document.querySelector('.sectionCon');
let ed = document.getElementById("education");
let ab = document.getElementById("about");
let co = document.getElementById("contact");
let body = document.body;
let welcome = document.querySelector(".welcome");

sectionEduc.addEventListener('click', function(event) {
	event.preventDefault();
	window.scrollTo({
		top: ed.offsetTop-100,
		behavior: "smooth"
	});
});

sectionAbout.addEventListener('click', function(event) {
	event.preventDefault();
	window.scrollTo({
		top: ab.offsetTop-100,
		behavior: "smooth"
	});
});

sectionContact.addEventListener('click', function(event) {
	event.preventDefault();
	window.scrollTo({
		top: co.offsetTop-100,
		behavior: "smooth"
	});
});

welcome.addEventListener('click', function(event) {
	event.preventDefault();
	window.scrollTo({
		top: body.offsetTop,
		behavior: "smooth"
	});
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

let x = document.querySelector(".scrollT");
let listenscroll = false;

let scrolled = false;
let myimg = document.getElementById("myimg");

window.onscroll = function() {
	if(!scrolled) {
		myheader.style.height = "6rem";
		myimg.style.height = "4rem";
		myimg.style.width = "4rem";
		scrolled = true;
	}
	if(scrolled && window.pageYOffset === 0 ) {
		myheader.style.height = "12rem";
		myimg.style.height = "8rem";
		myimg.style.width = "8rem";
		scrolled = false;
	}
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
	window.scrollTo({
		top: body.offsetTop,
		behavior: "smooth"
	});
}



