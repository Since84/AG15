<?php

/* AG DEFAULT PAGE */

get_header();
$context = Timber::get_context();
$context['post'] = new TimberPost();
$context['nav'] = get_field('side_menu');
$context['nav'] = new TimberMenu($context['nav']->slug);
$context['navheader'] = true;
$context['contact_form'] = do_shortcode('[contact-form-7 id="870" title="Contact form 1"]');

Timber::render('views/pages/page.html.twig', $context);

get_footer();