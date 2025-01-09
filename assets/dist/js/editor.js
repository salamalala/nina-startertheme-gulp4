/******/ (function() { // webpackBootstrap
/*!*********************************!*\
  !*** ./assets/src/js/editor.js ***!
  \*********************************/
wp.domReady(function () {
  // remove various default styles on blocks
  wp.blocks.unregisterBlockStyle('core/buttons', ['fill', 'outline']);
  wp.blocks.unregisterBlockStyle('core/separator', ['wide', 'dots']);
  wp.blocks.unregisterBlockStyle('core/image', ['rounded']);

  // make separator responsive
  wp.blocks.registerBlockStyle('core/separator', [{
    name: 'default',
    label: 'Default',
    isDefault: true
  }, {
    name: 'responsive-small',
    label: 'Responsive Small'
  }, {
    name: 'responsive-large',
    label: 'Responsive Large'
  }]);
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQUEsRUFBRSxDQUFDQyxRQUFRLENBQUUsWUFBTTtFQUNqQjtFQUNERCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0Msb0JBQW9CLENBQUUsY0FBYyxFQUFFLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBRSxDQUFDO0VBQ3BFSCxFQUFFLENBQUNFLE1BQU0sQ0FBQ0Msb0JBQW9CLENBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFFLENBQUM7RUFDcEVILEVBQUUsQ0FBQ0UsTUFBTSxDQUFDQyxvQkFBb0IsQ0FBRSxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUUsQ0FBQzs7RUFFM0Q7RUFDQUgsRUFBRSxDQUFDRSxNQUFNLENBQUNFLGtCQUFrQixDQUM1QixnQkFBZ0IsRUFDaEIsQ0FDQztJQUNLQyxJQUFJLEVBQUUsU0FBUztJQUNqQkMsS0FBSyxFQUFFLFNBQVM7SUFDZEMsU0FBUyxFQUFFO0VBQ2hCLENBQUMsRUFDRDtJQUNLRixJQUFJLEVBQUUsa0JBQWtCO0lBQ3hCQyxLQUFLLEVBQUU7RUFDWixDQUFDLEVBQ0U7SUFDRUQsSUFBSSxFQUFFLGtCQUFrQjtJQUN4QkMsS0FBSyxFQUFFO0VBQ1osQ0FBQyxDQUVILENBQUM7QUFDRixDQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL25pbmFzdGFydGVydGhlbWUvLi9hc3NldHMvc3JjL2pzL2VkaXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3cC5kb21SZWFkeSggKCkgPT4ge1xuICAvLyByZW1vdmUgdmFyaW91cyBkZWZhdWx0IHN0eWxlcyBvbiBibG9ja3Ncblx0d3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1N0eWxlKCAnY29yZS9idXR0b25zJywgWydmaWxsJywgJ291dGxpbmUnXSApO1xuICB3cC5ibG9ja3MudW5yZWdpc3RlckJsb2NrU3R5bGUoICdjb3JlL3NlcGFyYXRvcicsIFsnd2lkZScsICdkb3RzJ10gKTtcbiAgd3AuYmxvY2tzLnVucmVnaXN0ZXJCbG9ja1N0eWxlKCAnY29yZS9pbWFnZScsIFsncm91bmRlZCddICk7XG5cbiAgLy8gbWFrZSBzZXBhcmF0b3IgcmVzcG9uc2l2ZVxuICB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1N0eWxlKFxuXHRcdCdjb3JlL3NlcGFyYXRvcicsXG5cdFx0W1xuXHRcdFx0e1xuICAgICAgICBuYW1lOiAnZGVmYXVsdCcsXG5cdFx0ICAgIGxhYmVsOiAnRGVmYXVsdCcsXG4gICAgICAgIGlzRGVmYXVsdDogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG4gICAgICAgIG5hbWU6ICdyZXNwb25zaXZlLXNtYWxsJyxcbiAgICAgICAgbGFiZWw6ICdSZXNwb25zaXZlIFNtYWxsJyxcblx0XHRcdH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdyZXNwb25zaXZlLWxhcmdlJyxcbiAgICAgICAgbGFiZWw6ICdSZXNwb25zaXZlIExhcmdlJyxcblx0XHRcdH1cblx0XHRdXG5cdCk7XG59ICk7XG4iXSwibmFtZXMiOlsid3AiLCJkb21SZWFkeSIsImJsb2NrcyIsInVucmVnaXN0ZXJCbG9ja1N0eWxlIiwicmVnaXN0ZXJCbG9ja1N0eWxlIiwibmFtZSIsImxhYmVsIiwiaXNEZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==