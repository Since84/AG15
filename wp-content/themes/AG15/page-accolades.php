<?php

/* AG Default PAGE */

get_header();

/* Content

	Accolade Roll
		Thumb
		Text
		Name

*/
	$context = Timber::get_context();
	$context['post'] = new TimberPost();

	$testimonialArgs = array(
		"post_type" 		=> ( 'testimonial' )
	);
	$testimonialContext = Timber::get_posts($testimonialArgs);
	$testimonialContext = array(
		'feed' 				=> $testimonialContext 
		,'slide_template'	=> '/views/content/testimonial_item.html.twig'
	);
	$context['spark_class'] = "accolades";
	$context['content'] = Timber::compile('/views/components/static_feed.html.twig', $testimonialContext);

	Timber::render('/views/pages/content_page.html.twig', $context);

get_footer();