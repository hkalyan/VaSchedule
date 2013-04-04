function Controller() {
    function saveInfo() {
        if ($.name.value.trim() == "") {
            var dialog = Ti.UI.createAlertDialog({
                message: "Please enter your username.",
                ok: "OK",
                title: "Error"
            }).show();
            return;
        }
        if ($.password.value.trim() == "") {
            var dialog = Ti.UI.createAlertDialog({
                message: "Please enter the password.",
                ok: "OK",
                title: "Error"
            }).show();
            return;
        }
        var mainWin = Alloy.createController("events").getView();
        mainWin.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.loginWin = Ti.UI.createWindow({
        top: 0,
        zIndex: 100,
        title: "Welcome",
        layout: "vertical",
        backgroundColor: "#fff",
        navBarHidden: !0,
        id: "loginWin"
    });
    $.addTopLevelView($.__views.loginWin);
    $.__views.__alloyId7 = Ti.UI.createScrollView({
        width: "100%",
        height: "100%",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "50%",
                y: "100%"
            },
            endPoint: {
                x: "0%",
                y: "50%"
            },
            colors: [ "#fff", "#bbb" ]
        },
        id: "__alloyId7"
    });
    $.__views.loginWin.add($.__views.__alloyId7);
    $.__views.va_logo = Ti.UI.createImageView({
        top: 5,
        height: 100,
        width: 100,
        id: "va_logo",
        image: "/images/va_logo.png"
    });
    $.__views.__alloyId7.add($.__views.va_logo);
    $.__views.welcome_Text = Ti.UI.createLabel({
        top: 130,
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        text: "Welcome to the Radiology Wiki.\nPlease setup your profile below.",
        id: "welcome_Text"
    });
    $.__views.__alloyId7.add($.__views.welcome_Text);
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        height: 80,
        alignment: "horizontal",
        leftImage: "/images/man_64.png",
        id: "__alloyId9"
    });
    var __alloyId10 = [];
    __alloyId10.push($.__views.__alloyId9);
    $.__views.name = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        color: "black",
        backgroundColor: "white",
        height: 80,
        top: 5,
        left: 60,
        right: 0,
        width: "80%",
        clearButtonMode: 1,
        hintText: "Name",
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        id: "name"
    });
    $.__views.__alloyId9.add($.__views.name);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        height: 80,
        alignment: "horizontal",
        leftImage: "/images/mail_64.png",
        id: "__alloyId11"
    });
    __alloyId10.push($.__views.__alloyId11);
    $.__views.password = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        color: "black",
        backgroundColor: "white",
        height: 80,
        top: 5,
        left: 60,
        right: 0,
        width: "80%",
        clearButtonMode: 1,
        hintText: "Password",
        returnKeyType: Titanium.UI.RETURNKEY_GO,
        passwordMask: "true",
        id: "password"
    });
    $.__views.__alloyId11.add($.__views.password);
    $.__views.__alloyId8 = Ti.UI.createTableView({
        top: 200,
        width: Ti.UI.FILL,
        left: 5,
        right: 5,
        backgroundColor: "#fff",
        rowBackgroundColor: "#fff",
        scrollable: !1,
        height: 160,
        borderColor: "black",
        borderRadius: 8,
        borderWidth: 1,
        data: __alloyId10,
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.saveButton = Ti.UI.createButton({
        title: "Continue",
        top: 475,
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,
        backgroundGradient: {
            type: "linear",
            colors: [ "#195280", "#003F72" ],
            startPoint: {
                x: 0,
                y: 0
            },
            endPoint: {
                x: 0,
                y: "100%"
            },
            backFillStart: !1
        },
        shadowColor: "#000",
        shadowOffset: {
            x: 1,
            y: 1
        },
        color: "#fff",
        width: 300,
        height: 50,
        id: "saveButton"
    });
    $.__views.__alloyId7.add($.__views.saveButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.saveButton.addEventListener("touchstart", function(e) {
        $.saveButton.setBackgroundGradient({});
        $.saveButton.setBackgroundColor("#193149");
    });
    $.saveButton.addEventListener("touchend", function(e) {
        $.saveButton.setBackgroundGradient({
            type: "linear",
            colors: [ "#1975A3", "#3083AC" ],
            startPoint: {
                x: 0,
                y: 0
            },
            endPoint: {
                x: 0,
                y: "100%"
            },
            backFillStart: !1
        });
        $.saveButton.setBackgroundColor("transparent");
    });
    $.name.addEventListener("return", function(e) {
        $.password.focus();
    });
    $.password.addEventListener("return", function(e) {
        $.password.blur();
        saveInfo();
    });
    $.loginWin.addEventListener("click", function(e) {
        $.name.blur();
        $.password.blur();
    });
    $.saveButton.addEventListener("click", function(e) {
        saveInfo();
    });
    $.loginWin.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;