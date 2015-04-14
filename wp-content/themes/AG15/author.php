<?php

/* AG Default PAGE */

get_header();

/* Content

	Category Sidebar
	*/
	$cur_cat_id = get_cat_id( single_cat_title("",false) );
	$catContext = array('nav' => Timber::get_terms('categories'), 'current' => $cur_cat_id );
	$context['categories'] = Timber::compile('/views/components/category_nav.html.twig', $catContext);
	$context['contact_form'] = do_shortcode('[contact-form-7 id="870" title="Contact form 1"]');
/*
	Blogroll
		Date
		Title
		Thumb
		Excerpt

*/
	$blogArgs = array(
		"post_type" 		=> ( 'post' )
		,"posts_per_page"	=>	'10'
		,"cat"			=> $cur_cat_id
	);
	$blogContext = Timber::get_posts($blogArgs);
	$blogContext = array(
		'feed' 				=> $blogContext 
		,'slide_template'	=> '/views/content/news_post.html.twig'
		,'spark_class'		=> 'blog-feed'
	);
	$context['blog'] = Timber::compile('/views/components/blog_feed.html.twig', $blogContext);

	Timber::render('/views/pages/blog.html.twig', $context);	

get_footer();