//轮播图的自动添加
$(function() {
	$('[data-toggle="tooltip"]').tooltip();
	var items = $('.carousel-inner .item');
	$(window).on('resize', function() {
		var width = $(window).width();
		if(width >= 768) {
			/*超过768就为每一个item添加子元素———遍历*/
			$(items).each(function(index, value) {
				var item = $(this);
				var imaSrc = item.data('largeImage');
				item.html($('<a href="#" class="mund"></a>').css("background-image", "url(" + imaSrc + ")"))
			})
		} else {
			$(items).each(function(index, value) {
				var item = $(this);
				var imaSrc = item.data('smallImage');
				item.html('<a href="#" class="mobileImg"><img src="' + imaSrc + '" /></a>')
			})
		}
	}).trigger('resize');

	/*添加移动端的滑动操作*/
	var startX, endX;
	var carousel_inner = $(".carousel-inner")[0];

	/*获取当前轮播图*/
	var carousel = $(".carousel");

	carousel_inner.addEventListener("touchstart", function(e) {
		startX = e.targetTouches[0].clientX;
	});
	carousel_inner.addEventListener("touchend", function(e) {
		endX = e.changedTouches[0].clientX;
		if(endX - startX > 0) {
			/*上一张*/
			carousel.carousel('prev');
		} else if(endX - startX < 0) {
			/*下一张*/
			carousel.carousel('next');
		}
	})

	//产品块的导航条
	var ul = $('.wjs_product .nav-tabs');
	var li_w = ul.find('li');
	var tato_width = 0;
	li_w.each(function(index, value) {
		tato_width = tato_width + $(value).innerWidth();
		
	})
	ul.width(tato_width);
	/*使用插件实现导航条滑动操作*/
	var myscroll=new IScroll('.tabs_product',{
		/*设置水平滑动 ，禁止垂直滑动*/
		scrollX:true,scrollY:false
	})
})