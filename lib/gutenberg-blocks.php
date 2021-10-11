<?php
// Allowed Gutenberg Blocks


add_filter( 'allowed_block_types_all', 'custom_allowed_block_types', 10, 2 );

function custom_allowed_block_types( $allowed_block_types, $post ) {

    // state WP 5.8
    $allowed_blocks = array(
      'core/paragraph',
      'core/image',
      'core/heading',
      'core/quote',
      'core/file',
      'core/video',
      'core/button',
      'core/html',
      'core/file',
      'core/separator',

      // 'core/pullquote',
      // 'core/gallery',
      // 'core/list',
      // 'core/shortcode',
      // 'core/archives',
      // 'core/audio',
      // 'core/calendar',
      // 'core/categories',
      // 'core/code',
      // 'core/columns',
      // 'core/cover',
      // 'core/embed',
      // 'core/text-columns',
      // 'core/group',
      // 'core/freeform',
      // 'core/media-text',
      // 'core/latest-comments',
      // 'core/latest-posts',
      // 'core/missing',
      // 'core/more',
      // 'core/nextpage',
      // 'core/preformatted',
      // 'core/pullquote',
      // 'core/rss',
      // 'core/search',
      // 'core/block',
      // 'core/social-links',
      // 'core/social-link',
      // 'core/subhead',
      // 'core/table',
      // 'core/tag-cloud',
      // 'core/text-columns',
      // 'core/verse',
      // 'core/video',
      // 'core/page-list' ,
      // 'core/site-logo' ,
      // 'core/site-tagline' ,
      // 'core/site-title' ,
      // 'core/post-categories' ,
      // 'core/post-tags' ,
      // 'core/query-title' ,
      // 'core/table-of-contents' ,
      // 'core/template-part' ,
      // 'core/term-description' ,
      // 'core/query' ,
      // 'core/post-title' ,
      // 'core/post-content' ,
      // 'core/post-date' ,
      // 'core/post-excerpt' ,
      // 'core/post-featured-image' ,
      // 'core/post-featured-image' ,
      // 'core/loginout' ,


    );

	return $allowed_blocks;
}
