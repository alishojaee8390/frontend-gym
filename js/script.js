$(document).ready(function () {
  $(".nav-button").click(function () {
    $(".nav-button").toggleClass("change");
    $(".nav-menu").toggleClass("nav-menu-res");
  });
});


$(window).scroll(function(){
  let position = $(this).scrollTop();
  if(position >= 700){
    $('.awards-text').addClass('fromright')
    $('.img-awards').addClass('fromleft')
  }else{
    $('.awards-text').removeClass('fromright')
    $('.img-awards').reomveClass('fromleft')

  }
})

$('.gallery-list').click(function(){
  let value = $(this).attr('data-filter')
  $(this).addClass('active-item').siblings().removeClass('active-item');
  if(value === 'all'){
    $('.filter').show(300)
  }
  else{
    $('.filter').not('.' + value).hide(300)
    $('.filter').filter('.' + value).show(300)

  }
})


$(window).scroll(function(){
  let position = $(this).scrollTop();
  if(position >= 300){
    $('.nav-menu').addClass('custom')
  }else{
    $('.nav-menu').removeClass('custom')
  }
})

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 4400){
      $('.card-1').addClass('moveleft')
      $('.card-2').addClass('movebottom')
      $('.card-3').addClass('moveright')
    }else{
      $('.card-1').removeClass('moveleft')
      $('.card-2').removeClass('movebottom')
      $('.card-3').removeClass('moveright')

    }
})