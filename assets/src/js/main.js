import $ from 'jquery';
import objectFitImages from 'object-fit-images';
import cssVars from 'css-vars-ponyfill';

import './utils/slider';


document.addEventListener('DOMContentLoaded', function() {
  // fallback for ie and edge:
  cssVars();
  objectFitImages();



}, false);
