<?php



/**
 * Enqueue WordPress theme styles
 */
add_action( 'wp_enqueue_scripts', 'xxxx_scripts' );

function xxxx_scripts() {
	//Add filemtime in order to do cache busting
	wp_enqueue_style( 'xxxx-styles', get_stylesheet_directory_uri() .'/assets/dist/css/main.css', array(), filemtime(get_stylesheet_directory() . '/assets/dist/css/main.css'), 'all');

	wp_enqueue_script( 'xxxx-js', get_template_directory_uri(). '/assets/dist/js/main.js', array('jquery'), filemtime(get_template_directory().'/assets/dist/js/main.js'));

}


/**
 * Enqueue WordPress theme styles within Gutenberg.
 */
add_action( 'enqueue_block_editor_assets', 'xxxx_gutenberg_styles' );

function xxxx_gutenberg_styles() {
	// Load the theme fonts, styles and scripts within Gutenberg.
	// wp_enqueue_style( 'theme-fonts', xxxx_theme_fonts_url() );

	wp_enqueue_style( 'xxxx-gutenberg-styles', get_template_directory_uri() .  '/assets/dist/css/editor-styles.css' );
	wp_enqueue_script('xxxx-gutenberg-script', get_stylesheet_directory_uri() . '/assets/dist/js/editor.js', array( 'wp-blocks', 'wp-dom' ), filemtime( get_stylesheet_directory() . '/assets/dist/js/editor.js' ), true);
}


/**
 * Enqueue content assets but only in the Editor.
 */
function XXXX_enqueue_editor_content_assets() {
	if ( is_admin() ) {
		wp_enqueue_style( 'spbe-gutenberg-styles', get_template_directory_uri() .  '/assets/dist/css/editor-styles.css' );
	}
}
add_action( 'enqueue_block_assets', 'XXXX_enqueue_editor_content_assets' );

/**
 * Optional: add custm fonts with Gutenberg 
 */
// function custom_theme_fonts_url() {
// 	return 'https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap';
// }

/**
 * Optional: remove all Gutenberg default styles on front end
 */
// add_action( 'wp_enqueue_scripts', 'custom_deregister_styles', 100 );
//
// function custom_deregister_styles() {
// 	// wp_dequeue_style( 'wp-block-library-theme' );
// 	// wp_dequeue_style( 'wp-block-library' );
// }
