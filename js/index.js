//通过ajax获取导航部分
(function () {
	// 将导航数据放到这个数组中
	var navArr = [];

	// 通过ajax进行获取
	$.ajax({
		url: 'http://localhost:9090/api/getindexmenu',
		type: 'get',
		dataType: 'json',
		success : function (data) {
			var href = ['category.html','money.html','discount.html','baicai.html','#','kfc.html','#',
				'javascript:','single.html','#','nav.html','brand.html'
			];
			for ( var i = 0; i < data.result.length; i ++ ) {
				data.result[i].img = $(data.result[i].img).attr('src');
				data.result[i].titlehref = href[i];
			}

			var tplStr = template('template',{items:data.result}),
				navUl = $("#nav>ul"), flag = true, lis;
			navUl.append(tplStr);

			lis = navUl.children();

			lis.forEach(function (item, index) {
				if ( index >= 8) {
					$(item).addClass('hide');
				}

			});
			lis[7].onclick = function () {
				lis.forEach(function (item, index) {
					if ( index >= 8) {
						if ($(item).hasClass('hide')) {
							$(item).removeClass('hide').addClass('show');
						}
						else {
							$(item).removeClass('show').addClass('hide');
						}
					}
				});
			};
			
		}
	});
})();

//通过ajax获取打折的商品

(function () {

	$.ajax({
			url: 'http://localhost:9090/api/getmoneyctrl',
			type: 'get',
			dataType: 'json',
			success : function (data) {

				for ( var i = 0; i < data.result.length; i ++ ) {
					data.result[i].productImgSm = $(data.result[i].productImgSm).attr('src');
			
				}
				
				var tplStr = template('template1',{items:data.result});

				console.log(tplStr);
				$(".products").append(tplStr);
			}
		});

})();

