//smooth scrolling
$("document").ready(function(){
  
 // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#topheader']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (1000) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
});


$(".navbar-link [href]").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("active");
        }
    });