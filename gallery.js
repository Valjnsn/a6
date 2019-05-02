$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

 $(document).ready(function(){
  $("button").click(function(){
    $("#img1").fadeIn();
    $("#img2").fadeIn("slow");
    $("#img3").fadeIn(3000);
  });

    $(document).ready(function(){
  $("#go").click(function(){
    $("#thing").hide();
  });
  $("#come").click(function(){
    $("#thing").show();
  });
  