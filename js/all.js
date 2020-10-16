$(document).ready(function () {
	$('.parallax-window1').parallax({
		imageSrc: '../myself_img/banner1.jpeg'
	});
	$('.parallax-window2').parallax({
		imageSrc: '../myself_img/banner2.jpg'
	});
	$('.parallax-window3').parallax({
		imageSrc: '../myself_img/banner1.jpeg'
	});

	// 監聽 header 下的每個 a
	$('.header').on('click', 'a', function (event) {
		event.preventDefault();
		//取得個別點擊時的href，就是個別id的區塊 e.g #page1
		const anchor = $(this).attr('href');
		//每個區塊的最上方距離 document 最上方有多遠
		const linkScroll = $(anchor).offset().top;
		// 加入stop() 讓選單滑動時不用等到動畫全程跑完就可以點選其他選單
		// 因為 header 設定 fixed 所以扣掉高度60
		$('html,body').stop().animate({
			scrollTop: linkScroll - 60
		}, 600);
	});
});


window.onscroll = function (e) {
	console.log(e.path[1].scrollY);
	let scrollY = e.path[1].scrollY;
	if (scrollY > 150 && scrollY < 850) {
		aboutScrolly();
	} else if (scrollY > 600 && scrollY < 1900) {
		skillScrolly();
	} else if (scrollY > 1850 && scrollY < 2900) {
		contactScrolly();
	} else {
		removeScrolly();
	}
};

let aboutScrolly = function () {
	let aboutcontent = document.querySelector('.aboutcontent');
	aboutcontent.classList.add('active');
}

let skillScrolly = function () {
	let skillcontent = document.querySelector('.skillcontent');
	skillcontent.classList.add('active');
}

let contactScrolly = function () {
	let contactcontent = document.querySelector('.contactcontent');
	contactcontent.classList.add('active');
}

let removeScrolly = function () {
	let aboutcontent = document.querySelector('.aboutcontent');
	let skillcontent = document.querySelector('.skillcontent');
	let contactcontent = document.querySelector('.contactcontent');
	aboutcontent.classList.remove('active');
	skillcontent.classList.remove('active');
	contactcontent.classList.remove('active');
}

// works 圖片大小變化
window.onload = function () {
	let works = document.querySelectorAll('.allportfolio ul li');
	console.log(works.length);
	for (let i = 0; i < works.length; i++) {
		works[i].addEventListener('mousemove', MouseMoveFn, false);
		works[i].addEventListener('mouseout', MouseOutFn, false);
	}
}

let MouseMoveFn = function () {
	let worksli = this.firstElementChild.lastElementChild.classList;
	this.classList.add('active');
	worksli.add('active');
}

let MouseOutFn = function () {
	let worksli = this.firstElementChild.lastElementChild.classList;
	this.classList.remove('active');
	worksli.remove('active');
}