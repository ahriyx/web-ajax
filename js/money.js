(function () {
	var page = 1, numSize = 0;
	function get(page) {
		$.ajax({
			url: 'http://localhost:9090/api/getmoneyctrl',
			type: 'get',
			data: {
				pageid: page
			},
			dataType: 'json',
			success : function (data) {
				console.log(data);
				numSize = Math.floor(data.totalCount / 10);

				// for ( var i = 0; i < data.result.length; i ++ ) {
				// 	data.result[i].productImgSm = $(data.result[i].productImgSm).attr('src');
				// }	
				var tplStr = template('template1',{items:data.result});
				$(".products").empty().append(tplStr);

				//初始化pageNUm
				$(".pageNum").empty();
				for ( var i = 0; i < numSize; i ++) {
					$(".pageNum").append($("<option>" + (i+1) + "/" + numSize +"</option>"));
				}

				var opt = $(".pageNum").children();
				opt.eq(page-1).attr("selected","selected").siblings().removeAttr('selected');

				//为pageNum添加单击事件
				// console.log($(".pageNum option"));
			}
		});
	}
	//初始化页面
	get(page);
	

	// 为按钮绑定单击事件
	$(".pre").click(function () {
		page --;
		if (page <= 0) {
			page = numSize;
		}

		get(page); 
	});
	$(".next").click(function () {
		page ++;
		if (page > numSize) {
			page = 1;
		}

		get(page); 
	});
	$(".pageNum").on("change",function (e) {
		page = this.selectedIndex;
		console.log( page );
		//调用get方法
		get(page+1);

	});
})();