<?php
/*
 *	Peek Slider for Spark
 */

	function tile_browser() {
		wp_enqueue_script( 'isotope', get_template_directory()."/script/external/isotope/jquery.isotope.min.js" );
		wp_enqueue_script( 'tile_browser_js', get_stylesheet_directory_uri()."/components/tile-browser/script/tile-browser.js", array('jquery', 'isotope','backbone', 'underscore') );
		wp_enqueue_style( 'tile_browser_css', get_stylesheet_directory_uri()."/components/tile-browser/style/tile-browser.css", array('spark_css') );
	}

	add_action('wp_enqueue_scripts', 'tile_browser');