 $(".accordion").on("click", ".accordion-header", function() {
 	$(this).toggleClass("active").next().slideToggle();
 });
 // Clicking on the accordion header title...
$('.accordion').on('click', '.accordion-header', function() {
  // will (slide) toggle the related panel.
  $(this)
    .toggleClass('active')
    .next()
    .slideToggle()
});