<?php
/*
 *	Peek Slider for Spark
 */

	function box_grid() {
		// wp_enqueue_script( 'box_grid_js', get_stylesheet_directory_uri()."/components/box-grid/script/box-grid.js", array('jquery', 'backbone', 'underscore') );
		wp_enqueue_style( 'box_grid_css', get_stylesheet_directory_uri()."/components/box-grid/style/box-grid.css", array('spark_css') );
	}

	add_action('wp_enqueue_scripts', 'box_grid');