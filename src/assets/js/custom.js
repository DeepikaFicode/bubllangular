/*****************************************Preloader*****************************************/
jQuery(function ($) {

            //Preloader
            var preloader = $('.preloader');
            $(window).on('load', function() {
                preloader.remove();
            });
        });

 $(document).ready(function(){
  $(".expand > a").click(function(){
    $(".cmpny-dtls").slideToggle();
  });
});