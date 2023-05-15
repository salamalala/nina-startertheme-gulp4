<?php

// remove the default Gutenberg block patterns.

function XXXX_theme_support() {
  remove_theme_support('core-block-patterns');
}

add_action('after_setup_theme', 'XXXX_theme_support');
