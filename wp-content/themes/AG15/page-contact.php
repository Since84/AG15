<?php

/* AG DEFAULT PAGE */

get_header();
$context = Timber::get_context();
$context['post'] 		= new TimberPost();
$context['nav'] 		= get_field('side_menu');
$context['nav'] 		= new TimberMenu($context['nav']['slug']);
$context['navheader'] 	= true;
$context['contact_form'] = do_shortcode('[contact-form-7 id="870" title="Contact form 1"]');
$context['map'] = get_field('map', 'option');
$context['addresses'] 	= get_field('address', 'option');
$context['phone'] 		= get_field('phone', 'option');
$context['fax'] 		= get_field('fax', 'option');
$context['links'] 		= get_field('links', 'option');
$context['work_with_us']= do_shortcode('[contact-form-7 html_class="contact-form" id="891" title="Work With Us"]');
$context['collaborate_with_us']= do_shortcode('[contact-form-7 html_class="contact-form" id="892" title="Collaborate With Us"]');

Timber::render('views/pages/contact.html.twig', $context);

get_footer();