
/*
 * Adding the picker values
 */

$.todaysEventsTable.addEventListener('click',function(e){
	   var w = Alloy.createController('EventDetails').getView();
            w.open();
});
$.upcomingEventsTable.addEventListener('click',function(e){
	   var w = Alloy.createController('EventDetails').getView();
            w.open();
});
// Create the first TableViewSection
	var togglebutton_today = Ti.UI.createButton({
    backgroundImage: '/images/expander_close_holo_dark.9.png',
    left: 5,
    width: 50,
    height: 50
	});
	togglebutton_today.addEventListener('click',function(e){
		if($.todaysEventsTable.visible)
		{
			$.todaysEventsTable.hide();
			togglebutton_today.setBackgroundImage("/images/expander_open_holo_dark.9.png");
		}
		else{
			$.todaysEventsTable.show();
			togglebutton_today.setBackgroundImage("/images/expander_close_holo_dark.9.png");
			
		}
	    
	});

    var todaystext = Ti.UI.createLabel({
        text: "Todays Events",
        left: 50,
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
	
	$.todaysEventsView.add(togglebutton_today);
	$.todaysEventsView.add(todaystext);
	
    $.todaysEventsView.add(todayspicker);
    
    
    // Create the first TableViewSection
	var togglebutton_upcoming = Ti.UI.createButton({
    backgroundImage: '/images/expander_close_holo_dark.9.png',
    backgroundSelectedImage:'/images/ic_find_previous_holo_light.png',
    left: 5,
    width: 50,
    height: 50
	});
	togglebutton_upcoming.addEventListener('click',function(e){
		if($.upcomingEventsTable.visible)
		{
			$.upcomingEventsTable.hide();
			togglebutton_upcoming.setBackgroundImage("/images/expander_open_holo_dark.9.png");
		}
		else{
			$.upcomingEventsTable.show();
			togglebutton_upcoming.setBackgroundImage("/images/expander_close_holo_dark.9.png");
			
		}
	    
	});

    var upcomingtext = Ti.UI.createLabel({
        text: "Upcoming Events",
        left: 50,
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
	
	$.upcomingEventsView.add(togglebutton_upcoming);
	$.upcomingEventsView.add(upcomingtext);
	
    $.upcomingEventsView.add(upcomingpicker);
    
// use a loop to add some rows


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
	var w = Alloy.createController('myevents').getView();
    w.open();
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
    	var w = Alloy.createController('networking').getView();
    	w.open();
    });
}


            $.mainWin.open();