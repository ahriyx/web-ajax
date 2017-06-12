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
			url: 'http://localhost:9090/api/getcouponproduct',
			type: 'get',
			dataType: 'json',
			data:{
				couponid: ids
			},
			success: function (data) {
				console.log(data);
				for( var i = 1; i < 20; i ++ ) {
					data.result[i] = data.result[0];
				}
				var tplStr = template('template1',{items: data.result});
				console.log(tplStr);
				$(".products").empty().append(tplStr);
		
			}
		});



})();