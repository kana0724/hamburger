$(function() {
    $(".p-toggle-btn").on("click", function() {
          $(".l-sidebar,.p-toggle-btn__close-btn,body,.p-main__background").toggleClass('is-open');
    });
    $(".p-main__background").on("click", function() {
        $(".l-sidebar,.p-toggle-btn__close-btn,body,.p-main__background").toggleClass('is-open');
    });
});