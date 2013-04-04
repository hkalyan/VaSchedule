function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.addTipWinWrapper = Ti.UI.createWindow({
        top: 0,
        zIndex: 100,
        title: "Contact Technical Supprot",
        layout: "vertical",
        backgroundColor: "#fff",
        navBarHidden: !1,
        id: "addTipWinWrapper",
        modal: "true",
        tabBarHidden: "false"
    });
    $.addTopLevelView($.__views.addTipWinWrapper);
    $.__views.headerLabel = Ti.UI.createLabel({
        top: 35,
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        font: {
            fontSize: 24,
            font: "sans-serif",
            fontWeight: "bold"
        },
        text: "Your System Information",
        id: "headerLabel"
    });
    $.__views.addTipWinWrapper.add($.__views.headerLabel);
    $.__views.osInfo = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        font: {
            fontSize: 18,
            font: "sans-serif"
        },
        text: "OS: Microsoft Windows 7",
        id: "osInfo"
    });
    $.__views.addTipWinWrapper.add($.__views.osInfo);
    $.__views.browserInfo = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        font: {
            fontSize: 18,
            font: "sans-serif"
        },
        text: "Browser: Chrome 26.0",
        id: "browserInfo"
    });
    $.__views.addTipWinWrapper.add($.__views.browserInfo);
    $.__views.flashInfo = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        left: 5,
        font: {
            fontSize: 18,
            font: "sans-serif"
        },
        text: "Flash: Shockwave Flash 11.6 r602",
        id: "flashInfo"
    });
    $.__views.addTipWinWrapper.add($.__views.flashInfo);
    $.__views.resolutionInfo = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 18,
            font: "sans-serif"
        },
        left: 5,
        text: "Viewable Resolution: 1920 X 1099",
        id: "resolutionInfo"
    });
    $.__views.addTipWinWrapper.add($.__views.resolutionInfo);
    $.__views.userInfo = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 18,
            font: "sans-serif"
        },
        left: 5,
        text: "User: John Doe",
        id: "userInfo"
    });
    $.__views.addTipWinWrapper.add($.__views.userInfo);
    $.__views.instr_text = Ti.UI.createLabel({
        top: 15,
        color: "#444",
        left: 5,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 18,
            font: "sans-serif",
            fontWeight: "bold"
        },
        text: "Enter your message below, then press Send.",
        id: "instr_text"
    });
    $.__views.addTipWinWrapper.add($.__views.instr_text);
    $.__views.userTip = Ti.UI.createTextArea({
        suppressReturn: !1,
        borderWidth: 1,
        borderColor: "#bbb",
        borderRadius: 5,
        color: "#000",
        value: "",
        top: 80,
        width: "100%",
        height: 280,
        font: {
            fontSize: 15
        },
        id: "userTip"
    });
    $.__views.addTipWinWrapper.add($.__views.userTip);
    $.__views.sendButton = Ti.UI.createButton({
        title: "Send",
        bottom: 20,
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
        id: "sendButton"
    });
    $.__views.addTipWinWrapper.add($.__views.sendButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Titanium.UI.setBackgroundColor("white");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;