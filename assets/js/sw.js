/**
 * @description service worker -> https://techformist.com/add-pwa-hugo/ 
*/

/**
 * Represents a person.
 * @constructor
 * @param {string} name - The name of the person.
 * @param {number} age - The age of the person.
 */

if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then(function(registration) {
            //console.log('Service Worker Registered');
        });
  
    navigator.serviceWorker
        .ready
        .then(function(registration) {
            //console.log('Service Worker Ready');
        });
  }