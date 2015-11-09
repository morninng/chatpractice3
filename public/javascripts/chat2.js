
  var socket_infra = io.connect('http://127.0.0.1:3000');


  $(function(){
    $('#setname').click(function(){
      socket_infra.emit('set_name', {name: $('#nickname').val()});
    });
  });
  socket_infra.on('setname_done', function(data){
    $('#nameform').hide();
    $('#messages').append('<div class="systemMessage">' + 'hello ' + data.name + '</div>');
  });

  var socket_com = io.connect('http://127.0.0.1:3000/chat_com');

  $('form').submit(function(){
    var data = {
      message: $('#m').val(),
      type: "userMessage"
    }
    socket_com.emit('chat_msg', data);
    $('#m').val('');
    return false;
  });

  socket_com.on('msg_server', function(data){
    if(data.username){
      $('#messages').append('<li><strong>' + data.username + ' : </strong>' + data.message + '</li>');
    }else{
      $('#messages').append('<li>' + data.message + '</li>');
    }
  });

