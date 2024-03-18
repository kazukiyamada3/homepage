
$(function(){
	
	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();
	
	if (winW > 800){
		var headerH =0;
	}
	else{
		var headerH =70;
	}
	
	$(nav).on('click', function(){
  	var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   		scrollTop: $(id).offset().top - headerH
 		}, 500);
		if (winW < 890){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
 		return false;
	});
	
	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});

	window.onload = function () {
		fade_effect();
	  
		$(window).scroll(function () {
		  fade_effect();
		});
	  
		function fade_effect() {
		  $('.fade').each(function () {
			const targetElement = $(this).offset().top;
			const scroll = $(window).scrollTop();
			const windowHeight = $(window).height();
			if (scroll - 300 > targetElement - windowHeight) {
			  $(this).addClass('view');
			}
		  });
		}
	};


	ScrollReveal().reveal('.yokosr', { 
		origin: 'right',
        distance: '50px',
		scale: 0.5,
		rotate: { x: 0, y: 0, z: 0 }, //xは縦回転、yは横回転、zは傾き（風車みたいな感じ）
		duration: 1700, //アニメーションの速度
		delay :200 //要素が表示するまでの待機時間（ディレイ）
	});
	
	ScrollReveal().reveal('.kaitensr', { 
		origin: 'left',
        distance: '1000px',
		rotate: { x: 0, y: 0, z: 500 },
		scale: 0.5,
		duration: 1700, //アニメーションの速度
		delay :100 //要素が表示するまでの待機時間（ディレイ）
	});


	ScrollReveal().reveal('.upsr', { 
		origin: 'bottom',
        distance: '50px',
		rotate: { x: 0, y: 0, z: 0 },
		scale: 0.5,
		duration: 1700, //アニメーションの速度
		delay :200 //要素が表示するまでの待機時間（ディレイ）
	});


	ScrollReveal().reveal('.srfide', { 
        distance: '50px',
		scale: 0.5,
		duration: 1700, //アニメーションの速度
		delay : 50 //要素が表示するまでの待機時間（ディレイ）
	});


});



