var $body = $('body');
var $baby = $('.baby');

$baby.on('click', function () {
  var $newBall = $('<div>');

  $newBall.addClass('ball');
  $body.append($newBall);
  $newBall.css('left', Math.random() * 500);
  $newBall.css('top', Math.random() * 1000);

});
