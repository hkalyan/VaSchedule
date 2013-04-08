function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.networkingWrapper = Ti.UI.createWindow({
        top: 0,
        zIndex: 100,
        layout: "vertical",
        title: "Virtual Networking",
        backgroundColor: "#fff",
        navBarHidden: !1,
        id: "networkingWrapper"
    });
    $.addTopLevelView($.__views.networkingWrapper);
    $.__views.__alloyId50 = Ti.UI.createTableViewRow({
        leftImage: "/images/presence_online.png",
        height: 80,
        id: "__alloyId50"
    });
    var __alloyId51 = [];
    __alloyId51.push($.__views.__alloyId50);
    $.__views.name = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 24
        },
        left: "5",
        top: "5",
        id: "name",
        text: "Mary Lambert"
    });
    $.__views.__alloyId50.add($.__views.name);
    $.__views.location = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 18
        },
        left: "5",
        bottom: "10",
        id: "location",
        text: "Norfolk,VA"
    });
    $.__views.__alloyId50.add($.__views.location);
    $.__views.email = Ti.UI.createButton({
        id: "email",
        right: "5",
        top: "5",
        width: "30",
        height: "30",
        backgroundImage: "/images/mail_64.png"
    });
    $.__views.__alloyId50.add($.__views.email);
    $.__views.sendcontact = Ti.UI.createButton({
        id: "sendcontact",
        right: "110",
        top: "2",
        width: "30",
        height: "30",
        backgroundImage: "/images/sym_contact_card.png"
    });
    $.__views.__alloyId50.add($.__views.sendcontact);
    $.__views.__alloyId52 = Ti.UI.createTableViewRow({
        leftImage: "/images/presence_online.png",
        height: 80,
        id: "__alloyId52"
    });
    __alloyId51.push($.__views.__alloyId52);
    $.__views.name = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 24
        },
        left: "5",
        top: "5",
        id: "name",
        text: "Victor Skawrozy"
    });
    $.__views.__alloyId52.add($.__views.name);
    $.__views.location = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 18
        },
        left: "5",
        bottom: "10",
        id: "location",
        text: "Richmond,VA"
    });
    $.__views.__alloyId52.add($.__views.location);
    $.__views.__alloyId53 = Ti.UI.createButton({
        right: "5",
        top: "5",
        width: "30",
        height: "30",
        backgroundImage: "/images/mail_64.png",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createButton({
        right: "110",
        top: "2",
        width: "30",
        height: "30",
        backgroundImage: "/images/sym_contact_card.png",
        id: "__alloyId54"
    });
    $.__views.__alloyId52.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createTableViewRow({
        leftImage: "/images/presence_online.png",
        height: 80,
        id: "__alloyId55"
    });
    __alloyId51.push($.__views.__alloyId55);
    $.__views.name = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 24
        },
        left: "5",
        top: "5",
        id: "name",
        text: "David Guetta"
    });
    $.__views.__alloyId55.add($.__views.name);
    $.__views.location = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 18
        },
        left: "5",
        bottom: "10",
        id: "location",
        text: "Chicago,IL"
    });
    $.__views.__alloyId55.add($.__views.location);
    $.__views.__alloyId56 = Ti.UI.createButton({
        right: "5",
        top: "5",
        width: "30",
        height: "30",
        backgroundImage: "/images/mail_64.png",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createButton({
        right: "110",
        top: "2",
        width: "30",
        height: "30",
        backgroundImage: "/images/sym_contact_card.png",
        id: "__alloyId57"
    });
    $.__views.__alloyId55.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createTableViewRow({
        leftImage: "/images/presence_online.png",
        height: 80,
        id: "__alloyId58"
    });
    __alloyId51.push($.__views.__alloyId58);
    $.__views.name = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 24
        },
        left: "5",
        top: "5",
        id: "name",
        text: "Taylor Swift"
    });
    $.__views.__alloyId58.add($.__views.name);
    $.__views.location = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 18
        },
        left: "5",
        bottom: "10",
        id: "location",
        text: "Newyork,NY"
    });
    $.__views.__alloyId58.add($.__views.location);
    $.__views.__alloyId59 = Ti.UI.createButton({
        right: "5",
        top: "5",
        width: "30",
        height: "30",
        backgroundImage: "/images/mail_64.png",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createButton({
        right: "110",
        top: "2",
        width: "30",
        height: "30",
        backgroundImage: "/images/sym_contact_card.png",
        id: "__alloyId60"
    });
    $.__views.__alloyId58.add($.__views.__alloyId60);
    $.__views.__alloyId49 = Ti.UI.createTableView({
        data: __alloyId51,
        top: "20",
        height: "85%",
        id: "__alloyId49"
    });
    $.__views.networkingWrapper.add($.__views.__alloyId49);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.email.addEventListener("click", function(e) {
        var w = Alloy.createController("emailcontact").getView();
        w.open();
    });
    $.sendcontact.addEventListener("click", function(e) {
        var w = Alloy.createController("sendcontact").getView();
        w.open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;