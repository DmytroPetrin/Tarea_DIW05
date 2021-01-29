$(window).scroll(function() {
    if ($("#menu").offset().top > 100) {
        $("#menu").addClass("bg-dark");
    } else {
        $("#menu").removeClass("bg-dark");
    }
});

$(document).ready(function() {
$('a[href^="#nav_"]').click(function() {
var destino = $(this.hash);
if (destino.length == 0) {
destino = $('a[name="' + this.hash.substr(1) + '"]');
}
if (destino.length == 0) {
destino = $('html');
}
$('html, body').animate({ scrollTop: destino.offset().top }, 500);
return false;
});
});