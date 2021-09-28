wp.domReady( () => {
  // remove various default styles on blocks
	wp.blocks.unregisterBlockStyle( 'core/buttons', ['fill', 'outline'] );
  wp.blocks.unregisterBlockStyle( 'core/separator', ['wide', 'dots'] );
  wp.blocks.unregisterBlockStyle( 'core/image', ['rounded'] );

  // make separator responsive
  wp.blocks.registerBlockStyle(
		'core/separator',
		[
			{
        name: 'default',
		    label: 'Default',
        isDefault: true,
			},
			{
        name: 'responsive-small',
        label: 'Responsive Small',
			},
      {
        name: 'responsive-large',
        label: 'Responsive Large',
			}
		]
	);
} );
