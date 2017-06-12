(function () {


	function category(id) {
		$.ajax({
			url: 'http://101.81.189.170:9090/api/getcategory',
			type: 'get',
			data: {
					titleid: id
			},
			dataType: 'json',
			success : function (data) {
				var tplStr = template('template1',{items:data.result});
			
				var nav = $(".navs").eq(id);
				$(nav).empty().append(tplStr);
				
			}
		});
	
	}

	//通过ajax
	$.ajax({
		url: 'http://101.81.189.170:9090/api/getcategorytitle',
		type: 'get',
		dataType: 'json',
		success : function (data) {
			var tplStr = template('template',{items:data.result});
			
			$(".category").append(tplStr);
			//注册单击事件
			clicks();

		}
	});


	function clicks() {
		var flag = false;
		$(".item h2").click(function () {
			flag = true;
			var id = parseInt($(this).attr('data-id'));
			category(id);
			var nav = $(this).next();
			nav.toggleClass('show');
		});
	}


})();
