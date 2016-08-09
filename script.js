$(document).ready(function () {

  var $btn = $('#request'); //request button
  var $translate = $('#translatethis'); // translate
  var $output = $('#output'); // translate
  var $loader = $('.loader');
  var url = 'https://yoda.p.mashape.com/yoda';
  $loader.hide();

  $btn.on('click', function(){
    $loader.show();
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

        // success: function(data) {
        //   // JSON.stringify(data);
        //   $loader.hide();
        //   $output.html(data); //box that yoda will speak
        // }
    }).done(function(data){
      // JSON.stringify(data);
      $loader.hide();
      $output.html(data); //box that yoda will speak
    })

        .always(function(){
        $loader.hide();
        })

        .fail(function (request, textStatus, errorThrown){
          $output.html(request.status + " " + textStatus + " " + errorThrown);
        });

  });

}); //end
