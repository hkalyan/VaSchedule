$.downloads.addEventListener('click',function(e){
	var w = Alloy.createController('attachments').getView();
            w.open();
});

$.shareButton.addEventListener('click',function(e){
	
	var opts = {
          title: 'Share',
         
          };
           opts.options = ['Post on Facebook','Twitter','Yammer'];
              opts.buttonNames = ['Cancel'];
        var shareDialog_a = Ti.UI.createOptionDialog(opts);
        shareDialog_a.show();
});
