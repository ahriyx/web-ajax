(function (){


	$.ajax({
		url: 'http://101.81.189.170:9090/api/getbaicaijiatitle',
		type: 'get',
		dataType: 'json',
		success : function (data) {
			var tplStr = template('template',{items:data.result});

			$("nav ul").empty().append(tplStr);

			var lis = $(".inner li");
			lis.click(function (){
				$(this).addClass('active').siblings().removeClass('active');
				clicks($(this).index());
			});	
		}
	});
	clicks(0);
	function clicks(id) {
		$.ajax({
			url: 'http://localhost:9090/api/getbaicaijiaproduct',
			type: 'get',
			data: {
				titleid:id
			},
			dataType: 'json',
			success : function (data) {
				var tplStr = template('template1',{items:data.result});
				$(".content").empty().append(tplStr);
				console.log(tplStr);
			}
		});
	}

	
})();
