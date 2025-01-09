wp.domReady(() => {
  // remove various default styles on blocks
  wp.blocks.unregisterBlockStyle("core/buttons", ["fill", "outline"]);
  wp.blocks.unregisterBlockStyle("core/separator", ["wide", "dots"]);
  wp.blocks.unregisterBlockStyle("core/image", ["rounded"]);

  // remove rich text possibilities
  wp.richText.unregisterFormatType("core/image");
  wp.richText.unregisterFormatType("core/italic");
  wp.richText.unregisterFormatType("core/language");
  wp.richText.unregisterFormatType("core/keyboard");
  wp.richText.unregisterFormatType("core/text-color");
  wp.richText.unregisterFormatType("core/subscript");
  wp.richText.unregisterFormatType("core/superscript");
  wp.richText.unregisterFormatType("core/highlight");
  wp.richText.unregisterFormatType("core/strikethrough");
  wp.richText.unregisterFormatType("core/code");

  // remove group variations, only leave stack
  wp.blocks.unregisterBlockVariation("core/group", "group-row");
  wp.blocks.unregisterBlockVariation("core/group", "group-grid");

  // EMBEDS:
  // remove all embeds apart form vimeo and youtube
  const allowedEmbedBlocks = ["vimeo", "youtube"];

  wp.blocks.getBlockVariations("core/embed").forEach(function (blockVariation) {
    if (-1 === allowedEmbedBlocks.indexOf(blockVariation.name)) {
      wp.blocks.unregisterBlockVariation("core/embed", blockVariation.name);
    }
  });
});
