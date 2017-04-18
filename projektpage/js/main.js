/**
 * Created by leon on 18.04.17.
 */
$('#modal-newsletter form').on('submit', function() {
    $.cookie('modalnewsletter', 'true', { expires: 365 });
    window.open('http://feedburner.google.com/fb/a/mailverify?uri=webmastah', 'popupwindow', 'scrollbars=yes,width=550,height=520');
    $('#modal-newsletter').modal('hide');
});