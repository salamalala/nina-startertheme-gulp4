<?php

$labels = array(
    'name'              => _x($plural, 'taxonomy general name', 'XXXX'),
    'singular_name'     => _x($single, 'taxonomy singular name', 'XXXX'),
    'search_items'      => __('Search ' . $plural, 'XXXX'),
    'all_items'         => __('All Genres', 'XXXX'),
    'parent_item'       => __('Parent ' . $single, 'XXXX'),
    'parent_item_colon' => __('Parent :' . $single, 'XXXX'),
    'edit_item'         => __('Edit ' . $single, 'XXXX'),
    'update_item'       => __('Update ' . $single, 'XXXX'),
    'add_new_item'      => __('Add New ' . $single, 'XXXX'),
    'new_item_name'     => __('New ' . $single . ' Name', 'XXXX'),
    'menu_name'         => __($single, ''),
);

$args = array(
  'hierarchical'      => $hierarchical,
  'labels'            => $labels,
  'show_ui'           => true,
  'show_in_nav_menus' => true,
  'show_admin_column' => true,
  'description'       => false,
  'query_var'         => true,
  'rewrite'           => array('slug' => $slug),
  'show_in_rest'      => $rest_api,
  'meta_box_cb'       => false,
);
