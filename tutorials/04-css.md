# Stylesheet

## Custom stylesheet

All styles, including Hugo's (or rather Ananke's from the theme with the same name), are found in *assets/css/*

Our own custom styling is in *_custom.scss*.

For our own scss files to be merged, it need to be specified in the configuration file.
```
custom_css = ["_cookieconsent3.scss","_custom.scss"]
```

Place *_custom.scss* last as that provides the option to override some of the standard cookie css.


This gets added by Hugo into the main stylesheet:

```
<link rel="stylesheet" href="/css/main.min.css">
```

## Header & Footer
The custom css file contains mainly the header and footer with a seperate font family as well as the screen settings in order of size i.e. from large to small screen size.