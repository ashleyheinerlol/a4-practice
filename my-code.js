$(document).ready(function() {

	$("p").hide();
	$("#cowPic").hide();
	
	$("h1").click(function() {


		$(this).next().fadeToggle(1000);

	});
});
