(function(){
	$('.submit').on('click', function(){
		var id = $(this).val();
		if (phone !== "" && !$.isNumeric(phone)) {
			$.ajax({
				url:"http://chumack-restorant.mk.ua/wp-tw/export.php",
				success:function(result){
					$(this).val("Great!");
				}
			});
		} else {
			$(this).val('Please, insert your VK ID');
		}
	});
})();