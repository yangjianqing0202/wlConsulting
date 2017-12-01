$(document).ready(function(){
$('.select_service').click(function(){
$('.select_ul').slideToggle(400);
$('.select_service').toggleClass('select_service_down');
})
});



$(document).ready(function(){
$('.menu').click(function(){
$('.menu_main').slideToggle(600);
$('html').toggleClass('hidden_y');
$('.menu_click').toggleClass('menu_click_2');

})
});


$(document).ready(function(){
$('.service_click').click(function(){
$('.mobile_service').slideToggle(600);
$('.service_click_icon').toggleClass('service_click_icon02');

})
});