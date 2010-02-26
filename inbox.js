Threads = { 
        threadsToTable: function( url, $container ) { 
                var $table = $('<table/>');
		var $col = $('<col style="width:30%;"/>');
		$table.append ($col);
		var $col = $('<col/>');
		$table.append ($col);
		var $col = $('<col style="width:10%;"/>');
		$table.append ($col);
		var $col = $('<col style="width:12%;"/>');
		$table.append ($col);

                var table = $table.attr( "border", "0" )[0]; 
		table.setAttribute("class", "grid");


                $.getJSON( url, function( jsonObj ){ 
                        $.each( jsonObj, function(i, thread) { 
                                Threads.threadToRow( thread, table ); 

				var thread_url = "get_thread.php?id=" + thread['thread'];
				// What a hack to populate the right object as jsonObj does not keep track of its caller
				thisThread = thread;
				$.getJSON( thread_url, function (thisThread) {
					return function (jsonObj) {
						$("#" + thisThread['thread']).data ("contents", jsonObj);
					}; 
				}(thisThread));
					
			});


			$(".threadlink").hover(
  				function () {
    					$(this).addClass("hover");
  				},
  				function () {
    					$(this).removeClass("hover");
  				}
			);
			// Select first element in the list
			var current = $(".threadlink:first");
			current.addClass ("highlight");
			$("#thread-view").data("current", current.attr("id"));

			// Add click handlers
			$('.threadlink').click(function () {
				console.log ("Asking me to show thread id:%s", $(this).attr("id"));
  				showThread ($(this).attr("id"));
                        }); 
                }); 
		$container.append( $table ); 

		$('tr').click(function () {
  			alert ('hola');
		});

        }, 
        threadToRow: function( thread, table ) { 
                var tr = document.createElement('tr'); 
		tr.setAttribute("class", "threadlink");
		tr.setAttribute("id", thread['thread']);
                var td = document.createElement('td'); 
                td.appendChild(document.createTextNode( thread['authors']) ); 
		td.setAttribute("class", "expand");
		td.setAttribute("align", "left");
                tr.appendChild(td); 

                td = document.createElement('td'); 
		td.setAttribute("class", "secondary expand");
		td.setAttribute("align", "left");
                td.appendChild(document.createTextNode( thread['subject']) ); 
                tr.appendChild(td); 

                td = document.createElement('td'); 
		td.setAttribute("class", "secondary");
		td.setAttribute("align", "left");
                td.appendChild(document.createTextNode( thread['total']) ); 
                tr.appendChild(td); 

                td = document.createElement('td'); 
		td.setAttribute("valign", "bottom");
		td.setAttribute("align", "left");
                td.appendChild(document.createTextNode( showLocalDate (thread['timestamp'])) ); 
                tr.appendChild(td); 


                table.appendChild(tr); 

        } 
}; 

$(document).ready(function(){

	$("#inbox-header").hover(
  		function () {
    			$(this).addClass("hover");
  		},
  		function () {
    			$(this).removeClass("hover");
  		}
	);
	$("#inbox-header").click (function () {
    		$("#thread-view").hide();
		$("#inbox").show();

        });

	var url = "get_inbox.php"; 
	Threads.threadsToTable( url, $('#inbox') ); 


	$(document).keypress(handle_key);
});



