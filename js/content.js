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
			url: 'http://localhost:9090/api/getproduct',
			type: 'get',
			data: {
				productid: ids
			},
			dataType: 'json',
			success : function (data) {

				var tplStr = template('template1',{items:data.result});
				$(".product").empty().append(tplStr);

				var obj = {};
				obj['categoryId'] = data.result[0]['categoryId'];
				obj['productName'] = data.result[0]['productName'].substring(0, 15);

				$.get('http://localhost:9090/api/getcategorybyid?categoryid='+obj['categoryId'],function (data) {
					obj['categoryName'] = data.result[0]['category'];
					var tplStr1 = template('template', obj);
					console.log(tplStr1);
					$(".category .inner").empty().append(tplStr1);
				});
			
				
			}

		});

	$.ajax({
			url: 'http://localhost:9090/api/getproductcom',
			type: 'get',
			data: {
				productid: ids
			},
			dataType: 'json',
			success : function (data) {

				var tplStr = template('template2',{items:data.result});
				$(".comment .inner").empty().append(tplStr);
			}

		});

})();
