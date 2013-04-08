$.todaysEventsTable.addEventListener('click',function(e){
	   var w = Alloy.createController('myeventdetails').getView();
            w.open();
});
$.upcomingEventsTable.addEventListener('click',function(e){
	   var w = Alloy.createController('myeventdetails').getView();
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
    
    