/**
 * This is a function description.
 * @param {string} param - A description of the parameter.
 * @returns {string} The return value description.
 * @description navToggle. Add event listeners 
*/

const primaryNav = document.querySelector('.primary-navigation');
const navToggle  = document.querySelector('.mobile-nav-toggle');

// option to replace () with (e)
navToggle.addEventListener('click',() => {
  const visibility = primaryNav.getAttribute('data-visible');
 
  if (visibility === 'false'){
    primaryNav.setAttribute('data-visible',true);
    navToggle.setAttribute('aria-expanded',true);
  } else {
    primaryNav.setAttribute('data-visible',false);
    navToggle.setAttribute('aria-expanded',false);
  }
});

