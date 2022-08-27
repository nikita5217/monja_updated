const absoluteImg1 = document.querySelector('.img-1');
const absoluteImg2 = document.querySelector('.img-2');
const absoluteImg3 = document.querySelector('.img-3');
const absoluteImg4 = document.querySelector('.img-4');
const absoluteImg5 = document.querySelector('.img-5');
const absoluteImg6 = document.querySelector('.img-6');
const topText = document.querySelector('.top-text>p');
const bottomText = document.querySelector('.bottom-text>p');
const leftTextes = document.querySelectorAll('.left-text>p');
const leftTextesList = document.querySelectorAll('.left-text ul li p');
const rightTextesList = document.querySelectorAll('.rigth-text ul li p');
const rightTextes = document.querySelectorAll('.rigth-text>p');
const leftList = document.querySelector('.list-3 ul');
let pageScroll;

setTimeout(function() {
	topText.style.transform = 'none';
	topText.style.opacity = '1';
}, 500);


window.addEventListener('scroll',()=>{
	pageScroll = window.pageYOffset/(window.innerWidth/100);
	if (window.innerWidth > 500) {
		if (pageScroll > 36){
			leftTextes[0].style.transform = 'none';
			leftTextes[0].style.opacity = '1';
		}
		if (pageScroll > 41) {
			absoluteImg1.style.transform = 'translateX(-9vw)';
			absoluteImg1.style.opacity = '1';
		}
		if (pageScroll > 45) {
			for (var i = 4 - 1; i >= 0; i--) {
				leftTextesList[i].style.transform = 'none';
				leftTextesList[i].style.opacity = '1';
			}
		}
		if (pageScroll > 74) {
			absoluteImg2.style.transform = 'translateX(9vw)';
			absoluteImg2.style.opacity = '1';
			rightTextes[0].style.transform = 'none';
			rightTextes[0].style.opacity = '1';
		}
		if (pageScroll > 106) {
			absoluteImg3.style.transform = 'translateX(-7vw)';
			absoluteImg3.style.opacity = '1';
			for (var i = 8 - 1; i >= 4; i--) {
				leftTextesList[i].style.transform = 'none';
				leftTextesList[i].style.opacity = '1';
			}
		}
		if (pageScroll > 140) {
			absoluteImg4.style.transform = 'translateX(11vw)';
			absoluteImg4.style.opacity = '1';
		}
		if (pageScroll > 145){
			for (var i = 3 - 1; i >= 0; i--) {
				rightTextesList[i].style.transform = 'none';
				rightTextesList[i].style.opacity = '1';
			}
		}
		if (pageScroll > 175) {
			absoluteImg5.style.transform = 'translateX(-10vw)';
			absoluteImg5.style.opacity = '1';
			leftList.style.transform = 'none';
			leftList.style.opacity = '1';
		}
		if (pageScroll > 212) {
			absoluteImg6.style.transform = 'translateX(10vw)';
			absoluteImg6.style.opacity = '1';
			for (var i = 7 - 1; i >= 3; i--) {
				rightTextesList[i].style.transform = 'none';
				rightTextesList[i].style.opacity = '1';
			}
		}
		if (pageScroll > 256) {
			bottomText.style.transform = 'none';
			bottomText.style.opacity = '1';
		}
	} else{
		if (pageScroll > 70){
			leftTextes[0].style.transform = 'none';
			leftTextes[0].style.opacity = '1';
		}
		if (pageScroll > 5) {
			absoluteImg1.style.transform = 'translateX(0vw)';
			absoluteImg1.style.opacity = '1';
		}
		if (pageScroll > 100) {
			for (var i = 4 - 1; i >= 0; i--) {
				leftTextesList[i].style.transform = 'none';
				leftTextesList[i].style.opacity = '1';
			}
		}
		if (pageScroll > 165) {
			absoluteImg2.style.transform = 'translateX(0vw)';
			absoluteImg2.style.opacity = '1';
		}
		if (pageScroll > 225){
			rightTextes[0].style.transform = 'none';
			rightTextes[0].style.opacity = '1';
		}
		if (pageScroll > 275) {
			absoluteImg3.style.transform = 'translateX(0vw)';
			absoluteImg3.style.opacity = '1';
		}
		if (pageScroll > 340) {
			for (var i = 8 - 1; i >= 4; i--) {
				leftTextesList[i].style.transform = 'none';
				leftTextesList[i].style.opacity = '1';
			}
		}
		if (pageScroll > 430) {
			absoluteImg4.style.transform = 'translateX(0vw)';
			absoluteImg4.style.opacity = '1';
		}
		if (pageScroll > 485){
			for (var i = 3 - 1; i >= 0; i--) {
				rightTextesList[i].style.transform = 'none';
				rightTextesList[i].style.opacity = '1';
			}
		}
		if (pageScroll > 570) {
			absoluteImg5.style.transform = 'translateX(0vw)';
			absoluteImg5.style.opacity = '1';
		}
		if (pageScroll > 635){
			leftList.style.transform = 'none';
			leftList.style.opacity = '1';
		}
		if (pageScroll > 715) {
			absoluteImg6.style.transform = 'translateX(0vw)';
			absoluteImg6.style.opacity = '1';
		}
		if (pageScroll >794) {
			for (var i = 7 - 1; i >= 3; i--) {
				rightTextesList[i].style.transform = 'none';
				rightTextesList[i].style.opacity = '1';
			}
		}
		if (pageScroll > 895) {
			bottomText.style.transform = 'none';
			bottomText.style.opacity = '1';
		}
	}
	
})