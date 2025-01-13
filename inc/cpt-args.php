<?php

$args = [
    'label'               => __($single, ' '),
    'description'         => __($single, ' '),
    'labels'              => [
        'name'               => _x($plural, 'Post Type General Name', ' '),
        'singular_name'      => _x($single, 'Post Type Singular Name', ' ')
    ],
    'supports'            => $support,
    'taxonomies'          => $taxonomies,
    'hierarchical'        => false,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => true,
    'show_in_admin_bar'   => true,
    'menu_position'       => $menuPosition,
    'menu_icon'           => $menuIcon,
    'can_export'          => true,
    'has_archive'         => $has_archive,
    'rewrite'             => array('slug' => $slug),
    'exclude_from_search' => false,
    'publicly_queryable'  => true,
    'capability_type'     => $type,
    'show_in_rest'        => $rest_api,
    'template'            => $template
];
