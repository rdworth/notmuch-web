function handle_key (e) {
	// Optimize: enter only if key is navigation
	if ($("#inbox").is(":visible")) {
		var current_id = $("#thread-view").data("current");
		if(typeof(current_id) == 'undefined' || current_id == null) {
			current = $(".threadlink:first");
		} else {
			var current = $('#' + current_id);
		}
			
		current.removeClass ("highlight");
		var next = current.next();
		var prev = current.prev();
		switch (e.which) {
			// 'n'
			case 110:
				if(typeof(next) !== 'undefined' && next != null && next.hasClass('threadlink')) {
					current = next;
				}
				break;
			// 'p'
			case 112:
				if(typeof(prev) !== 'undefined' && prev != null && prev.hasClass('threadlink')) {
					current = prev;
				}
				break;
			// 'enter'	
			case 13:
			case 111:
				showThread (current_id);
				break;
		}
		current.addClass ("highlight");
		$("#thread-view").data("current", current.attr("id"));
		if (current[0].offsetHeight > 0)
			scrollToElement (current[0]);
		console.log ("Selected thread %s", current.attr("id"));
	}
}



