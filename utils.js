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

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
      && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
}

function scrollToElement (el) {
  if (isScrolledIntoView (el))
	return;
  var selectedPosX = 0;
  var selectedPosY = 0;
              
  while(el != null){
    selectedPosX += el.offsetLeft;
    selectedPosY += el.offsetTop;
    el = el.offsetParent;
  }
                        		      
  window.scrollTo(selectedPosX,selectedPosY);
}
