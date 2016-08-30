'use strict;'
var createTestString = JSON.stringify(createTest);

localStorage.setItem('createTest', createTestString);

var createTest = JSON.parse(localStorage.getItem('createTest'));
var results = document.querySelector('.test-wrap');

results.innerHTML = tmpl("test", createTest);

$(function () {
  var $submitButton = $('#submit');
  var $modal = $('#modal');
  var $close = $('#close');
  var $checkbox = $('input:checked');

  $modal.hide();

  $submitButton.each(function () {
    $(this).on('click', function () {
      $modal.fadeIn(300);
      var $checked = [];

      $('input:checked').each(function () {

        var $ans = $(this).next().text();
        var $str = $.trim($ans)
        $checked.push($str);
      });

      var $myAnswers = $checked.join(',');
      console.log('$myAnswers=', $myAnswers);

      //      if ($myAnswers == '') {
      //        $('.modal-title').text('uyuy');
      //        $('.modal-body p').text('Вы прошли этот тест!fgfgfg');
      //      }
      if ($myAnswers == corectAnswers) {
        $('.modal-title').text('Поздравляем!');
        $('.modal-body p').text('Вы прошли этот тест!');
      } else {
        $('.modal-title').text('Увы :(');
        $('.modal-body p').text('Вы не прошли этот тест! Попробуйте еще раз');
        $modal.css({
          'backgroundColor': 'rgba(179, 0, 0, .8)'
        });
      }
    });
  });

  $close.each(function () {
    $(this).on('click', function () {
      $modal.fadeOut(300);
      $("input:checked").attr('checked', false);
      window.localStorage.clear();
      location.reload();
      return false;
    });
  });

});