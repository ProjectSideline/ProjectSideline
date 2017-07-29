

$(document).ready(function(){
  //for modal function
  $('.modal').modal();

  //home page animation
  //move input label function
$('.input-container').find('input').on('keyup blur focus', function (e) { 
  var $this = $(this),
  label = $this.next('label');
  if(e.type == 'blur') {
    if($this.val() === '' ) {
      label.removeClass('active'); 
	}  
  } else if (e.type === 'focus') {
    if( $this.val() === '' ) {
      label.addClass("active");
    } 
  }
});

// Toggle Function
$('.toggle').click(function(){
  // Switches the Icon
  $(this).children('i').toggleClass('fa-pencil');
  $('.tooltip').text(($('.tooltip').text() === 'Sign up') ? 'Login' : 'Sign up');
  // Switches the forms  
  $('.login-register').animate({
    height: "toggle",
    'padding-top': 'toggle',
    'padding-bottom': 'toggle',
    opacity: "toggle"
  }, "slow");
});

$('.footer a').click(function(){
  // Switches the forms  
  $('.card-container').children('.toggle').toggle();
  $('.login-reset').animate({
    height: "toggle",
    'padding-top': 'toggle',
    'padding-bottom': 'toggle',
    opacity: "toggle"
  }, "slow");
});

  
  
});

