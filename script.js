function openNav() {
  document.getElementById("mobile").style.width = "250px";
};

function closeNav() {
  document.getElementById("mobile").style.width = "0";
};

function show(){
  document.querySelector(".laptop").style.color = "#d10024";
  document.querySelector(".laptop").style.borderBottom = "2px solid #d10024";
};


const slider = document.querySelector('.slideshow-container');
const slides = slider.querySelectorAll('.fade');

const slideCount = slides.length;
let activeSlide = 0;
slides[activeSlide].classList.add('active');


setInterval(countDown, 1000);

setInterval(() => {
	slides[activeSlide].classList.remove('active');
	activeSlide++;
	if (activeSlide === slideCount) {
		activeSlide = 0;
	}
	slides[activeSlide].classList.add('active');
}, 3000);

const sliders = document.querySelector('.slideshow-containers');
const sliding = sliders.querySelectorAll('.fades');

const slideCounts = sliding.length;
let activeSlides = 0;
sliding[activeSlides].classList.add('active');

setInterval(() => {
	sliding[activeSlides].classList.remove('active');
	activeSlides++;
	if (activeSlides === slideCounts) {
		activeSlides = 0;
	}
	sliding[activeSlides].classList.add('active');
}, 5000);



const year = new Date().getFullYear();
const newYear = ` 22 march ${year}`;
const day = document.querySelector('.day')
const hour = document.querySelector('.hour')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')

const dates = document.querySelector(".date")

function countDown(){
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const totalSeconds = (newYearDate - currentDate) / 1000;

  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const days = Math.floor((totalSeconds) /(3600*24));

  day.innerHTML = FormatTime(days);
  hour.innerHTML =  FormatTime(hours);
  min.innerHTML =   FormatTime(minutes);
  sec.innerHTML = FormatTime(seconds);
  dates.innerHTML = FormatTime(currentDate);

  function FormatTime(time){
    return time < 10 ? `0${time}` : time;
  }
  
}
// countDown();
// setInterval(countDown, 1000);











