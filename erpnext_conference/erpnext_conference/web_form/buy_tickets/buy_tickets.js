frappe.ready(function() {
	$('.form-group:last').after( bookingTitle + bookingTicket + endDiv);	

	for (var i=1; i<=3; i++){
		autoCostEdit(i);
	}

})


function autoCostEdit(a) {
	console.log("frappe a: "+a);
	$("div#page-buy-tickets tr:nth-child("+a+") > td:nth-child(3) > input[type='text']").change(function () {
		var subTotal = parseInt($("div#page-buy-tickets tr:nth-child("+a+") > td:nth-child(2) > input[type='text']").val()) * parseInt($("div#page-buy-tickets tr:nth-child("+a+") > td:nth-child(3) > input[type='text']").val())
		$("div#page-buy-tickets tr:nth-child("+a+") > td:nth-child(4) > input[type='text']").val(subTotal)
		autoTotalEdit(a)
	})
}

function autoTotalEdit() {
	var finTotal = 0;
	for (var i=1; i<=3; i++){
		finTotal += parseInt($("div#page-buy-tickets tr:nth-child("+i+") > td:nth-child(4) > input[type='text']").val())
	}
	$("div#page-buy-tickets tr:nth-child(4) > td:nth-child(2) > input[type='text']").val(finTotal);
}

var bookingTitle =
"<div class='form-group'> \
	<label for='status' class='control-label text-muted small'>Booking</label>"

var endDiv = "</div>"

var bookingTicket = 
"<div class='web-form-grid' data-fieldname='tickets' data-doctype='Participant Ticket'> \
   <table class='table table-bordered'> \
      <thead> \
         <tr class='web-form-grid-row '> \
            <th style='width: 25%; text-align:center'> \
               <span class='text-muted small'>Ticket</span> \
            </th> \
            <th style='width: 25%; text-align:center'> \
               <span class='text-muted small'>Cost</span> \
            </th> \
            <th style='width: 25%; text-align:center'> \
               <span class='text-muted small'>Quantity</span> \
            </th> \
            <th style='width: 25%; text-align:center'> \
               <span class='text-muted small'>Total</span> \
            </th> \
         </tr> \
      </thead> \
      <tbody> \
         <tr class='web-form-grid-row' data-name=' data-child-row='1'> \
            <td>Prime \
            </td> \
            <td> \
	            <input type='text' value='1000' readonly> \
            </td> \
            <td> \
            	<input type='text' value='0' id='number' onkeypress='return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57'> \
            </td> \
            <td> \
	            <input type='text' value='0' readonly> \
            </td> \
         </tr> \
          <tr class='web-form-grid-row' data-name=' data-child-row='1'> \
            <td>Gold \
            </td> \
            <td> \
	            <input type='text' value='100' readonly> \
            </td> \
            <td> \
            	<input type='text' value='0' id='number' onkeypress='return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57'> \
            </td> \
            <td> \
	            <input type='text' value='0' readonly> \
            </td> \
         </tr> \
          <tr class='web-form-grid-row' data-name=' data-child-row='1'> \
            <td>Silver \
            </td> \
            <td> \
	            <input type='text' value='10' readonly> \
            </td> \
            <td> \
            	<input type='text' value='0' id='number' onkeypress='return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57'> \
            </td> \
            <td> \
	            <input type='text' value='0' readonly> \
            </td> \
         </tr> \
         <tr class='web-form-grid-row' data-name=' data-child-row='1'> \
            <td colspan=3 style='text-align:right'><b>Total Cost: </b>\
            </td> \
            <td> \
	            <input type='text' value='0' readonly> \
            </td> \
         </tr> \
      </tbody> \
   </table> \
</div>"


// Select your input element.
var number = document.getElementById('number');



// formatting 
// default value
// onkeypress='return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57'