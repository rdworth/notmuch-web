<?php
require_once ("inbox.php");

$notmuch = new Notmuch("/home/fer/.notmuch-config");
$inbox = new Inbox ($notmuch);

function inbox_get_total () {
	global $inbox;
	echo $inbox->total_count;
}

function inbox_get_unread () {
	global $inbox;
	echo $inbox->unread_count;
}

function inbox_get_threads_json () {
	global $inbox;
	echo $inbox->threads_json;
}




?>
