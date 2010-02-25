<?php

class Notmuch
{
	public $path;
	public $name;
	public $primary_email;

	function __construct($file) {
		putenv ("NOTMUCH_CONFIG=" . $file);
		$this->read_config ($file);
	}

	function read_config ($file) {
		$config = parse_ini_file ($file);
		$path = $config['path'];
		$name = $config['name'];
		$primary_email = $config['primary_email'];
	}

	function get_inbox () {
		$output = array();
		exec ("notmuch search --format=json tag:inbox", $output);
		$threads = implode ($output);

		return $threads;
	}

	function get_thread ($id) {
		$output = array();
		exec ("notmuch show --format=json thread:" . $id, $output);
		$thread = implode ($output);

		return $thread;
	}

}
		

		
