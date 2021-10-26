<?php

$labels = array(
    'name'              => _x($plural, 'Taxonomy general name', ''),
    'singular_name'     => _x($single, 'Taxonomy singular name', ''),
);
$args = array(
    'hierarchical'      => $hierarchical,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => true,
    'rewrite'           => array('slug' => $slug),
);
