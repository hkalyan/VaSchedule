function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.emailcontact = Ti.UI.createWindow({
        top: 0,
        zIndex: 100,
        title: "Send Email",
        layout: "vertical",
        backgroundColor: "#fff",
        navBarHidden: !1,
        id: "emailcontact"
    });
    $.addTopLevelView($.__views.emailcontact);
    $.__views.subjectLabel = Ti.UI.createLabel({
        top: 35,
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        left: "10",
        font: {
            fontSize: 24,
            font: "sans-serif",
            fontWeight: "bold"
        },
        text: "Subject:",
        id: "subjectLabel"
    });
    $.__views.emailcontact.add($.__views.subjectLabel);
    $.__views.__alloyId6 = Ti.UI.createTextField({
        borderColor: "black",
        left: "10",
        width: "80%",
        id: "__alloyId6"
    });
    $.__views.emailcontact.add($.__views.__alloyId6);
    $.__views.messageLabel = Ti.UI.createLabel({
        top: 35,
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        left: "10",
        font: {
            fontSize: 24,
            font: "sans-serif",
            fontWeight: "bold"
        },
        text: "Message:",
        id: "messageLabel"
    });
    $.__views.emailcontact.add($.__views.messageLabel);
    $.__views.userTip = Ti.UI.createTextArea({
        suppressReturn: !1,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        color: "#000",
        value: "\n\n\n\n Sincerely,\n John Doe.\n College,University\n jdoe@va.com",
        top: 50,
        width: "100%",
        height: 280,
        font: {
            fontSize: 15
        },
        id: "userTip"
    });
    $.__views.emailcontact.add($.__views.userTip);
    $.__views.sendButton = Ti.UI.createButton({
        title: "Send",
        top: 100,
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
    $.__views.emailcontact.add($.__views.sendButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Titanium.UI.setBackgroundColor("white");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;