$('.smoothScroll').click(function(event) {
event.preventDefault();
var href=$(this).attr('href');
var target=$(href);
var top=target.offset().top;
$('html,body').animate({
  scrollTop: top
}, 1000);
});

$("[data-toggle]").click(function() {
var toggle_el = $(this).data("toggle");
$(toggle_el).toggleClass("open-sidebar");
});

function formatText(index, panel) {
      return index + "";
      }
            $(function () {
            $('.anythingSlider').anythingSlider({
                easing: "easeInOutExpo",        // Anything other than "linear" or "swing" requires the easing plugin
                autoPlay: true,                 // This turns off the entire FUNCTIONALY, not just if it starts running or not.
                delay: 3000,                    // How long between slide transitions in AutoPlay mode
                startStopped: false,            // If autoPlay is on, this can force it to start stopped
                animationTime: 600,             // How long the slide transition takes
                hashTags: true,                 // Should links change the hashtag in the URL?
                buildNavigation: true,          // If true, builds and list of anchor links to link to each slide
            pauseOnHover: true,             // If true, and autoPlay is enabled, the show will pause on hover
            startText: "Старт",             // Start text
            stopText: "Стоп",               // Stop text
            enableArrows: false,
            toggleArrows: false,
            toggleControls: false,  
            navigationSize: 0,
            navigationFormatter: formatText       // Details at the top of the file on this use (advanced use)
            });
            $("#slide-jump").click(function(){
                $('.anythingSlider').anythingSlider(6);
            });
        });

var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 200,
        'tolerance': 70
      });

      document.querySelector('.toggle-button').addEventListener('click', function() {
        slideout.toggle();
      });

    $('.menu__item').on('click', function() {
        slideout.toggle();
    });