function itraverse(jsonObj) {
	if( typeof jsonObj == "object" ) {
		$.each(jsonObj, function(i,o) {
			// k is either an array index or object key
			for (var key in o) {
				console.log("%s:%s ", key, o[key]);
			}
				
			traverse(o);
		});
	} else {
		// Is a value
		
	}
}

function process(key,value) {
    console.log("%s : %s", key, value);
}

function traverse(o,func) {
    for (i in o) {
        func.apply(this,[i,o[i]]);      
        if (typeof(o[i])=="object") {
                //going on step down in the object tree!!
                traverse(o[i],func);
        }
   }
}


function showMessage (id) {
	alert (id);
	var message = $(".threadlink,#" + id).data ("contents");
	console.log("%s: %o", id, message);
	console.log("id: %s", message[0][0][0]['id']);
	traverse (message, process);
}


