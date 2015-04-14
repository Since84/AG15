  <?php

/* AG Default PAGE */

get_header();

/* Content

	Category Sidebar
	*/
	$projectArgs = array(
		"post_type" 		=> ( 'project' ) ,
		"posts_per_page"	=>	'-1'
	);

	$projectType = isset($_GET['project-type']) ? $_GET['project-type'] : '';

	/*
	Project Wall
	*/
	$browserContext = array(
		"nav"				=> 	Timber::get_terms('project-type', array('taxonomy'=>'project_type','hide_empty'=>true))
		,"tiles"			=>	Timber::get_posts($projectArgs)
		,'slide_template'	=> '/views/content/work_profile.twig'
		,'slide_detail_template'	=> '/views/content/work_profile_detail.twig'
		,'spark_class'		=> 'container'
		,'project_type'		=>	$projectType
	);

	$context[ 'browser' ] 	= Timber::compile('/components/tile-browser/view/tile-browser.twig', $browserContext );
	Timber::render('/views/pages/work15.twig', $context);


get_footer();