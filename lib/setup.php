<?php

add_action( 'after_setup_theme','XXXX_setup');

function XXXX_setup() {

  register_nav_menus( array (
    'header_first'	=> esc_html__( 'Header-First', 'xxxx' ),
    'header_second'	=> esc_html__( 'Header-Second', 'xxxx' ),
    'language_switcher'	=> esc_html__( 'Language Switcher', 'xxxx' ),
    'footer' => esc_html__( 'Footer', ' ' )
  ) );

  add_theme_support( 'automatic-feed-links' );
  add_theme_support( 'title-tag' );
  add_theme_support( 'post-thumbnails' );
  add_theme_support( 'menus' );
  add_theme_support(
    'html5', array(
      'comment-form',
      'comment-list',
      'gallery',
      'caption',
    )
  );

  
  // Gutenberg settings:
  // add theme support for editor styles
  // add_theme_support( 'align-wide' );
  add_theme_support( 'editor-styles' );
}
