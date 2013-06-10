
/**
	SearchBar Actions
*/
$.searchBar.addEventListener('cancel', function(){
	this.blur();
});
$.searchBar.addEventListener('return', function(){
	this.blur();
	requestSearchByWord(this.value);
});

function requestSearchByWord(title) {  

	var xhr = Titanium.Network.createHTTPClient();
	var request = "https://app.rakuten.co.jp/services/api/BooksBook/Search/20130522";
	var method = "POST";
	var data = {
		title: title, 
		format: "json", 
		applicationId: ""
	};

	xhr.open(method, request);
	
	xhr.onload = function(){
		var json = JSON.parse(this.responseText);
		for (var i=0; i<json.Items.length;i++) {
			
			var item = json.Items[i].Item;
			Ti.API.info(item);

			// add row
			var row = Alloy.createController("row", item).getView();
			$.tableView.appendRow(row);
		}
	};
	
	xhr.onerror = function(error){
	};
	xhr.send(data);

}

$.index.open();
Alloy.Globals.tab1 = $.tab1;
