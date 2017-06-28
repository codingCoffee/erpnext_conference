frappe.ready(function() {
	console.log("frappe ready");

	var a = 2;
	
	$("div#page-buy-tickets div.section > div > div > p > button").click()
	$("div#page-buy-tickets tr:nth-child(2) > td:nth-child(3) > div > input[name='quantity']").change(function (){
		autoTotalEdit(a);
	})
	$("div#page-buy-tickets tr:nth-child(2) > td:nth-child(2) > div > input[name='cost']").attr('readonly', true);
	$("div#page-buy-tickets tr:nth-child(2) > td:nth-child(1) > div > select").change(function () {
		console.log("hahahah")
		if ($(this).val() == "premium") {
			$("div#page-buy-tickets tr:nth-child(2) > td:nth-child(2) > div > input[name='cost']").val(500)
		} else if ($(this).val() == "basic") {
			$("div#page-buy-tickets tr:nth-child(2) > td:nth-child(2) > div > input[name='cost']").val(1)
		}
		autoTotalEdit(a)
	})

	$("div#page-buy-tickets div.section > div > div > p > button").click(function () {
		a+=1;
		autoCostEdit(a);
	})
	console.log("frappe ready2");


})

function autoCostEdit(a) {
	console.log("frappe a: "+a);
	$("div#page-buy-tickets tr:nth-child("+a+") > td:nth-child(2) > div > input[name='cost']").attr('readonly', true);
	$("div#page-buy-tickets tr:nth-child("+a+") > td:nth-child(1) > div > select").change(function () {
		console.log("hahahah")
		if ($("div#page-buy-tickets tr:nth-child("+a+") > td:nth-child(1) > div > select").val() == "premium") {
			$("div#page-buy-tickets tr:nth-child("+a+") > td:nth-child(2) > div > input[name='cost']").val(500)
		} else if ($("div#page-buy-tickets tr:nth-child("+a+") > td:nth-child(1) > div > select").val() == "basic") {
			$("div#page-buy-tickets tr:nth-child("+a+") > td:nth-child(2) > div > input[name='cost']").val(1)
		}
		autoTotalEdit(a)
	})
	$("div#page-buy-tickets tr:nth-child("+a+") > td:nth-child(3) > div > input[name='quantity']").change(function (){
		autoTotalEdit(a);
	})
}

function autoTotalEdit(a) {
	var totalCost = 0;
	for(var i=1; i<=a; i++){
		totalCost += $("div#page-buy-tickets tr:nth-child("+i+") > td:nth-child(2) > div > input[name='cost']").val() * $("div#page-buy-tickets tr:nth-child("+i+") > td:nth-child(3) > div > input[name='quantity']").val();
	}
	$("input[name='total_cost']").val(totalCost);
}


// consider this too
// div#page-buy-tickets tr:nth-child(7) > td:nth-child(4) > button