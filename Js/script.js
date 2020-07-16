$(document).ready(()=>{
  $('#toggle').click(()=>{
    $('.popModal').toggleClass('hide');
    
    var image=$('#toggle').find('img');
    if(image.attr('src')=='./images/icon-hamburger.svg'){
      image.attr('src','../images/icon-close.svg')
    }else{
      image.attr('src','./images/icon-hamburger.svg')
    }
  });
  $(window).scroll(()=>{
    if($(window).scrollTop()>=100){
      $('header').css({'background-color':'hsla(207, 33%, 95%,.9)'})
    }else{
      $('header').css({'background-color':'transparent'})
    }
  })

  })
// })