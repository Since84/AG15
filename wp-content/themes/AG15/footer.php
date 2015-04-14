<?php 

	$footerContext = Timber::get_context();
	

	/// Contact Area
	$footer_1 = array( 'nav' => new TimberMenu('Footer 1 (About, Team)') );
	$footer_2 = array( 'nav' => new TimberMenu('Footer 2 (Areas, Contact)') );
	$footer_3 = array( 'nav' => new TimberMenu('Footer 3 (Work, Accolades)') );
	$footer_4 = array( 'nav' => new TimberMenu('Footer 4 (Pay AGD, Blog)') );

	$footerContext['footer_1'] = Timber::compile('views/components/nav.html.twig', $footer_1);
	$footerContext['footer_2'] = Timber::compile('views/components/nav.html.twig', $footer_2);
	$footerContext['footer_3'] = Timber::compile('views/components/nav.html.twig', $footer_3);
	$footerContext['footer_4'] = Timber::compile('views/components/nav.html.twig', $footer_4);

	$footerContext['addresses'] 	= get_field('address', 'option');
	$footerContext['phone'] 		= get_field('phone', 'option');
	$footerContext['fax'] 			= get_field('fax', 'option');
	$footerContext['links'] 		= get_field('links', 'option');

	$footerContext['social_menu'] = Timber::get_widgets('social');

	Timber::render('views/content/footer.html.twig', $footerContext);

	wp_footer(); 
?>
</body>
</html>