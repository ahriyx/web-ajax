(function () {

	function category(id) {
			$.ajax({
				url: 'http://101.81.189.170:9090/api/getbrand',
				type: 'get',
				data: {
						brandtitleid: id
				},
				dataType: 'json',
				success : function (data) {
					var tplStr = template('template1',{items:data.result});
					$(".products .inner").empty().append(tplStr);
					
					comment(id);
				}
			});
		
		}

	function comment(id) {

		$.ajax({
			url: 'http://101.81.189.170:9090/api/getbrandproductlist',
			type: 'get',
			data: {
					brandtitleid: id,
					pageid: 1
			},
			dataType: 'json',
			success : function (data) {
				var tplStr = template('template2',{items:data.result});
				$(".comment .inner").empty().append(tplStr);
				newComment(id);
			}
		});
	}

	function newComment(id) {
		$.ajax({
			url: 'http://101.81.189.170:9090/api/getproductcom',
			type: 'get',
			data: {
					productid: id
			},
			dataType: 'json',
			success : function (data) {
				var tplStr = template('template3',{items:data.result});
				$(".new-comment .inner").empty().append(tplStr);
				
				
			}
		});

	}

	//获取id
	function id() {
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
	var ids = id();
	category(ids);
})();
