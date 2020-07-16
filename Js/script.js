$(document).ready(()=>{
  $('#toggle').click(()=>{
    $('.popModal').toggleClass('hide');
    
    var image=$('#toggle').find('img');
    if(image.attr('src')=='./images/icon-hamburger.svg'){
      image.attr('src','../images/icon-close.svg')
    }else{
      image.attr('src','./images/icon-hamburger.svg')
    }
  })
})