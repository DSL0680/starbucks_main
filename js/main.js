console.log('js load');

const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input')
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    // .search 아이콘이 눌려도 search input 창에 focus가 가도록.
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function () {
    searchEl.classList.add('focused');
    // html class 추가.
    searchInputEl.setAttribute('placeholder', '통합검색');
    // html 속성 추가.
});
searchInputEl.addEventListener('blur',function() {
    searchEl.classList.remove('focused');

    searchInputEl.setAttribute('placeholder','');
    
})




const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(
    // _.throttle(function, function이 실행되는 시간의 단위 ms)
    function() {
        // console.log('scroll!');
        // console.log(window.scrollY);
        if(window.scrollY> 500){
            //badge hide
            // badgeEl.style.display = 'none'
            // gsap.to(animation 처리를 할 요소, 지속시간, 옵션);
            gsap.to(badgeEl, .4, {
                opacity: 0,
                display: 'none'
            });
            //to top button show
            gsap.to(toTopEl,.2, {
                x:0,
            })
            
        }else {
            //badge show
            // badgeEl.style.display = 'block'
            gsap.to(badgeEl, .4, {
                opacity: 1,
                display: 'block'
            });
            //to top button hide
            gsap.to(toTopEl, .2, {
                x: 100,
            });
        }
    }, 300));
// document는 html 그자체도 window는 보고있는 화면 자체다.
toTopEl.addEventListener('click',function() {
   gsap.to(window, .7, {
       scrollTo: 0
    //gsap.scrollTo plugin 추가로 필요함.
   }); 
});



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay:(index+1) *.7,
        // gsap 이 제공하는 delay
        // index는 function이 돌때마다 0부터 1씩 올라간다.
        opacity: 1,
    });
});



// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true // 반복 재생 여부
  })


new Swiper('.promotion .swiper-container',{
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,//사이여백
    centeredSlides: true, //1번 슬라이드가 가운데에 보이기 
    loop: true,
    autoplay: {
        delay: 5000 //ms
    },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable:true,
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next',
    }
});


new Swiper('.awards .swiper-container', {
    slidesPerView: 5,
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next',
    }
})


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function() {
    isHidePromotion = !isHidePromotion
    // on off
    if(isHidePromotion){
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
});

function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min))
}
function floatingObject(selector, delay, size) {
    gsap.to(
        selector, random(1.5, 2.5), {
            y: size,
            repeat: -1,
            yoyo: true,  // 반복  
            ease: Power1.easeInOut, //https://greensock.com/docs/v2/Easing 애니메이션 움직임속도제어
            delay: random(0, delay),
        }
    );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



const spyEls =document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement : spyEl,
            // 보여짐 여부를 감시할 요소를 지정 
            triggerHook : 0.8,
            // viewport 시작하는위치 0 끝나는 위치 1
            // .8에 spyEl이 보여진다고 판단이 되면 setClassToggle이 실행이된다.
        })
        .setClassToggle(spyEl, 'show')
        // Scene에서 해당이 되는 Class들에게 show라는 class를 추가시킴
        .addTo(new ScrollMagic.Controller());
        // 컨트롤러에 장면을 할당.
})


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
