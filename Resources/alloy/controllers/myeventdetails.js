function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.eventDetailsWrapper = Ti.UI.createWindow({
        top: 0,
        zIndex: 100,
        layout: "vertical",
        title: "Event Details",
        backgroundColor: "#fff",
        navBarHidden: !1,
        id: "eventDetailsWrapper"
    });
    $.addTopLevelView($.__views.eventDetailsWrapper);
    $.__views.__alloyId31 = Ti.UI.createTableViewSection({
        headerTitle: "Description",
        id: "__alloyId31"
    });
    var __alloyId32 = [];
    __alloyId32.push($.__views.__alloyId31);
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        height: "80",
        id: "__alloyId33"
    });
    $.__views.__alloyId31.add($.__views.__alloyId33);
    $.__views.description = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 24,
            font: "sans-serif"
        },
        left: 0,
        text: "The Care Assessment Need (CAN) score reflects a patient’s estimated probability ",
        id: "description"
    });
    $.__views.__alloyId33.add($.__views.description);
    $.__views.__alloyId34 = Ti.UI.createTableViewSection({
        headerTitle: "Objectives",
        id: "__alloyId34"
    });
    __alloyId32.push($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createTableViewRow({
        height: "120",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.description = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 24,
            font: "sans-serif"
        },
        left: 0,
        text: "1)Acquaint the primary care leaders and care managers about the Care Assessment Need Score and the Patient Care Assessment",
        id: "description"
    });
    $.__views.__alloyId35.add($.__views.description);
    $.__views.__alloyId36 = Ti.UI.createTableViewSection({
        headerTitle: "Audience",
        id: "__alloyId36"
    });
    __alloyId32.push($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createTableViewRow({
        height: "50",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.description = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 24,
            font: "sans-serif"
        },
        left: 0,
        text: "Clinical Staff",
        id: "description"
    });
    $.__views.__alloyId37.add($.__views.description);
    $.__views.__alloyId38 = Ti.UI.createTableViewSection({
        headerTitle: "Downloads",
        id: "__alloyId38"
    });
    __alloyId32.push($.__views.__alloyId38);
    $.__views.downloads = Ti.UI.createTableViewRow({
        id: "downloads",
        height: "50",
        rightImage: "/images/ic_go_search_api_holo_light.png"
    });
    $.__views.__alloyId38.add($.__views.downloads);
    $.__views.attachments = Ti.UI.createLabel({
        color: "#444",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 24,
            font: "sans-serif"
        },
        left: "5",
        id: "attachments",
        text: "Attachments"
    });
    $.__views.downloads.add($.__views.attachments);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        height: "70",
        id: "__alloyId39"
    });
    __alloyId32.push($.__views.__alloyId39);
    $.__views.shareButton = Ti.UI.createButton({
        title: "Share",
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
        width: 150,
        height: 60,
        id: "shareButton"
    });
    $.__views.__alloyId39.add($.__views.shareButton);
    $.__views.__alloyId30 = Ti.UI.createTableView({
        data: __alloyId32,
        height: "85%",
        id: "__alloyId30"
    });
    $.__views.eventDetailsWrapper.add($.__views.__alloyId30);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.downloads.addEventListener("click", function(e) {
        var w = Alloy.createController("attachments").getView();
        w.open();
    });
    $.shareButton.addEventListener("click", function(e) {
        var opts = {
            title: "Share"
        };
        opts.options = [ "Post on Facebook", "Twitter", "Yammer" ];
        opts.buttonNames = [ "Cancel" ];
        var shareDialog_a = Ti.UI.createOptionDialog(opts);
        shareDialog_a.show();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;