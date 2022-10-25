function carousel() {
    return {
      active: 0,
      init() {
        var flkty = new Flickity(this.$refs.carousel, {
          wrapAround: true
        });
        flkty.on('change', i => this.active = i);
      }
    }
  }
  $(window).on("load", function() {
        $(window).scroll(function() {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(".fade-in").each(function() {
                /* Check the location of each desired element */
                var objectBottom = $(this).offset().top + $(this).outerHeight();

                /* If the element is completely within bounds of the window, fade it in */
                if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                    if ($(this).css("opacity") == 0) {
                        $(this).fadeTo(250, 1);
                    }
                } else { //object goes out of view (scrolling up)
                    if ($(this).css("opacity") == 1) {
                        $(this).fadeTo(250, 0);
                    }
                }
            });
        }).scroll(); //invoke scroll-handler on page-load
    });

    $(window).scroll(function() {
        $(".fade-out").css("opacity", 1 - $(window).scrollTop() / 250)
    });
