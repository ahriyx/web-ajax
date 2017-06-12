	//获取id
	function getId() {
		var n=self.location.href.indexOf("?"),//查看是否包含参数   
	   para, arr;
	  if(n>0)//存在参数   
	  {   
	  	//参数   
	 	 	para = self.location.href.substr(n+1);  
	  	arr =  para.split('=');
	  } 
	  return parseInt(arr[1]);
	}

(function () {


	var ids = getId();

	$.ajax({
			url: 'http://localhost:9090/api/getcategorybyid',
			type: 'get',
			data: {
				categoryid: ids
			},
			dataType: 'json',
			success : function (data) {
				var tplStr = template('template',{items:data.result});
				$(".inner").empty().append(tplStr);
			}

		});

})();


(function () {
	var page = 1, numSize = 0;
	var id = getId();
	function get(page) {
		$.ajax({
			url: 'http://localhost:9090/api/getproductlist',
			type: 'get',
			data: {
				pageid: page,
				categoryid: id 
			},
			dataType: 'json',
			success : function (data) {
				console.log(data);
				numSize = Math.ceil(data.totalCount / 10);

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