<?php

function XXXX_modify_heading_levels_globally( $args, $block_type ) {

    // Check if the current user is an Administrator.
    $is_administrator = current_user_can( 'edit_theme_options' );

    // Only proceed if the current block is a Heading and the user is not an Administrator.
    if ( 'core/heading' !== $block_type ) {
        return $args;
    }

    // Disable H1, H4, and H5 and H6.
    $args['attributes']['levelOptions']['default'] = [ 2, 3];

    return $args;
}
add_filter( 'register_block_type_args', 'XXXX_modify_heading_levels_globally', 10, 2 );
