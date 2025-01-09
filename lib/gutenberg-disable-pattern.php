<?php

// remove the default Gutenberg block patterns.

add_action( 'after_setup_theme', function() {
    remove_theme_support( 'core-block-patterns' );
} );
