(function () {

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

	$.ajax({
			url: 'http://localhost:9090/api/getinlanddiscount',
			type: 'get',
			dataType: 'json',
			success : function (data) {

				var tplStr = template('template',data.result[ids]);
				
				$(".content").empty().append(tplStr);
				$(".comment").empty().append(data.result[ids].productComment);
			}
		});



})();