<?php
require_once ("inbox.php");
$notmuch = new Notmuch("/home/fer/.notmuch-config");
$inbox = new Inbox ($notmuch);
echo $inbox->threads_json;
?>
