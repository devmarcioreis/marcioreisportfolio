//Slider
$(document).ready(function() {
    $('#slider, #slider2').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#slider, slider2').removeClass('cS-hidden');
        }
    });
  });

