function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.myevents = Ti.UI.createWindow({
        top: 0,
        zIndex: 100,
        title: "My Events",
        backgroundColor: "#fff",
        navBarHidden: !1,
        backgroundGradient: {
            type: "radial",
            startPoint: {
                x: "50%",
                y: "50%"
            },
            endPoint: {
                x: "50%",
                y: "50%"
            },
            colors: [ "#fff", "#bbb" ],
            startRadius: "90%",
            endRadius: 0,
            backfillStart: !0
        },
        id: "myevents"
    });
    $.addTopLevelView($.__views.myevents);
    $.__views.__alloyId40 = Ti.UI.createView({
        top: 0,
        id: "__alloyId40"
    });
    $.__views.myevents.add($.__views.__alloyId40);
    $.__views.todaysEventsView = Ti.UI.createView({
        top: 10,
        height: 55,
        id: "todaysEventsView",
        backgroundColor: "#222"
    });
    $.__views.__alloyId40.add($.__views.todaysEventsView);
    $.__views.__alloyId41 = Ti.UI.createTableViewRow({
        rightImage: "/images/ic_go_search_api_holo_light.png",
        height: 80,
        id: "__alloyId41"
    });
    var __alloyId42 = [];
    __alloyId42.push($.__views.__alloyId41);
    $.__views.name = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 24
        },
        left: "5",
        top: "0",
        id: "name",
        text: "Event 1"
    });
    $.__views.__alloyId41.add($.__views.name);
    $.__views.track = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 18,
            color: "blue"
        },
        left: "5",
        top: "30",
        id: "track",
        text: "Track Information"
    });
    $.__views.__alloyId41.add($.__views.track);
    $.__views.location = Ti.UI.createLabel({
        color: "blue",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 18,
            color: "red"
        },
        left: "5",
        bottom: "5",
        id: "location",
        text: "01/01/01,2:20PM"
    });
    $.__views.__alloyId41.add($.__views.location);
    $.__views.__alloyId43 = Ti.UI.createTableViewRow({
        rightImage: "/images/ic_go_search_api_holo_light.png",
        height: 80,
        id: "__alloyId43"
    });
    __alloyId42.push($.__views.__alloyId43);
    $.__views.name = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 24
        },
        left: "5",
        top: "0",
        id: "name",
        text: "Event 2"
    });
    $.__views.__alloyId43.add($.__views.name);
    $.__views.track = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 18,
            color: "blue"
        },
        left: "5",
        top: "30",
        id: "track",
        text: "Track Information"
    });
    $.__views.__alloyId43.add($.__views.track);
    $.__views.location = Ti.UI.createLabel({
        color: "blue",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 18,
            color: "red"
        },
        left: "5",
        bottom: "5",
        id: "location",
        text: "01/01/01,2:20PM"
    });
    $.__views.__alloyId43.add($.__views.location);
    $.__views.__alloyId44 = Ti.UI.createTableViewRow({
        rightImage: "/images/ic_go_search_api_holo_light.png",
        height: 80,
        id: "__alloyId44"
    });
    __alloyId42.push($.__views.__alloyId44);
    $.__views.name = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 24
        },
        left: "5",
        top: "0",
        id: "name",
        text: "Event 3"
    });
    $.__views.__alloyId44.add($.__views.name);
    $.__views.track = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 18,
            color: "blue"
        },
        left: "5",
        top: "30",
        id: "track",
        text: "Track Information"
    });
    $.__views.__alloyId44.add($.__views.track);
    $.__views.location = Ti.UI.createLabel({
        color: "blue",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 18,
            color: "red"
        },
        left: "5",
        bottom: "5",
        id: "location",
        text: "01/01/01,2:20PM"
    });
    $.__views.__alloyId44.add($.__views.location);
    $.__views.todaysEventsTable = Ti.UI.createTableView({
        top: 90,
        data: __alloyId42,
        id: "todaysEventsTable"
    });
    $.__views.__alloyId40.add($.__views.todaysEventsTable);
    $.__views.upcomingEventsView = Ti.UI.createView({
        top: 330,
        height: 55,
        id: "upcomingEventsView",
        backgroundColor: "#222"
    });
    $.__views.__alloyId40.add($.__views.upcomingEventsView);
    $.__views.__alloyId45 = Ti.UI.createTableViewRow({
        rightImage: "/images/ic_go_search_api_holo_light.png",
        height: 80,
        id: "__alloyId45"
    });
    var __alloyId46 = [];
    __alloyId46.push($.__views.__alloyId45);
    $.__views.name = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 24
        },
        left: "5",
        top: "0",
        id: "name",
        text: "Event 1"
    });
    $.__views.__alloyId45.add($.__views.name);
    $.__views.track = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 18,
            color: "blue"
        },
        left: "5",
        top: "30",
        id: "track",
        text: "Track Information"
    });
    $.__views.__alloyId45.add($.__views.track);
    $.__views.location = Ti.UI.createLabel({
        color: "blue",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 18,
            color: "red"
        },
        left: "5",
        bottom: "5",
        id: "location",
        text: "01/01/01,2:20PM"
    });
    $.__views.__alloyId45.add($.__views.location);
    $.__views.__alloyId47 = Ti.UI.createTableViewRow({
        rightImage: "/images/ic_go_search_api_holo_light.png",
        height: 80,
        id: "__alloyId47"
    });
    __alloyId46.push($.__views.__alloyId47);
    $.__views.name = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 24
        },
        left: "5",
        top: "0",
        id: "name",
        text: "Event 2"
    });
    $.__views.__alloyId47.add($.__views.name);
    $.__views.track = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 18,
            color: "blue"
        },
        left: "5",
        top: "30",
        id: "track",
        text: "Track Information"
    });
    $.__views.__alloyId47.add($.__views.track);
    $.__views.location = Ti.UI.createLabel({
        color: "blue",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 18,
            color: "red"
        },
        left: "5",
        bottom: "5",
        id: "location",
        text: "01/01/01,2:20PM"
    });
    $.__views.__alloyId47.add($.__views.location);
    $.__views.__alloyId48 = Ti.UI.createTableViewRow({
        rightImage: "/images/ic_go_search_api_holo_light.png",
        height: 80,
        id: "__alloyId48"
    });
    __alloyId46.push($.__views.__alloyId48);
    $.__views.name = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 24
        },
        left: "5",
        top: "0",
        id: "name",
        text: "Event 3"
    });
    $.__views.__alloyId48.add($.__views.name);
    $.__views.track = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 18,
            color: "blue"
        },
        left: "5",
        top: "30",
        id: "track",
        text: "Track Information"
    });
    $.__views.__alloyId48.add($.__views.track);
    $.__views.location = Ti.UI.createLabel({
        color: "blue",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 18,
            color: "red"
        },
        left: "5",
        bottom: "5",
        id: "location",
        text: "01/01/01,2:20PM"
    });
    $.__views.__alloyId48.add($.__views.location);
    $.__views.upcomingEventsTable = Ti.UI.createTableView({
        top: 400,
        data: __alloyId46,
        id: "upcomingEventsTable"
    });
    $.__views.__alloyId40.add($.__views.upcomingEventsTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.todaysEventsTable.addEventListener("click", function(e) {
        var w = Alloy.createController("myeventdetails").getView();
        w.open();
    });
    $.upcomingEventsTable.addEventListener("click", function(e) {
        var w = Alloy.createController("myeventdetails").getView();
        w.open();
    });
    var togglebutton_today = Ti.UI.createButton({
        backgroundImage: "/images/expander_close_holo_dark.9.png",
        left: 5,
        width: 50,
        height: 50
    });
    togglebutton_today.addEventListener("click", function(e) {
        if ($.todaysEventsTable.visible) {
            $.todaysEventsTable.hide();
            togglebutton_today.setBackgroundImage("/images/expander_open_holo_dark.9.png");
        } else {
            $.todaysEventsTable.show();
            togglebutton_today.setBackgroundImage("/images/expander_close_holo_dark.9.png");
        }
    });
    var todaystext = Ti.UI.createLabel({
        text: "Todays Events",
        left: 50,
        color: "#fff"
    }), todayspicker = Ti.UI.createPicker({
        right: 20,
        height: 60
    }), data = [];
    data[0] = Ti.UI.createPickerRow({
        title: "Event Date/Time"
    });
    data[1] = Ti.UI.createPickerRow({
        title: "Session Name"
    });
    data[2] = Ti.UI.createPickerRow({
        title: "Speaker"
    });
    data[3] = Ti.UI.createPickerRow({
        title: "Title"
    });
    todayspicker.add(data);
    todayspicker.selectionIndicator = !0;
    $.todaysEventsView.add(togglebutton_today);
    $.todaysEventsView.add(todaystext);
    $.todaysEventsView.add(todayspicker);
    var togglebutton_upcoming = Ti.UI.createButton({
        backgroundImage: "/images/expander_close_holo_dark.9.png",
        backgroundSelectedImage: "/images/ic_find_previous_holo_light.png",
        left: 5,
        width: 50,
        height: 50
    });
    togglebutton_upcoming.addEventListener("click", function(e) {
        if ($.upcomingEventsTable.visible) {
            $.upcomingEventsTable.hide();
            togglebutton_upcoming.setBackgroundImage("/images/expander_open_holo_dark.9.png");
        } else {
            $.upcomingEventsTable.show();
            togglebutton_upcoming.setBackgroundImage("/images/expander_close_holo_dark.9.png");
        }
    });
    var upcomingtext = Ti.UI.createLabel({
        text: "Upcoming Events",
        left: 50,
        color: "#fff"
    }), upcomingpicker = Ti.UI.createPicker({
        right: 20,
        height: 60
    }), data = [];
    data[0] = Ti.UI.createPickerRow({
        title: "Event Date/Time"
    });
    data[1] = Ti.UI.createPickerRow({
        title: "Session Name"
    });
    data[2] = Ti.UI.createPickerRow({
        title: "Speaker"
    });
    data[3] = Ti.UI.createPickerRow({
        title: "Title"
    });
    upcomingpicker.add(data);
    upcomingpicker.selectionIndicator = !0;
    $.upcomingEventsView.add(togglebutton_upcoming);
    $.upcomingEventsView.add(upcomingtext);
    $.upcomingEventsView.add(upcomingpicker);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;