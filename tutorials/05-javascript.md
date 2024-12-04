# JavaScript

Our own */js/script.js* file can be seen below the </footer> tag.

## Cookies

The actual cookie script is *assets/js/cookieconsent3.js*.

The file *assets/css/cookieconsent3.scss* ensures the display of the cookie popup at the bottom of the screen rather than at the top.

For the scss file to be merged it need to be specified in the configuration file.
```
custom_css = ["cookieconsent3.scss","custom.scss"]
```
Place *_custom.scss* last at that provides the option to override some of the standard cookie css.

Finally add the cookie script in the *layouts/partials/side-scripts.html* for it to be added into the site's *js/script.js*.


## Service Workers
This is required for the PWA settings. 

We have a script in *assets/ananke/js/sw.js* as well as one created by Google in *static/sw.js*.

Finally add the service workers script in the *layouts/partials/side-scripts.html* for it to be added into the site's *js/script.js* at the bottom of the <body>.

```
<script src="/js/script.js"></script>
```