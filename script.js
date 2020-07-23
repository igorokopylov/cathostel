$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.button_primary_filter').click(function (event) {
        $('body').toggleClass('lock');
    });
});