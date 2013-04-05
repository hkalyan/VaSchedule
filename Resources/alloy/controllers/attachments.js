function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.attachmentsWrapper = Ti.UI.createWindow({
        top: 0,
        zIndex: 100,
        layout: "vertical",
        backgroundColor: "#fff",
        navBarHidden: !1,
        id: "attachmentsWrapper",
        modal: "true",
        title: "Attachment"
    });
    $.addTopLevelView($.__views.attachmentsWrapper);
    $.__views.__alloyId1 = Ti.UI.createTableViewRow({
        rightImage: "/images/ic_menu_attachment.png",
        height: 50,
        id: "__alloyId1"
    });
    var __alloyId2 = [];
    __alloyId2.push($.__views.__alloyId1);
    $.__views.description = Ti.UI.createLabel({
        color: "#444",
        left: 5,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 24,
            font: "sans-serif"
        },
        id: "description",
        text: "Attachment 1"
    });
    $.__views.__alloyId1.add($.__views.description);
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        rightImage: "/images/ic_menu_attachment.png",
        height: 50,
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.description = Ti.UI.createLabel({
        color: "#444",
        left: 5,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 24,
            font: "sans-serif"
        },
        id: "description",
        text: "Attachment 2"
    });
    $.__views.__alloyId3.add($.__views.description);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        rightImage: "/images/ic_menu_attachment.png",
        height: 50,
        id: "__alloyId4"
    });
    __alloyId2.push($.__views.__alloyId4);
    $.__views.description = Ti.UI.createLabel({
        color: "#444",
        left: 5,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 24,
            font: "sans-serif"
        },
        id: "description",
        text: "Attachment 3"
    });
    $.__views.__alloyId4.add($.__views.description);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        rightImage: "/images/ic_menu_attachment.png",
        height: 50,
        id: "__alloyId5"
    });
    __alloyId2.push($.__views.__alloyId5);
    $.__views.description = Ti.UI.createLabel({
        color: "#444",
        left: 5,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 24,
            font: "sans-serif"
        },
        id: "description",
        text: "Attachment 4"
    });
    $.__views.__alloyId5.add($.__views.description);
    $.__views.__alloyId0 = Ti.UI.createTableView({
        data: __alloyId2,
        top: "20",
        height: "85%",
        id: "__alloyId0"
    });
    $.__views.attachmentsWrapper.add($.__views.__alloyId0);
    $.__views.download = Ti.UI.createButton({
        title: "Download All",
        borderColor: "#000",
        borderRadius: 10,
        align: "center",
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
        bottom: 50,
        height: 60,
        id: "download"
    });
    $.__views.attachmentsWrapper.add($.__views.download);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;