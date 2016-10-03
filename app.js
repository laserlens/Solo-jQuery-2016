$(function() {
//creat event listners for each button

//funtion to create box
$('.color-button').click(function(){
  var n = this.id;
  console.log(n);
  $('.container').append('<span class="color-cube" id='+n+'><span>');
  $('#'+n+'').css('background-color', ''+n+'');
  $('#'+n+'C').html(function(i, val) { return +val+1 });
});
});//end of jquery function
