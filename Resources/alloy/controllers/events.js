function Controller() {
    function openFavoritesWin() {
        var w = Alloy.createController("favorites").getView(), slideUp = Titanium.UI.createAnimation();
        w.open();
    }
    function openShareEmail() {
        var emailDialog = Titanium.UI.createEmailDialog();
        emailDialog.subject = "Radiology and Nuclear Medicine ADPAC";
        emailDialog.toRecipients = [ "john_smith@yahoo.com" ];
        emailDialog.messageBody = "Radiology and Nuclear Medicine ADPAC\n\nThe following information may be useful to the Radiology/ Nuclear Medicine ADPAC.";
        emailDialog.open();
    }
    function postToFacebook() {
        Titanium.Facebook.permissions = [ "publish_stream" ];
        Titanium.Facebook.addEventListener("login", function(e) {
            if (e.success) {
                alert("Logged In");
                Titanium.Facebook.requestWithGraphPath("me/feed", {
                    message: "Trying out FB Graph API and it's fun!"
                }, "POST", function(e) {
                    e.success ? alert("Success!  From FB: " + e.result) : e.error ? alert(e.error) : alert("Unkown result");
                });
            } else e.error ? alert(e.error) : e.cancelled && alert("Canceled");
        });
        Titanium.Facebook.authorize();
    }
    function openAddTip() {
        var w = Alloy.createController("addTip").getView(), w = Alloy.createController("contactsupport").getView();
        w.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.mainWin = Ti.UI.createWindow({
        top: 0,
        zIndex: 100,
        title: "Articles",
        backgroundColor: "#fff",
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
        id: "mainWin",
        navBarHidden: "true",
        exitOnClose: "true"
    });
    $.addTopLevelView($.__views.mainWin);
    $.__views.__alloyId16 = Ti.UI.createTableViewRow({
        id: "__alloyId16"
    });
    var __alloyId17 = [];
    __alloyId17.push($.__views.__alloyId16);
    $.__views.searchtext = Ti.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_NONE,
        rightButton: "#searchbutton",
        textAlign: "left",
        top: 10,
        height: 50,
        bottom: 5,
        width: "80%",
        left: 5,
        id: "searchtext"
    });
    $.__views.__alloyId16.add($.__views.searchtext);
    $.__views.searchbutton = Ti.UI.createButton({
        backgroundImage: "/images/ic_menu_search_holo_dark.png",
        right: 5,
        width: 40,
        height: 40,
        id: "searchbutton"
    });
    $.__views.__alloyId16.add($.__views.searchbutton);
    $.__views.searchbarandroid = Ti.UI.createTableView({
        backgroundColor: "#1e5799",
        layout: "horizontal",
        height: 70,
        top: 0,
        data: __alloyId17,
        id: "searchbarandroid"
    });
    $.__views.mainWin.add($.__views.searchbarandroid);
    $.__views.__alloyId18 = Ti.UI.createView({
        top: 60,
        id: "__alloyId18"
    });
    $.__views.mainWin.add($.__views.__alloyId18);
    $.__views.todaysEventsView = Ti.UI.createView({
        top: 10,
        height: 55,
        id: "todaysEventsView",
        backgroundColor: "#222"
    });
    $.__views.__alloyId18.add($.__views.todaysEventsView);
    $.__views.todaysEventsTable = Ti.UI.createTableView({
        top: 90,
        id: "todaysEventsTable"
    });
    $.__views.__alloyId18.add($.__views.todaysEventsTable);
    $.__views.upcomingEventsView = Ti.UI.createView({
        top: 300,
        height: 55,
        id: "upcomingEventsView",
        backgroundColor: "#222"
    });
    $.__views.__alloyId18.add($.__views.upcomingEventsView);
    $.__views.upcomingEventsTable = Ti.UI.createTableView({
        top: 350,
        id: "upcomingEventsTable"
    });
    $.__views.__alloyId18.add($.__views.upcomingEventsTable);
    $.__views.bottom_toolbar = Ti.UI.createView({
        layout: "horizontal",
        height: 60,
        bottom: 0,
        backgroundColor: "#003F72",
        backgroundGradient: {
            type: "linear",
            colors: [ "#195280", "#003F72" ],
            startPoint: {
                x: 0,
                y: 0
            },
            endPoint: {
                x: 0,
                y: "50%"
            },
            backFillStart: !1
        },
        id: "bottom_toolbar"
    });
    $.__views.mainWin.add($.__views.bottom_toolbar);
    $.__views.bt_spacer = Ti.UI.createView({
        width: "20.69%",
        id: "bt_spacer"
    });
    $.__views.bottom_toolbar.add($.__views.bt_spacer);
    $.__views.__alloyId19 = Ti.UI.createView({
        width: "16%",
        id: "__alloyId19"
    });
    $.__views.bottom_toolbar.add($.__views.__alloyId19);
    $.__views.topicsIcon = Ti.UI.createImageView({
        top: 8,
        bottom: 8,
        left: 15,
        height: 32,
        width: 32,
        id: "topicsIcon",
        image: "/images/menu_64a.png"
    });
    $.__views.__alloyId19.add($.__views.topicsIcon);
    $.__views.__alloyId20 = Ti.UI.createView({
        width: "16%",
        id: "__alloyId20"
    });
    $.__views.bottom_toolbar.add($.__views.__alloyId20);
    $.__views.favoritesIcon = Ti.UI.createImageView({
        top: 8,
        bottom: 8,
        left: 15,
        height: 32,
        width: 32,
        id: "favoritesIcon",
        image: "/images/star_64a.png"
    });
    $.__views.__alloyId20.add($.__views.favoritesIcon);
    $.__views.__alloyId21 = Ti.UI.createView({
        width: "16%",
        id: "__alloyId21"
    });
    $.__views.bottom_toolbar.add($.__views.__alloyId21);
    $.__views.tipIcon = Ti.UI.createImageView({
        top: 8,
        bottom: 8,
        left: 15,
        height: 32,
        width: 32,
        id: "tipIcon",
        image: "/images/share_64a.png"
    });
    $.__views.__alloyId21.add($.__views.tipIcon);
    $.__views.__alloyId22 = Ti.UI.createView({
        width: "16%",
        id: "__alloyId22"
    });
    $.__views.bottom_toolbar.add($.__views.__alloyId22);
    $.__views.settingsIcon = Ti.UI.createImageView({
        top: 8,
        bottom: 8,
        left: 15,
        height: 32,
        width: 32,
        id: "settingsIcon",
        image: "/images/gear_64a.png"
    });
    $.__views.__alloyId22.add($.__views.settingsIcon);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.todaysEventsTable.addEventListener("click", function(e) {
        var w = Alloy.createController("EventDetails").getView();
        w.open();
    });
    $.upcomingEventsTable.addEventListener("click", function(e) {
        var w = Alloy.createController("EventDetails").getView();
        w.open();
    });
    var togglebutton_today = Ti.UI.createButton({
        backgroundImage: "/images/expander_close_holo_dark.9.png",
        left: 5,
        width: 50,
        height: 50
    });
    togglebutton_today.addEventListener("click", function(e) {
        if ($.upcomingEventsTable.visible) {
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
    var todaysdata = [];
    for (var i = 0; i < 4; i++) {
        row = Ti.UI.createTableViewRow({
            title: "Todays Events " + i,
            font: {
                fontFamily: "Helvetica Neue",
                fontSize: 18,
                fontWeight: "bold",
                color: "black"
            }
        });
        todaysdata.push(row);
    }
    $.todaysEventsTable.setData(todaysdata);
    var upcomingdata = [];
    for (var i = 4; i < 10; i++) {
        row = Ti.UI.createTableViewRow({
            title: "Upcoming Events " + i,
            font: {
                fontFamily: "Helvetica Neue",
                fontSize: 18,
                fontWeight: "bold",
                color: "black"
            }
        });
        upcomingdata.push(row);
    }
    $.upcomingEventsTable.setData(upcomingdata);
    var eventdata = [];
    eventdata[0] = Ti.UI.createPickerRow({
        title: "Show All"
    });
    eventdata[1] = Ti.UI.createPickerRow({
        title: "Todays Events"
    });
    eventdata[2] = Ti.UI.createPickerRow({
        title: "Upcoming Events"
    });
    $.topicsIcon.addEventListener("touchstart", function() {
        $.topicsIcon.setImage("/images/menu_64.png");
    });
    $.topicsIcon.addEventListener("touchend", function() {
        $.topicsIcon.setImage("/images/menu_64a.png");
    });
    $.topicsIcon.addEventListener("click", function() {});
    $.favoritesIcon.addEventListener("touchstart", function() {
        $.favoritesIcon.setImage("/images/star_64.png");
    });
    $.favoritesIcon.addEventListener("touchend", function() {
        $.favoritesIcon.setImage("/images/star_64a.png");
    });
    $.favoritesIcon.addEventListener("click", function() {
        !Alloy.isHandheld;
    });
    !Alloy.isHandheld;
    $.tipIcon.addEventListener("touchstart", function() {
        $.tipIcon.setImage("/images/share_64.png");
    });
    $.tipIcon.addEventListener("touchend", function() {
        $.tipIcon.setImage("/images/share_64a.png");
    });
    $.tipIcon.addEventListener("click", function() {
        var w = Alloy.createController("contactsupport").getView();
        w.open();
    });
    $.settingsIcon.addEventListener("touchstart", function() {
        $.settingsIcon.setImage("/images/gear_64.png");
    });
    $.settingsIcon.addEventListener("touchend", function() {
        $.settingsIcon.setImage("/images/gear_64a.png");
    });
    $.settingsIcon.addEventListener("click", function() {
        var w = Alloy.createController("networking").getView();
        w.open();
    });
    $.mainWin.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;