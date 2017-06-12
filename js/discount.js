(function () {

	$.ajax({
			url: 'http://localhost:9090/api/getinlanddiscount',
			type: 'get',
			dataType: 'json',
			success : function (data) {
				var tplStr = template('template1',{items:data.result});
				$(".content .item").empty().append(tplStr);
				console.log(tplStr);
			}
		});
})();