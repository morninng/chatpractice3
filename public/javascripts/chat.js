
var socket = io();
socket.on('connect', function(){
/*
io.sockets.on('connection', function (socket) {
  console.log('a user connected');
*/

  //var io_infra = io("/chat_infra");
  //io_infra.on('connect', function(socket){

    console.log("test test");
    $(function(){
      $('#setname').click(function(){
       // io_infra.emit('set_name', {name: $('#nickname').val()});
        socket.emit('set_name', {name: $('#nickname').val()});
      });
    });
    //io_infra.on('setname_done', function(data){
    socket.on('setname_done', function(data){
      $('#nameform').hide();
      $('#messages').append('<div class="systemMessage">' + 'hello ' + data.name + '</div>');
    });
 // });


/*
  var io_com = io("/chat_com");
  io_com.on('connect', function(socket){
    */
    console.log("test test");
    $('form').submit(function(){
      var data = {
        message: $('#m').val(),
        type: "userMessage"
      }
      //io_com.emit('chat_msg', data);
      socket.emit('chat_msg', data);
      $('#m').val('');
      return false;
    });

    //io_com.on('msg_server', function(data){
    socket.on('msg_server', function(data){
      if(data.username){
        $('#messages').append('<li><strong>' + data.username + ' : </strong>' + data.message + '</li>');
      }else{
        $('#messages').append('<li>' + data.message + '</li>');
      }
    });
  });

