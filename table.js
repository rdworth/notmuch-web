Threads = { 
        threadsToTable: function( url, $container ) { 
                var $table = $('<table class="grid"/>'); 
                var table = $table.attr( "border", "0" )[0]; 
		var $col = $('<col style="width:30%;"/>');
		$table.append ($col);
		$col = $('<col style="width:70%;"/>');
		$table.append ($col);


                $.getJSON( url, function( jsonObj ){ 
                        $.each( jsonObj, function(i, thread) { 
                                Threads.threadToRow( thread, table ); 
                        }); 
                        $container.append( $table ); 
                }); 
        }, 
        threadToRow: function( thread, table ) { 
                var tr = document.createElement('tr'); 
                var td = document.createElement('td'); 
                td.appendChild(document.createTextNode( thread['authors']) ); 
                tr.appendChild(td); 
                td = document.createElement('td'); 
                td.appendChild(document.createTextNode( thread['subject']) ); 
                tr.appendChild(td); 
                table.appendChild(tr); 
        } 
}; 

$(document).ready(function(){
	var url = "get_inbox.php"; 
	Threads.threadsToTable( url, $('.inner') ); 
});

