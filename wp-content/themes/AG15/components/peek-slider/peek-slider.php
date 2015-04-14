<?php
/*
 *	Peek Slider for Spark
 */

	function peek_enqueue() {
		wp_enqueue_script( 'peek_js', get_stylesheet_directory_uri()."/components/peek-slider/script/peek-slider.js", array('jquery', 'backbone', 'underscore') );
		wp_enqueue_style( 'peek_css', get_stylesheet_directory_uri()."/components/peek-slider/style/peek-slider.css", array('spark_css') );
	}

	add_action('wp_enqueue_scripts', 'peek_enqueue');