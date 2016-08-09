$(document).ready(function () {

  var $btn = $('#request'); //request button
  var $translate = $('#translatethis'); // translate
  var $output = $('#output'); // translate
  var url = 'https://yoda.p.mashape.com/yoda';

  $btn.on('click', function(){
    console.log('clicked');
    $.ajax({
      //The URL to the API that you intend to consume
      url: 'https://yoda.p.mashape.com/yoda',

      //The HTTP method- can be GET, POST, PUT, DELETE
      type: 'GET',
      //additional parameters
      data:{
        sentence: $translate.val()
      },

      datatype: 'json',

        beforeSend: function(xhr) {
          xhr.setRequestHeader('X-Mashape-Key', 'Df2BCDlbldmsho3fNxVf13Tm85RPp1WtTxBjsn6BOf2T6hexVF');
        },

        success: function(data) {
          // JSON.stringify(data);
          $output.html(data); //box that yoda will speak
        }
    })

    .fail(function (request, textStatus, errorThrown){
      $output.html(request.status + " " + textStatus + " " + errorThrown);
    });

  });

}); //end
