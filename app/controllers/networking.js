$.email.addEventListener('click',function(e){
	var w = Alloy.createController('emailcontact').getView();
	w.open();
	
});

$.sendcontact.addEventListener('click',function(e){
	var w = Alloy.createController('sendcontact').getView();
	w.open();
	
});

