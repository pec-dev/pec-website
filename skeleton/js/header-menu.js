$( "#overlay" ).click(function() {
    $( ".menu" ).slideToggle( "fast", function() {
      // Animation complete.
    });
  });

  $( "#m_ham" ).click(function() {
    $( ".menu" ).slideToggle( "fast");
  });

  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'top',
        hoverEnabled: false
    });
});
iconbtn.addEventListener('click', () => {
    let icon = document.getElementById('iconbtn').innerHTML;
    if (icon == "expand_less")
        document.getElementById('iconbtn').innerHTML = "expand_more";
    else
        document.getElementById('iconbtn').innerHTML = "expand_less";
});