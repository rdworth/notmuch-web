function addMessage(message) {
    //console.log("%o", message);
    for (key in message) {
    	console.log("%s:%s", key, message[key]);
    }

    

    var html = "From: " + message['headers']['From'] + "<br/>";
    html += "To: " + message['headers']['To'] + "<br/>";
    html += "Subject: " + message['headers']['Subject'] + "<br/><br/>";
    // TODO: handle multipart
    html += message['body'][0]['content'] + "<br/>";

    $("#inbox").hide();
    $("#thread-view").html (html);
    $("#thread-view").show ();
}

function traverse(o) {
    for (i in o) {
        if (typeof(o[i])=="object") {
		if ("id" in o[i]) {
			// Is a message, add it
			addMessage(o[i]);
		} else {
                	//going on step down in the object tree!!
                	traverse(o[i]);
		}
        }
   }
}


function showThread (id) {
	var thread = $("#" + id).data ("contents");
    	console.log("SHOWING OBJECT %s:%o", id, thread);
	traverse (thread);
	// Save memory
	//$(".threadlink,#" + id).data ("contents", "");
}


