function notify2(from, align, icon, type, animIn, animOut, title, message, enter, type2) {
	var title = title;
	var message = message;
	var enter = enter;
	var type2 = type2;
	$.growl({
		icon: icon,
		title: title,
		message: message,
	}, {
		element: 'body',
		type: 'primary',
		allow_dismiss: true,
		placement: {
			from: from,
			align: align
		},
		offset: {
			x: 30,
			y: 30
		},
		spacing: 10,
		z_index: 999999,
		delay: 200000,
		timer: 800,
		mouse_over: false,
		animate: {
			enter: enter,
			exit: animOut
		},
		icon_type: 'class',
		template: '<div data-growl="container" class="alert alert-'+type2+' alert- dismissable growl - animated animated fadeInDown" role="alert"' +
			'data-growl-position="top-center">' +
			'<button type="button" class="close" data-growl="dismiss">' +
			'<span aria-hidden="true">&times;</span>' +
			'<span class="sr-only">Close</span>' +
			'</button>' +
			'<span data-growl="icon"></span>' +
			'<span data-growl="title"></span>' +
			'<span data-growl="message"></span>' +
			'</div>'
	});
};

function notify(from, align, icon, type, animIn, animOut, title, message, enter, type) {
	var title = title;
	var message = message;
	var enter = enter;
	var type2 = type2;
	$.growl({
		icon: icon,
		title: title,
		message: message,
		url: ''
	}, {
		element: 'body',
		type: type,
		allow_dismiss: true,
		placement: {
			from: from,
			align: align
		},
		offset: {
			x: 30,
			y: 30
		},
		spacing: 10,
		z_index: 999999,
		delay: 2500,
		timer: 1000,
		url_target: '_blank',
		mouse_over: false,
		animate: {
			enter: enter,
			exit: animOut
		},
		icon_type: 'class',
		template: '<div data-growl="container" class="alert" role="alert">' +
			'<button type="button" class="close" data-growl="dismiss">' +
			'<span aria-hidden="true">&times;</span>' +
			'<span class="sr-only">Close</span>' +
			'</button>' +
			'<span data-growl="icon"></span>' +
			'<span data-growl="title"></span>' +
			'<span data-growl="message"></span>' +
			'<a href="#" data-growl="url"></a>' +
			'</div>'
	});
};

function thongbao(title, message, enter, type) {
	var nFrom = "top";
	var nAlign = "center";
	var nIcons = $(this).attr('data-icon');
	var nType = $(this).attr('data-type');
	var nAnimIn = $(this).attr('data-animation-in');
	var nAnimOut = $(this).attr('data-animation-out');
	notify(nFrom, nAlign, nIcons, nType, nAnimIn, nAnimOut, title, message, enter, type);
};