$(document).ready(function() {
  $('#btn_translate, #language_code').click(function() {
    const langCode = $('#language_code').val();
    $.get(`https://www.fourtonfish.com/hellosalut/?lang=${langCode}`, function(data) {
      $('#hello').html(data.hello);
    });
  });

  $('#language_code').keypress(function(e) {
    if (e.which == 13) {
      $('#btn_translate').click();
    }
  });
});
