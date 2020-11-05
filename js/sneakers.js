$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= 600) {
        $("#nav").addClass("darkHeader");
    } else {
        $("#nav").removeClass("darkHeader");
    }
});
// $(window).scroll(function() {
//     let scroll = $(window).scrollTop();
//     if (scroll >= 600) {
//         $("#nav").addClass("darkHeader");
//         $('.navbar i').css('color', 'black');
//     } else {
//         $("#nav").removeClass("darkHeader");
//     }
// });
$('#nav').on('mouseover', () => {
    $('.navbar a').css('color', 'black');
});