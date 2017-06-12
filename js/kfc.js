(function (){
	$.ajax({
		url: 'http://localhost:9090/api/getcoupon',
		type: 'get',
		dataType: 'json',
		success : function (data) {
			var tplStr = template('template',{items:data.result});

			$(".main").empty().append(tplStr);
		}
	});


})();