
function select_thread (current) {
	$(".threadlink").removeClass ("highlight");
	current.addClass ("highlight");
	$("#thread-view").data("current", current.attr("id"));
	if (current[0].offsetHeight > 0)
		scrollToElement (current[0]);
}

function handle_key (e) {
	// Ugly optimization
	if (e.which != 110 && e.which != 112 && e.which != 13 && e.which != 111 &&
            e.which != 113 && e.which != 78 && e.which != 80 && e.which != 109)
		return;

	var current_id = $("#thread-view").data("current");
	if(typeof(current_id) == 'undefined' || current_id == null) {
		current = $(".threadlink:first");
	} else {
		var current = $('#' + current_id);
	}
		
	switch (e.which) {
		// 'n'
		case 110:
			var next = current.next();
			if(typeof(next) !== 'undefined' && next != null && next.hasClass('threadlink')) {
				select_thread (next);
				if ($("#thread-view").is(":visible"))
					showThread (next.attr("id"));
			}
			break;
		// 'p'
		case 112:
			var prev = current.prev();
			if(typeof(prev) !== 'undefined' && prev != null && prev.hasClass('threadlink')) {
				select_thread (prev);
				if ($("#thread-view").is(":visible"))
					showThread (prev.attr("id"));
			}
			break;
		// 'enter' and 'o'
		case 13:
		case 111:
			if ($("#inbox").is(":visible"))
				showThread (current_id);
			break;
		// 'q'
		case 113:
			if ($("#thread-view").is(":visible")) {
				$("#thread-view").hide();
				$("#inbox").show();
				select_thread (current);
				scrollToElement (current[0]);
			}
			break;
		// 'm'
		case 109:
        		$("#thread-view").hide();
        		$("#inbox").hide();
        		$("#compose-view").show();
			break;
	}

}



