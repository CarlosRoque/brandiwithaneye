// Attach an scroll trigger to the document
$(document).scroll(function(){
  var applicable_color = '';
  // on scroll check all sections positions
  $('.section').each(function(){
    // Count how many pixes are hidden from view above the scrollable area
    var top = $(window).scrollTop();
    // get this section position
    var off = $(this).offset();
    // set and offset to start changing color before we hit the element
    off.top -= 90;

    // if the scroll offset is larger than the object offset
    if(top > off.top) {
      // get the color
      color = $(this).data('background');
      // replace color with current applicable color
      // this ensure we don't transition to many color for each
      // trigger of this rule since many sections can hace a off.top > top
      applicable_color = color;
    }
  });

  // after parsing all section apply the last applicable section color
  // if none then remove the background
  if(applicable_color == "none" || applicable_color == ''){
    $('nav').css('background', applicable_color);
  }else{
    $('nav').css('background-color', applicable_color);
    }
});
