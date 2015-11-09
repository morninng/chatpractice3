



  var socket = io();
  socket.on('connect', function(){

    $(function(){
      $('#setname').click(function(){
        socket.emit('set_name', {name: $('#nickname').val()});
      });
    });

    socket.on('setname_done', function(data){
      $('#nameform').hide();
      $('#messages').append('<div class="systemMessage">' + 'hello ' + data.name + '</div>');
    });

    $('form').submit(function(){
      var data = {
        message: $('#m').val(),
        type: "userMessage"
      }
      socket.emit('chat_msg', data);
      $('#m').val('');
      return false;
    });

    socket.on('msg_server', function(data){

      if(data.username){
        $('#messages').append('<li><strong>' + data.username + ' : </strong>' + data.message + '</li>');
      }else{
        $('#messages').append('<li>' + data.message + '</li>');
      }

    });

  });



