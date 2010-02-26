var mmToMonth = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

function showLocalDate(timestamp)
{
  var now = new Date();  
  var dt = new Date(timestamp * 1000);
  var mm = mmToMonth[dt.getMonth()];

  if (now.getDate() == dt.getDate())
	return dt.getHours() + ":" + dt.getMinutes();
  if (now.getFullYear() == dt.getFullYear())
	return dt.getDate() + mm;
  
  return dt.getDate() + "-" + mm + "-" + dt.getFullYear();
} 
