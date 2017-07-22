<?php

add_action( 'wp_enqueue_scripts', 'twentyseventeen_parent_theme_enqueue_styles' );

function twentyseventeen_parent_theme_enqueue_styles() {
	# Parent scripts
	wp_enqueue_style( 'twentyseventeen-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'twentyseventeen-child-style',
		get_stylesheet_directory_uri() . '/style.css',
		array( 'twentyseventeen-style' )
	);


	# Child script bundle
	wp_enqueue_script(
		'bundle',
		get_stylesheet_directory_uri() . '/dist/bundle.js',
		array( 'jquery' ),
		1,
		false
	);

}