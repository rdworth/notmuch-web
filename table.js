Threads = { 
        threadsToTable: function( url, $container ) { 
                var $table = $('<table/>');
		var $col = $('<col style="width:22%;"/>');
		$table.append ($col);
		var $col = $('<col/>');
		$table.append ($col);
		var $col = $('<col style="width:10%;"/>');
		$table.append ($col);
		var $col = $('<col style="width:6%;"/>');
		$table.append ($col);

                var table = $table.attr( "border", "0" )[0]; 
		table.setAttribute("class", "grid");


                $.getJSON( url, function( jsonObj ){ 
                        $.each( jsonObj, function(i, thread) { 
                                Threads.threadToRow( thread, table ); 
			});
			$("td").hover(
  				function () {
    					$(this).addClass("hover");
  				},
  				function () {
    					$(this).removeClass("hover");
  				}
			);
			$('.threadlink').click(function () {
  				alert ('hola');
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
                td.appendChild(document.createTextNode( thread['timestamp']) ); 
                tr.appendChild(td); 


                table.appendChild(tr); 

        } 
}; 

$(document).ready(function(){
	var url = "get_inbox.php"; 
	Threads.threadsToTable( url, $('.container') ); 

});



