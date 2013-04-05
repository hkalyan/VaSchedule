function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.networkingWrapper = Ti.UI.createWindow({
        top: 0,
        zIndex: 100,
        layout: "vertical",
        backgroundColor: "#fff",
        navBarHidden: !1,
        id: "networkingWrapper",
        modal: "true",
        title: "Online Users"
    });
    $.addTopLevelView($.__views.networkingWrapper);
    $.__views.__alloyId29 = Ti.UI.createTableViewRow({
        leftImage: "/images/presence_online.png",
        height: 80,
        id: "__alloyId29"
    });
    var __alloyId30 = [];
    __alloyId30.push($.__views.__alloyId29);
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
    $.__views.__alloyId29.add($.__views.name);
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
    $.__views.__alloyId29.add($.__views.location);
    $.__views.__alloyId31 = Ti.UI.createButton({
        right: "5",
        top: "5",
        width: "30",
        height: "30",
        backgroundImage: "/images/mail_64.png",
        id: "__alloyId31"
    });
    $.__views.__alloyId29.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createButton({
        right: "110",
        top: "2",
        width: "30",
        height: "30",
        backgroundImage: "/images/sym_contact_card.png",
        id: "__alloyId32"
    });
    $.__views.__alloyId29.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        leftImage: "/images/presence_online.png",
        height: 80,
        id: "__alloyId33"
    });
    __alloyId30.push($.__views.__alloyId33);
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
    $.__views.__alloyId33.add($.__views.name);
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
    $.__views.__alloyId33.add($.__views.location);
    $.__views.__alloyId34 = Ti.UI.createButton({
        right: "5",
        top: "5",
        width: "30",
        height: "30",
        backgroundImage: "/images/mail_64.png",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createButton({
        right: "110",
        top: "2",
        width: "30",
        height: "30",
        backgroundImage: "/images/sym_contact_card.png",
        id: "__alloyId35"
    });
    $.__views.__alloyId33.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        leftImage: "/images/presence_online.png",
        height: 80,
        id: "__alloyId36"
    });
    __alloyId30.push($.__views.__alloyId36);
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
    $.__views.__alloyId36.add($.__views.name);
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
    $.__views.__alloyId36.add($.__views.location);
    $.__views.__alloyId37 = Ti.UI.createButton({
        right: "5",
        top: "5",
        width: "30",
        height: "30",
        backgroundImage: "/images/mail_64.png",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createButton({
        right: "110",
        top: "2",
        width: "30",
        height: "30",
        backgroundImage: "/images/sym_contact_card.png",
        id: "__alloyId38"
    });
    $.__views.__alloyId36.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        leftImage: "/images/presence_online.png",
        height: 80,
        id: "__alloyId39"
    });
    __alloyId30.push($.__views.__alloyId39);
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
    $.__views.__alloyId39.add($.__views.name);
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
    $.__views.__alloyId39.add($.__views.location);
    $.__views.__alloyId40 = Ti.UI.createButton({
        right: "5",
        top: "5",
        width: "30",
        height: "30",
        backgroundImage: "/images/mail_64.png",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createButton({
        right: "110",
        top: "2",
        width: "30",
        height: "30",
        backgroundImage: "/images/sym_contact_card.png",
        id: "__alloyId41"
    });
    $.__views.__alloyId39.add($.__views.__alloyId41);
    $.__views.__alloyId28 = Ti.UI.createTableView({
        data: __alloyId30,
        top: "20",
        height: "85%",
        id: "__alloyId28"
    });
    $.__views.networkingWrapper.add($.__views.__alloyId28);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;