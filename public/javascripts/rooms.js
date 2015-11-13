
  var socket_io = io.connect('http://127.0.0.1:3000');

  socket_io.on('connect', function(){
    socket_io.emit('get_rooms',{});
    socket_io.on('rooms_list', function(rooms){
      for(var key in rooms){
        var roomDiv = '<div class="room_div"><span class="room_name">'
        + key + '</span><span class="room_users">[ '
        + rooms[key] + ' Users ] </span>'
        + '<a class="room" href="/chat?room=' + key
        + '">Join</a></div>';
        $('#rooms_list').append(roomDiv);
      }
    });

    $('#new_room_btn').click(function(){
      var new_room_name = $('#new_room_name').val();
      window.location = '/chat?room=' + new_room_name;
    });

  });

