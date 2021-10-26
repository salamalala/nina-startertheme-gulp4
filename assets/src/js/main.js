import $ from 'jquery';
import objectFitImages from 'object-fit-images';
import cssVars from 'css-vars-ponyfill';
import smoothscroll from 'smoothscroll-polyfill';
// import burgerAnimation from './utils/burgerAnimation';


document.addEventListener('DOMContentLoaded', function() {
  // fallback for ie and edge:
  cssVars();
  objectFitImages();

  //fallback safari
  smoothscroll.polyfill();



}, false);
