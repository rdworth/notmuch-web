<?php

require_once ("notmuch.php");

class Thread
{
	public $json;

	function __construct($notmuch, $id) {
		$this->notmuch = $notmuch;
		$this->load_thread ($id);
		
	}

	function load_thread ($id) {
		$this->json = $this->notmuch->get_thread($id);
	}

}
?>
