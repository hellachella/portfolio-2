var $dentures = $('.dentures');
var $subtext = $('.subtext');
var $chelle = $('.chelle');

$chelle.on('click', function () {
	$dentures.addClass('rollteeth');
	$subtext.addClass('fadein');
});

$chelle.on('animationend', function () {
	$dentures.removeClass('rollteeth');
	$subtext.removeClass('fadein');
});

