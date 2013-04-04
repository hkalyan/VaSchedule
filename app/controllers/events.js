
/*
 * Adding the picker values
 */

// Create the first TableViewSection


    var todaystext = Ti.UI.createLabel({
        text: "Todays Events",
        left: 20,
        color: '#fff'
    });
    var todayspicker = Ti.UI.createPicker({
    	right:20,
    	height:60,
});

	var data = [];
	data[0]=Ti.UI.createPickerRow({title:'Event Date/Time'});
	data[1]=Ti.UI.createPickerRow({title:'Session Name'});
	data[2]=Ti.UI.createPickerRow({title:'Speaker'});
	data[3]=Ti.UI.createPickerRow({title:'Title'});
	
	todayspicker.add(data);
	todayspicker.selectionIndicator = true;
	
	$.todaysEventsView.add(todaystext);
	
    $.todaysEventsView.add(todayspicker);
    
    
    // Create the first TableViewSection


    var upcomingtext = Ti.UI.createLabel({
        text: "Upcoming Events",
        left: 20,
        color: '#fff'
    });
    var upcomingpicker = Ti.UI.createPicker({
    	right:20,
    	height:60,
	});

	var data = [];
	data[0]=Ti.UI.createPickerRow({title:'Event Date/Time'});
	data[1]=Ti.UI.createPickerRow({title:'Session Name'});
	data[2]=Ti.UI.createPickerRow({title:'Speaker'});
	data[3]=Ti.UI.createPickerRow({title:'Title'});
	
	upcomingpicker.add(data);
	upcomingpicker.selectionIndicator = true;
	
	$.upcomingEventsView.add(upcomingtext);
	
    $.upcomingEventsView.add(upcomingpicker);
    
    
// use a loop to add some rows
var todaysdata=[];
for (var i=0; i < 4; i++) {
	row = Ti.UI.createTableViewRow({
		title:'Todays Events '+i,
		font:{fontFamily:'Helvetica Neue',fontSize:18,fontWeight:'bold', color: 'black'},
	});
	//row.add(picker);
	todaysdata.push(row);
}

$.todaysEventsTable.setData(todaysdata);

var upcomingdata=[];
for (var i=4; i < 10; i++) {
	row = Ti.UI.createTableViewRow({
		title:'Upcoming Events '+i,
		font:{fontFamily:'Helvetica Neue',fontSize:18,fontWeight:'bold', color: 'black'},
	});
	upcomingdata.push(row);
}

$.upcomingEventsTable.setData(upcomingdata);

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
            var w = Alloy.createController('contactsupport').getView();
            w.open();
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
    if(OS_ANDROID)
    {
       
         var w = Alloy.createController('contactsupport').getView();
            w.open();
      
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