$(document).on("ready", function(){
  var offset = 0;
  function getGifs(event){
  //  event.preventDefault();
   $('.gif-gallery').empty();
   $.ajax({
     method: "get",
     url: "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC",
     data: $('form').serialize(),
     dataType: "json",
     success: onSuccess,
     error: onError
   });
 }

  function onSuccess(json){
    console.log(json);
    for(var i = 0; i < json.data.length; i++){
      $('.gif-gallery').append("<img src='" + json.data[i].images.fixed_height.url + "'/>");

    }
  }

  function moreGifs(event){
    event.preventDefault();


  }

  function onError(){
    console.log("Oh no, something went wrong");
  }



  $('form').on('submit', function(event){
    event.preventDefault();
    $("input[name='offset']").attr('value', 0);
    getGifs(event);

  });
  $("input[name='loadmore']").click(function(event){
    console.log(this);
    offset += 25
    $("input[name='offset']").attr('value', offset);
    getGifs();
  });

});
