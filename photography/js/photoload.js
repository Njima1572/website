(function(){
  var body = document.getElementById("photo_gallery");
  
  var dir = "img/";
  
  var jpg = ".jpg";
  
  $.ajax({
    url:dir,
    success: function(data){
      $(data).find("a").attr("href", function(i,val){
        if(val.match(/\.(jpe?g|png|gif)$/)){
          body.append("<img src=" + Folder + val + ">");
        }
      });
    }
  });
  
});