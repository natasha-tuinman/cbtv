This CBTV web site has been created using Hugo (using Go language), SCSS (using SASS) to compile it, and very little vanilla JavaScript.

Hugo is a super fast static site generator written in Go. It uses markdown files for content and templates for coding which makes it easy for content generators and developers respectively.

Styling has been done using SCSS. Style rules are the foundation of Sass, just like they are for CSS. And they work the same way: you choose which elements to style with a selector, and declare properties that affect how those elements look. 

Very little scripting has been done and all in vanilla JavaScript. This is mainly for the menu button to work and the cookie consent popup.

Content is all stored in content/en/home in some 7 markdown files, each representing a page. As this is a single page site, each ‘page’ has its own id based on the title. 

## Version
```
hugo version
hugo v0.136.5+extended linux/amd64 BuildDate=2024-10-24T12:26:27Z VendorInfo=brew

go version
go version go1.16.5 gccgo (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0 linux/amd64

Node version
v21.1.0

Sass version
1.71.1
```
## CSS styling
Create the scss files required in 'assets/scss' where main.scss is the master file which calls all the required stylesheets. 'custom.scss' is the main file for all the styling. 

## Javascript
Same with the 'assets/js' files required though they are called by 'layouts/partials/site-scripts.html'

## Menu
Hugo creates the menu read as .Site.Menus.main in the partial called 'site-navigation'. Each item in content should therefore have a index.md file (for a single page), not _index.md (for multiple pages).

## Images
Images are mainly stored in the static folder or in the page bundle of the relevant content page. Fonts and socials are also stored in this static folder.

