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

		$galleryArgs = array(
			"post_type" 		=> ( 'dynamite-slide' ) ,
			"posts_per_page"	=>	'8'
		);
		$galleryContextSlide[ 'feed' ] = Timber::get_posts($galleryArgs); 

		// Project Wall Posts
		$projectArgs = array(
			"post_type" 		=> ( 'project' ) ,
			"posts_per_page"	=>	'10'
		);
		$galleryContextSlide[ 'project_wall' ] = Timber::get_posts($projectArgs); 
		$galleryContextSlide[ 'project_wall' ] = array( 
													'work_page' 		=> new TimberPost(get_page_by_title('Select Work'))
													,'tiles' 			=> $galleryContextSlide['project_wall']
													,'nav'				=> false
													,'slide_template' 	=> '/views/content/home_work_profile.twig'
												);
		$galleryContextSlide[ 'project_wall' ] = Timber::compile('/components/tile-browser/view/tile-browser.twig', $galleryContextSlide['project_wall']);


		
		$galleryContextSlide[ 'spark_class' ] = "home-feature";
		$galleryContextSlide[ 'slide_template' ] = '/views/content/feature_slide.html.twig';
		$context['feature_slider'] = Timber::compile('/components/peek-slider/view/container.twig', $galleryContextSlide);


	/* Content

		Column 1.
		Credo
		Testimonial
		Formula for Success

	*/
		//Credo
		$credoArgs = new TimberPost('agd-credo');
		$credoContext = array(
			'content' 		=> $credoArgs 
			,'spark_class' 	=> 'preview-section'
		);
		$context['credo'] = Timber::compile('/views/content/page_block.html.twig', $credoContext);

		//Testimonial
		$testimonialArgs = array(
			"post_type" 		=> ( 'testimonial' ) ,
			"posts_per_page"	=>	'1'
		);
		$testimonialArgs = Timber::get_posts($testimonialArgs);
		$testimonialContext = array('content' => $testimonialArgs );
		$context['testimonial'] = Timber::compile('/views/content/testimonial_block.html.twig', $testimonialContext);
	
		//Formula
		$formulaArgs = new TimberPost('agd-formula');
		$formulaContext = array(
			'content' 		=> $formulaArgs 
			,'spark_class' 	=> 'preview-section'
		);
		$context['formula'] = Timber::compile('/views/content/page_block.html.twig', $formulaContext);



	/*

		Column 2. 
		Contact Form
		*/
		$context['contact_form'] = do_shortcode('[contact-form-7 id="870" title="Contact form 1"]');

	/*
		Blog Roll
	*/
		$newsArgs = array(
			"post_type" 		=> ( 'post' ) ,
			"posts_per_page"	=>	'4'
		);
		$newsContext = Timber::get_posts($newsArgs);
		$newsContext = array(
			'feed' 				=> $newsContext 
			,'slide_template'	=> '/views/content/news_post.html.twig'
			,'spark_header'		=> "What's New"
		);
		$context['news'] = Timber::compile('/views/components/static_feed.html.twig', $newsContext);
	
		Timber::render('/views/pages/home.html.twig', $context);

	get_footer();
