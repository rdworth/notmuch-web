<?php

require_once ("notmuch.php");

class Inbox
{
	public $total_count = 0;
	public $unread_count = 0;
	public $threads_json;
	private $notmuch;
	private $threads;

	function __construct($notmuch) {
		$this->notmuch = $notmuch;
		$this->load_inbox ();
		
	}

	function load_inbox () {
		$this->threads_json = $this->notmuch->get_inbox();
		$this->threads = json_decode ($this->threads_json);

		$this->total_count = count ($this->threads);

		$this->unread_count = 0;
		foreach ($this->threads as $thread) {
			foreach ($thread->tags as $value) {
				if ($value == "unread")
					$this->unread_count++;
			}
		}
	}

	function load_threads () {
		foreach ($this->threads as &$thread) {
			$thread->content = $this->notmuch->get_thread ($thread->thread);
		}
	}
}
?>
