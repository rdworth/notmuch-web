function addMessage(message) {
    //console.log("%o", message);
    for (key in message) {
    	console.log("%s:%s", key, message[key]);
    }
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
	alert (id);
	var thread = $(".threadlink,#" + id).data ("contents");
	traverse (thread);
}


