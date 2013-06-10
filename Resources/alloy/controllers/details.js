function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.details = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "details"
    });
    $.__views.details && $.addTopLevelView($.__views.details);
    $.__views.title = Ti.UI.createLabel({
        top: 20,
        width: Ti.UI.FILL,
        left: "24dp",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        id: "title"
    });
    $.__views.details.add($.__views.title);
    $.__views.largeImageUrl = Ti.UI.createImageView({
        id: "largeImageUrl",
        image: "/image1.jpg"
    });
    $.__views.details.add($.__views.largeImageUrl);
    $.__views.itemCaption = Ti.UI.createLabel({
        top: 200,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        left: "24dp",
        font: {
            fontSize: "13dp"
        },
        id: "itemCaption"
    });
    $.__views.details.add($.__views.itemCaption);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info(args);
    $.title.text = args.title;
    $.largeImageUrl.image = args.largeImageUrl;
    $.itemCaption.text = args.itemCaption;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;