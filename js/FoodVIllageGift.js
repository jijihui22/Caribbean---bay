/* ----------------- button_list------------------- */
$.getJSON("./data/content.json", initList)
let allData = [],
  filtered = [],
  list = $('.list'),
  buttons = $('.list_item button');
function initList(data) {
  allData = data
  addItems('type', '푸드코트');
}
function addItems(sort, value) {
  let listHtml = '';
  if (value == '' || value == '전체보기') {
    filtered = allData
  } else {
    filtered = allData.filter(lst => lst[sort] == value)
  }

  $.each(filtered, (i, item) => {
    listHtml += `
    <li>
      <h6 class="item-title">${item.title}</h6>
      <a href="#"><img src="${item.image}" alt="${item.title}"></a>
      <p>${item.type}</p>
    </li>
    `
  })
  list.html(listHtml)
  buttons.click(function () {
    let value = $(this).attr("data-filter");
    let type = $(this).attr("data-type");
    addItems(type, value)
  })
}

/* ----------------- food slide ------------------- */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: '.sec7_switch_next',
    prevEl: '.sec7_switch_prev',
  },  
  a11y: { // 웹접근성 
		enabled: true,
		prevSlideMessage: '이전 슬라이드',
		nextSlideMessage: '다음 슬라이드',   
		slideLabelMessage: '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
	},
})

/* ----------------- s_ani ------------------- */
let animation = $(".animation");


$(window).scroll(function () {
  let windowOST = $(this).scrollTop();

  animation.each(function () {
    if ($(this).offset().top - 700 <= windowOST) {
      $(this).addClass('active')
    } else {
      $(this).removeClass('active')
    }
  })
})

/* ----------------- mouse point ------------------- */
let mouse = $('.mouse'),
  cursor = $('.cursor');

mouse.mousemove(function (e) {
  let mouseX = e.pageX,
    mouseY = e.pageY;
  cursor.css({ left: mouseX + 'px', top: mouseY + 'px' });
  cursor.fadeIn();
});
mouse.mouseleave(function (e) {
  cursor.fadeOut();
});