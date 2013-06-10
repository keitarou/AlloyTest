var args = arguments[0] || {};
Ti.API.info(args);

$.title.text  = args.title;
$.largeImageUrl.image = args.largeImageUrl;
$.itemCaption.text = args.itemCaption;

