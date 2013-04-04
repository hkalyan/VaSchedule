
/*
 * Adding the picker values
 */

// Create the first TableViewSection

 var headerview = Ti.UI.createView({
        backgroundColor: '#222',
        height: 80
    });
    var text = Ti.UI.createLabel({
        text: "Todays Events",
        left: 20,
        color: '#fff'
    });
    var picker = Ti.UI.createPicker({
    	right:20,
    	height:60,
});

	var data = [];
	data[0]=Ti.UI.createPickerRow({title:'Event Date/Time'});
	data[1]=Ti.UI.createPickerRow({title:'Session Name'});
	data[2]=Ti.UI.createPickerRow({title:'Speaker'});
	data[3]=Ti.UI.createPickerRow({title:'Title'});
	
	picker.add(data);
	picker.selectionIndicator = true;
	
	headerview.add(text);
    headerview.add(picker);
	var section1 = Ti.UI.createTableViewSection({
		
		headerView: headerview,
		height:'auto'
		
	});
// use a loop to add some rows
for (var i=0; i < 4; i++) {
	section1.add(Ti.UI.createTableViewRow({
		title:'Todays Events '+i,
		font:{fontFamily:'Helvetica Neue',fontSize:18,fontWeight:'bold', color: 'black'},
	}));
}

// do it all again...
var section2 = Ti.UI.createTableViewSection({
	headerView: headerview,
		height:'auto'
});
for (var i=4; i < 10; i++) {
	section2.add(Ti.UI.createTableViewRow({
		title:'Upcoming Events '+i,
		font:{fontFamily:'Helvetica Neue',fontSize:18,fontWeight:'bold', color: 'black'},
	}));
}

$.eventsTable.setData([section1,section2]);
var eventdata = [];
eventdata[0]=Ti.UI.createPickerRow({title:'Show All'});
eventdata[1]=Ti.UI.createPickerRow({title:'Todays Events'});
eventdata[2]=Ti.UI.createPickerRow({title:'Upcoming Events'});

/*$.eventtypepicker.add(eventdata);
$.eventtypepicker.selectionIndicator = true;*/

$.topicsIcon.addEventListener('touchstart', function() {
    $.topicsIcon.setImage('/images/menu_64.png');
});

$.topicsIcon.addEventListener('touchend', function() {
    $.topicsIcon.setImage('/images/menu_64a.png');
});

$.topicsIcon.addEventListener('click', function() {
});

$.favoritesIcon.addEventListener('touchstart', function() {
    $.favoritesIcon.setImage('/images/star_64.png');
});

$.favoritesIcon.addEventListener('touchend', function() {
    $.favoritesIcon.setImage('/images/star_64a.png');
});

$.favoritesIcon.addEventListener('click', function() {
    if ((OS_IOS||OS_ANDROID) && Alloy.isHandheld) {
        //$.favoritesDialog.show();
        
      
   
    }
});

function openFavoritesWin() {
    var w = Alloy.createController('favorites').getView();
    var slideUp = Titanium.UI.createAnimation();
    if(OS_IOS)
    {
    slideUp.top = 0;
    slideUp.duration = 450;
    w.open(slideUp);
    }
    else{
        w.open();
    }
}

function openShareEmail() {
    var emailDialog = Titanium.UI.createEmailDialog()
    emailDialog.subject = "Radiology and Nuclear Medicine ADPAC";
    emailDialog.toRecipients = ['john_smith@yahoo.com'];
    emailDialog.messageBody = 'Radiology and Nuclear Medicine ADPAC\n\nThe following information may be useful to the Radiology/ Nuclear Medicine ADPAC.';
    emailDialog.open();
}

function postToFacebook() {
    // First make sure this permission exists
    Titanium.Facebook.permissions = ['publish_stream'];
           
    Titanium.Facebook.addEventListener('login', function(e) {
        if (e.success) {
            alert('Logged In');
            Titanium.Facebook.requestWithGraphPath('me/feed', {message: "Trying out FB Graph API and it's fun!"}, "POST", function(e) {
                if (e.success) {
                    alert("Success!  From FB: " + e.result);
                } else {
                    if (e.error) {
                        alert(e.error);
                    } else {
                        alert("Unkown result");
                    }
                }
            });
        } else if (e.error) {
            alert(e.error);
        } else if (e.cancelled) {
            alert("Canceled");
        }
    });
   
    Titanium.Facebook.authorize();
}

function openAddTip() {
    var w = Alloy.createController('addTip').getView();
    if(OS_IOS)
    {
        var slideUp = Titanium.UI.createAnimation();
        slideUp.top = 0;
        slideUp.duration = 450;
        w.open(slideUp);
    }
    else if(OS_ANDROID){
           
    }
}

if ((OS_IOS ||OS_ANDROID)&& Alloy.isHandheld) {
   
  
}

$.tipIcon.addEventListener('touchstart', function() {
    $.tipIcon.setImage('/images/share_64.png');
});

$.tipIcon.addEventListener('touchend', function() {
    $.tipIcon.setImage('/images/share_64a.png');
});

$.tipIcon.addEventListener('click', function() {
    if (OS_IOS && Alloy.isHandheld) {
        $.shareDialog.open();
    }
    else if(OS_ANDROID)
    {
       
       
      
    }
    else if (OS_IOS) {
        var view_p = Ti.UI.createView({
            backgroundColor:'#fff',
            borderColor:'#363636',
            borderWidth:2,
            width:300,
            height:130
        });
       
    }
});

$.settingsIcon.addEventListener('touchstart', function() {
    $.settingsIcon.setImage('/images/gear_64.png');
});

$.settingsIcon.addEventListener('touchend', function() {
    $.settingsIcon.setImage('/images/gear_64a.png');
});

if(OS_IOS)
{
    $.settingsIcon.addEventListener('click', function() {
        var w = Alloy.createController('settings').getView();
        var slideUp = Titanium.UI.createAnimation();
        slideUp.top = 0;
        slideUp.duration = 450;
        w.open(slideUp);
    });
}
else if(OS_ANDROID)
{
    $.settingsIcon.addEventListener('click', function() {
    });
}


            $.mainWin.open();