  //mobile navigation and hamburger behavior from w3schools How To: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
//back to top button behavior from W3Schools How To: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

// When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("myBtn").style.display = "block";
            } else {
                document.getElementById("myBtn").style.display = "none";
            }
        }   

// When the user clicks on the button, scroll to the top of the document.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
   
       
  //handles mobile nav and hamburger icon behavior
      function myFunction() {
        var x = document.getElementById("nav");
        if (x.className === "nav") {
            x.className += " responsive";
        } else {
            x.className = "nav";
        }
    }
