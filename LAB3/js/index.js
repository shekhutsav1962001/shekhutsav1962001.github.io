$(window).on('load', function () {
    
    if ($(window).width() < 650) {
        $('#hdr').addClass('display-4');
        $('#hdr').removeClass('display-3');
    }
    if ($(window).width() >= 650) {
        $('#hdr').addClass('display-3');
        $('#hdr').removeClass('display-4');
    }
    if ($(window).width() <= 487) {
        $('#hdr').addClass('');
        $('#hdr').removeClass('display-4');
    }

})
$(window).on('resize', function () {
    
    if ($(window).width() < 650) {
        $('#hdr').addClass('display-4');
        $('#hdr').removeClass('display-3');
    }
    if ($(window).width() >= 650) {
        $('#hdr').addClass('display-3');
        $('#hdr').removeClass('display-4');
    }
    if ($(window).width() <= 487) {
        $('#hdr').addClass('');
        $('#hdr').removeClass('display-4');
    }

})