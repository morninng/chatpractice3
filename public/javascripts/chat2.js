
  var socket_io = io.connect('http://127.0.0.1:3000/');
  // var socket_infra = io.connect('/');
  // var socket_io = io.connect('http://127.0.0.1:3000/chat_com');
  // var socket_com = io.connect('/chat_com');

  var roomName = decodeURI( (RegExp("room" + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]);

  if(roomName){
    socket_io.on('connect', function(){

      socket_io.emit('join_room', {'room_name':roomName});
/*
      $('#setname').click(function(){
        socket_io.emit('set_name', {name: $('#nickname').val()});
      });
*/
/*
      socket_io.on('setname_done', function(data){
        $('#nameform').hide();
        $('#messages').append('<div class="systemMessage">' + 'hello ' + data.name + '</div>');
*/
        $('form').submit(function(){
          var data = {
            message: $('#m').val(),
            type: "userMessage"
          }
          socket_io.emit('chat_msg', data);
          $('#m').val('');
          return false;
        });

        socket_io.on('msg_server', function(data){
          if(data.username){
            $('#messages').append('<li><strong>' + data.username + ' : </strong>' + data.message + '</li>');
          }else{
            $('#messages').append('<li>' + data.message + '</li>');
          }
        }); 
      /*});*/
    });
  }