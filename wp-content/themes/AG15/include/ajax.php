<?php
add_action('wp_ajax_member_detail', 'get_member');
add_action('wp_ajax_nopriv_member_detail', 'get_member');
function get_member() {
	global $wpdb; // this is how you get access to the database

	$id = $_POST['memberId'] ;

	$memberContext = array(
		"post"			=> new TimberPost($id)
		,"expertise"	=> get_the_terms( $id, 'expertise' )
	);

	echo Timber::compile('views/content/member_detail.twig', $memberContext);

	die(); // this is required to return a proper result
}

add_action('wp_ajax_project_detail', 'get_project_detail');
add_action('wp_ajax_nopriv_project_detail', 'get_project_detail');
function get_project_detail() {
	global $wpdb; // this is how you get access to the database

	$id 		= $_POST['projectId'] ;
	$project 	= new TimberPost($id);
	$features 	= $project->get_field('slides');

	$projectContext 	= array(
		"post"		=> 	$project
		,"type"		=>	wp_get_post_terms( $project->ID, 'project-type' )
		,"features"	=> 	$features
		,"services"	=>	wp_get_post_terms( $project->ID, 'services' )
	);
	
	echo Timber::compile('views/content/project_detail.twig', $projectContext);

	die(); // this is required to return a proper result
}