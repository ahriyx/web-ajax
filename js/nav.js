(function () {

	$.ajax({
			url: 'http://localhost:9090/api/getsitenav',
			type: 'get',
			dataType: 'json',
			success : function (data) {

				var tplStr = template('template',{items: data.result});
				$(".main .item").empty().append(tplStr);

			}
		});

})();

