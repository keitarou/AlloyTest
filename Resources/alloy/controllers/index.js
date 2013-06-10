function Controller() {
    function requestSearchByWord(title) {
        var xhr = Titanium.Network.createHTTPClient();
        var request = "https://app.rakuten.co.jp/services/api/BooksBook/Search/20130522";
        var method = "POST";
        var data = {
            title: title,
            format: "json",
            applicationId: "1066990869341393369"
        };
        xhr.open(method, request);
        xhr.onload = function() {
            var json = JSON.parse(this.responseText);
            for (var i = 0; json.Items.length > i; i++) {
                var item = json.Items[i].Item;
                Ti.API.info(item);
                var row = Alloy.createController("row", item).getView();
                $.tableView.appendRow(row);
            }
        };
        xhr.onerror = function() {};
        xhr.send(data);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.window1 = Ti.UI.createWindow({
        id: "window1",
        title: "Tab 1",
        backgroundColor: "#fff"
    });
    $.__views.searchBar = Ti.UI.createSearchBar({
        id: "searchBar",
        showCancel: "true",
        height: "43",
        top: "0"
    });
    $.__views.window1.add($.__views.searchBar);
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView",
        top: "43"
    });
    $.__views.window1.add($.__views.tableView);
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.window1,
        id: "tab1",
        icon: "KS_nav_views.png",
        title: "Tab 1"
    });
    $.__views.index.addTab($.__views.tab1);
    $.__views.window2 = Ti.UI.createWindow({
        id: "window2",
        title: "Tab 2",
        backgroundColor: "#fff"
    });
    $.__views.label2 = Ti.UI.createLabel({
        top: 200,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Window2",
        id: "label2"
    });
    $.__views.window2.add($.__views.label2);
    $.__views.tab2 = Ti.UI.createTab({
        window: $.__views.window2,
        id: "tab2",
        icon: "KS_nav_ui.png",
        title: "Tab 2"
    });
    $.__views.index.addTab($.__views.tab2);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.searchBar.addEventListener("cancel", function() {
        this.blur();
    });
    $.searchBar.addEventListener("return", function() {
        this.blur();
        requestSearchByWord(this.value);
    });
    $.index.open();
    Alloy.Globals.tab1 = $.tab1;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;