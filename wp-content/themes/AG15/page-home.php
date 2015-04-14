<?php
	/* AG Home Page */

	get_header();
	$context = Timber::get_context();

	/* Featured Content 

		Slider with:
		Gallery
		Project Wall
		Image 
		Video
*/

		$projectArgs = array(
			"post_type" 		=> ( 'project' ) ,
			"posts_per_page"	=>	'8'
		);
		/*
		Project Wall
		*/
		$browserContext = array(
			"tiles"						=>	Timber::get_posts($projectArgs)
			,'slide_template'			=> '/views/content/work_profile.twig'
			,'slide_location'			=> 'home'
			,'project_type'				=>	$projectType
		);

		$gallerySlideContext[ 'feed' ] = Timber::get_posts($galleryArgs); 
		$gallerySlideContext['spark_class'] = 'home-feature';
		$gallerySlideContext[ 'slide_template' ] = '/views/content/project_slide.html.twig';
		$context['gallery_slide'] = Timber::compile('/components/tile-browser/view/tile-browser.twig', $browserContext );


	/* Content

		Column 1.
		Credo
		Testimonial
		Formula for Success

		Column 2. 
		Contact Form
		Blog Roll

	*/
	

	get_footer();
