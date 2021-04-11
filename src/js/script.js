// navbar
window.addEventListener('scroll', function(){
    const navbar= document.querySelector('nav')
    const body= document.querySelector('body')
    navbar.classList.toggle('active', window.scrollY>0)
    if(document.body.clientWidth>767){
        body.classList.toggle('active', window.scrollY>1500)
    } else{
        body.classList.toggle('active', window.scrollY>2000)
    }
});




// mobileNav
function upper(){
    const upper= document.querySelector('.mobile');
    upper.classList.toggle('show');
}
// aside
const aside= document.querySelector('aside');
function show(){
    aside.classList.toggle('show');
}

// closeAside
function remove(){
    aside.classList.remove('show')
}



// 
document.querySelector('.glider').addEventListener('glider-slide-visible', function(event){
    var glider = Glider(this);
    console.log('Slide Visible %s', event.detail.slide)
});
document.querySelector('.glider').addEventListener('glider-slide-hidden', function(event){
    console.log('Slide Hidden %s', event.detail.slide)
});
document.querySelector('.glider').addEventListener('glider-refresh', function(event){
    console.log('Refresh')
});
document.querySelector('.glider').addEventListener('glider-loaded', function(event){
    console.log('Loaded')
});

window._ = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1, //'auto',
    slidesToScroll: 1,
    itemWidth: 150,
    draggable: true,
    scrollLock: false,
    dots: '#dots',
    rewind: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToScroll: 'auto',
                itemWidth: 300,
                slidesToShow: 'auto',
                exactWidth: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToScroll: 4,
                slidesToShow: 4,
                dots: false,
                arrows: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToScroll: 3,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
                dots: false,
                arrows: false,
                scrollLock: true
            }
        }
    ]
});


const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

let index = 0;
display(index);
function display (index) {
	slides.forEach((slide) => {
		slide.style.display = 'none';
	});
	slides[index].style.display = 'flex';
}

function nextSlide () {
	index++;
	if (index > slides.length - 1) {
		index = 0;
	}
	display(index);
}
function prevSlide () {
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	display(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
