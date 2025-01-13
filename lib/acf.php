<?php


// add options page
add_action('acf/init', 'spsg_op_init');

function spsg_op_init() {

  $parent =  acf_add_options_page(array(
      'page_title'    => __('Theme General Settings'),
      'menu_title'    => __('XXXX Settings'),
  ));

  // Add sub page.
  $footer = acf_add_options_sub_page(array(
     'page_title'  => __('Footer'),
     'menu_title'  => __('Footer'),
     'parent_slug' => $parent['menu_slug'],
  ));
}