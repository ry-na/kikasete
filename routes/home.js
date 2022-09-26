document.addEventListener('DOMContentLoaded', function () {
    var $tab__link = $('.tab4__link')
    var $tab_body_item = $('.tab4-body__item')
    $tab__link.on('click', function (e) {
      var target = $(e.currentTarget)
      //タブの表示非表示
      $tab__link.removeClass('on')
      target.addClass('on')
      //タブの中身の表示非表示
      var num = target.data('tab-body')
      $tab_body_item.removeClass('on')
      $('.tab4-body__item--' + num).addClass('on')
    })
  })