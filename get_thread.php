<?php
require_once ("thread.php");
$notmuch = new Notmuch("/home/fer/.notmuch-config");

$id = $_GET['id'];
$thread = new Thread ($notmuch, $id);
echo $thread->json;
?>
