/**
 * Created by YSingh on 30/12/16.
 */

$('.header').on('click', function (e) {
    $('.active').removeClass('active');
    $(e.target).parent().addClass('active');
});
