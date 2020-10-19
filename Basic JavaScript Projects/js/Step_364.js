$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);


//sticky scrolling//
div.sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: yellow;
    padding: 50px;
    font-size: 20px;