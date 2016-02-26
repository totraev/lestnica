<<<<<<< HEAD
var $type = $('.type label');
var $material = $('.material  label');

$type.click(function(){
  console.log('lffg');
});

$material.click(function(){

});
=======
$( document ).ready(function() {
  var curTypeVal = 0,
      newTypeVal = 0,
      curMatVal = 0,
      newMatVal = 0,
      totalPrice = 0;

  var $total = $('#total-price');
     
  $('#form-2 .type label').on('click', function(){
    var newTypeVal = parseInt($(this).next().find('.type-price').text());

    totalPrice += newTypeVal - curTypeVal;
    curTypeVal = newTypeVal;

    $total.text(totalPrice);
    
  })

  $('#form-2 .material label').on('click', function(){
    var newMatVal = parseInt($(this).find('.mat-price-val').text());

    totalPrice += newMatVal - curMatVal;
    curMatVal = newMatVal;

    $total.text(totalPrice);
    
  })
});




var $window = $(window),
 $elem = $('.sidebar'); 
 


 $(window).scroll(function(event) { $elem.css('top', $window.scrollTop() + 'px'); } );
>>>>>>> 92589d6e7a7ab5a98f5b1d0bfb20b56be94830e6
