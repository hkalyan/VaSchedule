

$.saveButton.addEventListener("touchstart",function(e) {
	$.saveButton.setBackgroundGradient({});
	$.saveButton.setBackgroundColor("#193149");
});

$.saveButton.addEventListener("touchend",function(e) {
	$.saveButton.setBackgroundGradient({
       type:'linear',
	   colors:['#1975A3','#3083AC'],
	   startPoint:{x:0,y:0},
	   endPoint:{x:0,y:'100%'},
	   backFillStart:false});
	$.saveButton.setBackgroundColor("transparent");
});

$.name.addEventListener('return',function(e) {
	$.password.focus();
});

$.password.addEventListener('return',function(e) {
	$.password.blur();
	saveInfo();
});

$.loginWin.addEventListener('click',function(e) {
	$.name.blur();
	$.password.blur();
});

$.saveButton.addEventListener('click',function(e) {
	saveInfo();
});


function saveInfo() {
	if ($.name.value.trim() == "") {
  		var dialog = Ti.UI.createAlertDialog({
    		message: 'Please enter your username.',
			ok: 'OK',
			title: 'Error'
  		}).show();
		return;
	}
	
	if ($.password.value.trim() == "") {
  		var dialog = Ti.UI.createAlertDialog({
    		message: 'Please enter the password.',
			ok: 'OK',
			title: 'Error'
  		}).show();
		return;
	}
	

	
	var mainWin = Alloy.createController('events').getView();
	mainWin.open();
}
$.loginWin.open();
