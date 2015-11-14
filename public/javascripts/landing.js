
$(function(){
	$('#start_chat').click(function(){

		var name =  $('#nickname').val();
		if(name){
			document.cookie = "nickname=" + $('#nickname').val() + ";; path=/";
			window.location = "/create_chat_room";
		}else{
			alert("enter your name")
		}
	});
});

