frappe.ready(function() {
	$('#page-buy-tickets > div > div.page-content.with-sidebar.col-sm-9 > div.page_content > form > div > div.section > div > div > p').after( bookingTitle + bookingTicket + endDiv + saveButton);	

	for (var i=1; i<=3; i++){
		autoCostEdit(i);
	}

	// Hide the save buttom
	$("div#page-buy-tickets div > button[type='submit']").hide()
	$("div#page-buy-tickets p > button[type='submit']").hide()
	$(".form-group~ .web-form-grid th , .btn-add-row , .form-group+ .small, thead td").hide()
})

var ticketTypes = ['Prime', 'Gold', 'Silver']
var ticketCosts = [1000, 100, 10]
var abstractTicketPointer = 2

function isEverythingAllRight() {
	if (!(/^[a-zA-Z ]+$/.test($("input[name='participant_name']").val()))){
		alert("Lol fix your name")
		return false;
	}
	if (!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($("input[name='email']").val()))){
		alert("Lol fix your email")
		return false;
	}
	if ($("div#page-buy-tickets tr:nth-child(4) > td:nth-child(2) > input[type='text']").val() == '0'){
		alert('buy tickets before confirming your order');
		return false;
	}
	return true;
}

function realSaveTest() {
	if (isEverythingAllRight()){
		// keep a function above and check if all fields are correctly filled
		autoPopulateTable();
		$("div#page-buy-tickets p > button[type='submit']").click();
	}	
}


function autoPopulateTable() {
	for (var i=1; i<=3; i++) {
		if ($("div#page-buy-tickets tr:nth-child("+i+") > td:nth-child(3) > input#number").val() > 0) {
			// alert('hi')
			$("div#page-buy-tickets div.section > div > div > p > button").click();
			$("div#page-buy-tickets tr:nth-child("+abstractTicketPointer+") > td:nth-child(1) > div > select").val(ticketTypes[i-1]);
			$("div#page-buy-tickets tr:nth-child("+abstractTicketPointer+") > td:nth-child(2) > div > input[name='cost']").val(ticketCosts[i-1]);
			$("div#page-buy-tickets tr:nth-child("+abstractTicketPointer+") > td:nth-child(3) > div > input[name='quantity']").val(parseInt($("div#page-buy-tickets tr:nth-child("+i+") > td:nth-child(3) > input#number").val()));
			abstractTicketPointer++;
		}
	}
}


// Calculates the sub total for each type of ticket
function autoCostEdit(a) {
	console.log("frappe a: "+a);
	$("div#page-buy-tickets tr:nth-child("+a+") > td:nth-child(3) > input[type='text']").change(function () {
		var subTotal = parseInt($("div#page-buy-tickets tr:nth-child("+a+") > td:nth-child(2) > input[type='text']").val()) * parseInt($("div#page-buy-tickets tr:nth-child("+a+") > td:nth-child(3) > input[type='text']").val())
		$("div#page-buy-tickets tr:nth-child("+a+") > td:nth-child(4) > input[type='text']").val(subTotal)
		autoTotalEdit(a)
	})
}


// Calculates and populated the final total field automatically 
function autoTotalEdit() {
	var finTotal = 0;
	for (var i=1; i<=3; i++){
		finTotal += parseInt($("div#page-buy-tickets tr:nth-child("+i+") > td:nth-child(4) > input[type='text']").val())
	}
	$("div#page-buy-tickets tr:nth-child(4) > td:nth-child(2) > input[type='text']").val(finTotal);
}


// Booking Title framework
var bookingTitle =
"<div class='form-group'> \
	<label for='status' class='control-label text-muted small'>Booking</label>"


// End the div tag
var endDiv = "</div>"


// Booking Ticket Table
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


var saveButton = 
`<div> \
	<br> \
	<p class='text-right'> \
		<button id='saveButton' onclick='realSaveTest()' class='btn btn-primary btn-sm btn-form-submit'> \
			Save</button> \
	</p> \
</div>`