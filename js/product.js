(function () {

	function get(id) {

		$.ajax({
			url: 'http://localhost:9090/api/getmoneyctrlproduct',
			type: 'get',
			dataType: 'json',
			data: {
				productid: id
			},
			success : function (data) {
				var tplStr = template('template',{items:data.result});
				
				$(".content").empty().append(tplStr);
				$(".users").empty().append(data.result[0].productComment);
				console.log(tplStr);
				console.log(data);
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
	get(ids);
})();