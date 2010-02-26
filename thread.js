function addMessage(message, container) {
    //console.log("%o", message);
    for (key in message) {
    	console.log("%s:%s", key, message[key]);
    }

    
    var div = document.createElement('div');
    div.setAttribute("id", message['id']);
    div.setAttribute("class", 'thread-div');
    
    div.appendChild (document.createTextNode ( message['headers']['From'] ));
    var br = document.createElement('br');
    div.appendChild (br);
    div.appendChild (document.createTextNode ("To: " + message['headers']['To']));
    br = document.createElement('br');
    div.appendChild (br);
    div.appendChild (document.createTextNode ("Subject: " + message['headers']['Subject']));
    br = document.createElement('br');
    div.appendChild (br);
    br = document.createElement('br');
    div.appendChild (br);
    // TODO: handle multipart
    var pre = document.createElement('pre');
    pre.appendChild (document.createTextNode (message['body'][0]['content']));
    div.appendChild (pre);
    br = document.createElement('br');
    div.appendChild (br);

    container.append (div);

    // FIXME collapse read messages.
    // Do I really need to query the server again to get tags for each message?
    // Also, json interface is missing for search-tags
    //if ("unread" in message['tags'])
    //$("#"+ message['id']).hide();

}

function traverse(o, container) {
    for (i in o) {
        if (typeof(o[i])=="object") {
		if ("filename" in o[i]) {
			// Is an individual message, add it
			addMessage(o[i], container);
		} 
                //going on step down in the object tree!!
                traverse(o[i], container);
        }
   }
}


function showThread (id) {
	$(".thread-div").remove();

	var thread = $("#" + id).data ("contents");
	traverse (thread, $("#thread-view"));
	
    	$("#inbox").hide();
	scrollToElement ($("#thread-view")[0]);
    	$("#thread-view").show ();
}


