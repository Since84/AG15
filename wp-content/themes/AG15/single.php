<?php

/* AG DEFAULT PAGE */

get_header();
$context = Timber::get_context();
$context['post'] = new TimberPost();
$catContext = array('nav' => Timber::get_terms('categories'), 'back' => true );
$context['categories'] = Timber::compile('/views/components/category_nav.html.twig', $catContext);
$context['navheader'] = true;
$context['contact_form'] = do_shortcode('[contact-form-7 id="870" title="Contact form 1"]');

Timber::render('views/pages/single.html.twig', $context);

get_footer();