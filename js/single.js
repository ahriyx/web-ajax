(function () {

	function getData(baseUrl,callback) {

		$.ajax({
			url: 'http:/101.81.189.170:9090/api/' + baseUrl,
			type: 'get',
			dataType: 'json',
			success : function (data) {
				callback(data);
			}
		});
	}

	

	$("#nav li").click(function () {
		var that = $(this);
		var index = that.index();

		switch (index) {
			case 0:
				getData('getgsshop',function (data) {
					
					var tplStr = template('template',{items:data.result});
					$(".list").empty().append(tplStr);
					$(".list").toggleClass('show');
					list(that);

				});

				break;
			case 1:
				getData('getgsshoparea',function (data) {

					var tplStr = template('template1',{items:data.result});
					$(".list").empty().append(tplStr);
					$(".list").toggleClass('show');
					list(that);

				});
				
				break;
			default:
				console.log("不执行第三个导航");
				break;
		}


	});


	//下拉菜单的事件委托
	function list(obj) {
		$(".list div").on('click',function (){
			
			$(".list").removeClass('show');

			var id = $(this).attr('data-id'),
				value = $(this).text();

			$(obj).text(value.substring(0, 2));
			$(obj).attr('data-id', id);

			
			getProducts();

			
			
			// 这一步很重要一定要清空obj
			obj = null;

			
		});

	}


	//直接拿取数据
	
	function getProducts() {

		var shopid = $("#nav li").eq(0).attr('data-id'), 
			areaid = $("#nav li").eq(1).attr('data-id');
		console.log(shopid,areaid);
		$.ajax({
			url: 'http://localhost:9090/api/getgsproduct',
			type: 'get',
			data: {
				shopid: shopid,
				areaid: areaid
			},
			dataType: 'json',
			success : function (data) {
				var tplStr = template('template2',{items:data.result});
				$(".products .inner").empty().append(tplStr);
			
			}
		});
	}
	//首先必须要执行一次
	getProducts();
	


})();
