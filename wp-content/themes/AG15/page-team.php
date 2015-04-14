<?php

/* AG Default TEAM */

get_header();
$context = Timber::get_context();
$context['post'] = new TimberPost();
$context['nav'] = get_field('side_menu');
$context['nav'] = new TimberMenu($context['nav']['slug']);
$context['navheader'] = true;

// Project Wall 
$projectArgs = array(
	"post_type" 		=> ( 'team' ) ,
	"posts_per_page"	=>	'-1'
);

$browserContext = array(
	"nav"				=> 	false
	,"tiles"			=>	Timber::get_posts($projectArgs)
	,'slide_template'	=> '/views/content/team_tile.html.twig'
	// ,'slide_detail_template'	=> '/views/content/work_profile_detail.twig'
	,'spark_class'		=> 'container'
);
$context['contact_form'] = do_shortcode('[contact-form-7 id="870" title="Contact form 1"]');
$context[ 'team' ] 	= Timber::compile('/components/tile-browser/view/tile-browser.twig', $browserContext );

//Work
$workArgs = new TimberPost('work-with-us');
$workContext = array('content' => $workArgs );
$context['work'] = Timber::compile('/views/content/page_block.html.twig', $workContext);

//Collaborate
$collaborateArgs = new TimberPost('collaborate-with-us');
$collaborateContext = array('content' => $collaborateArgs );
$context['collaborate'] = Timber::compile('/views/content/page_block.html.twig', $collaborateContext);

Timber::render('/views/pages/team.html.twig', $context);
get_footer();