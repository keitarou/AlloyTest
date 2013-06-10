var args = arguments[0] || {};
$.title.text  = args.title;
$.image.image = args.smallImageUrl;

function showDetail(){
	var details = Alloy.createController("details", args);
	Alloy.Globals.tab1.open(details.getView());
}