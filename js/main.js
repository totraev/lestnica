
var $type = $('.type label');
var $material = $('.material  label');
var $result = $('.choose-price .total-price')

$type.click(function(){
  var $price = $(this).next().find('.type-price').text();
  $result = $('.choose-price #total-price').text($price);

  $material.click(function(){
   var $m_price = $(this).find('.mat-price-val').text();
  $total_result = $('.choose-price #total-price').text(+$price + +$m_price);
  });
});


/*$material.click(function(){
 var $m_price = $(this).find('.mat-price-val').text();
$total_result = $('.choose-price #total-price').text($price+$m_price);
});*/
