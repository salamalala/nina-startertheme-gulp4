<?php

// disable full screen by default
// https://www.wpbeginner.com/wp-tutorials/how-to-disable-fullscreen-editor-in-wordpress/

if (is_admin()) {
  function XXXX_disable_editor_fullscreen_by_default() {
    $script = "jQuery( window ).load(function() { const isFullscreenMode = wp.data.select( 'core/edit-post' ).isFeatureActive( 'fullscreenMode' ); if ( isFullscreenMode ) { wp.data.dispatch( 'core/edit-post' ).toggleFeature( 'fullscreenMode' ); } });";
    wp_add_inline_script( 'wp-blocks', $script );
  }
  add_action( 'enqueue_block_editor_assets', 'XXXX_disable_editor_fullscreen_by_default' );
}
