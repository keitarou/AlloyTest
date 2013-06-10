function Controller() {
    function showDetail() {
        var details = Alloy.createController("details", args);
        Alloy.Globals.tab1.open(details.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        height: "86dp",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    showDetail ? $.__views.row.addEventListener("click", showDetail) : __defers["$.__views.row!click!showDetail"] = true;
    $.__views.image = Ti.UI.createImageView({
        left: "18dp",
        id: "image",
        image: "/image1.jpg"
    });
    $.__views.row.add($.__views.image);
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        left: "62dp",
        color: "#a62901",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        text: "Title",
        id: "title"
    });
    $.__views.row.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.title.text = args.title;
    $.image.image = args.smallImageUrl;
    __defers["$.__views.row!click!showDetail"] && $.__views.row.addEventListener("click", showDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;