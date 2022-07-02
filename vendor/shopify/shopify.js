
var fs = require('fs');

// $.ajax({     
 //   type: "GET",
//    url : "https://73207a844acc554d3307ea947e23bc78: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@phambpashmina.myshopify.com/admin/api/2021-10/products.json",
//    dataType: "json",
 //   success: function (json) {
 //       console.log(json.length);
 //       $.each(json, function(index,products) {
//        
//        console.log(products[1700]);
 ///       })
//    },
//});

$('.table-inv').on('mouseup keyup', 'input[type=number]', () => calculateTotals());

$('.btn-add-row').on('click', () => {
  const $lastRow = $('.item:last');
  const $newRow = $lastRow.clone();

  $newRow.find('input').val('');
  $newRow.find('td:last').text('$0.00');
  $newRow.insertAfter($lastRow);

  $newRow.find('input:first').focus();
});

function calculateTotals() {
  const subtotals = $('.item').map((idx, val) => calculateSubtotal(val)).get();
  const total = subtotals.reduce((a, v) => a + Number(v), 0);
  $('.total td:eq(1)').text(formatAsCurrency(total));
}

function calculateSubtotal(row) {
  const $row = $(row);
  const inputs = $row.find('input');
  const subtotal = inputs[1].value * inputs[2].value;

  $row.find('td:last').text(formatAsCurrency(subtotal));

  return subtotal;
}

function formatAsCurrency(amount) {
  return `$${Number(amount).toFixed(2)}`;
}