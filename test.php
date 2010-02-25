<?php
require_once ("inbox.php");

$notmuch = new Notmuch("/home/fer/.notmuch-config");

$inbox = new Inbox ($notmuch);
print "Total mails in inbox " . $inbox->total_count;
print "Unread mails in inbox " . $inbox->unread_count;

$inbox->load_threads ();
?>
