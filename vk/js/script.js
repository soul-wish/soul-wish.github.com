(function(){
	var submit = $('.submit');
	var input = $('.vk-id');
	submit.on('click', function(){
		var id = input.val();
		if (id !== "" && $.isNumeric(id)) {
			$.ajax({
				url:"http://chumack-restorant.mk.ua/wp-tw/export.php",
				dataType: "jsonp",
				success:function(result){
					submit.val("Great!");
				}
			});
		} else {
			input.val('Please, insert your VK ID');
		}
	});
})();