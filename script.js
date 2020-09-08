
function addrmclass(project, mobile, height)
{
 	if($(window).scrollTop() > height) 
	{
   		project.addClass(mobile);
  	}
 	else 
	{
   		 project.removeClass(mobile);
  	}
}

$(function ()
{
    var gameoflife = $("#gameoflife");
	var printf = $("#printf");
	var fdf = $("#fdf");
	var fractol = $("#fractol");
    var rtv1 = $("#rtv1");
    var rt = $("#rt");
	const gap = 400;
   	const loc = 200;
   $(window).scroll(function () 
	{
			addrmclass(gameoflife, "gameoflife-mobile", loc);
			addrmclass(printf, "printf-mobile", loc + gap);
			addrmclass(fdf, "fdf-mobile", loc + gap * 2);
			addrmclass(fractol, "fractol-mobile", loc + gap * 3);
			addrmclass(rtv1, "rtv1-mobile", loc + gap * 4);
			addrmclass(rt, "rt-mobile", loc + gap * 5 - 150);
	});
});

