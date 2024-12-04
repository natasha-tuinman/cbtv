The *Odyssey.co.in* website is completely based on Hugo (v0.110) with *Ananke* as the theme and *jsdoc* for this documentation.


# Installation
On Windows, install Hugo using *Chocolatey*. On Cromebook/Ubuntu, install Hugo using Brew
Clone *natasha* from github to your PC/laptop assuming you have access to the SSH keys.
Update the (submodule) theme as this would not have been updated as yet:

```
git submodule update --init
```

Run Hugo in development mode which is normally accessible on http://localhost:1313

```
hugo server -D
```


# Documentation
Install JSdoc as a dependency

```
npm install jsdoc --dev-save
```
Create a *jsdoc.json* file in the root of the project.


# gitignore
We have a file called *.gitignore* which ignores to save the files or directories mentioned in the file.

# env
We have a standard file called *.env* in the root of the project with normally maintains key aspects such as passwords etc which, for that very reason, is not saved to github by being listed in the gitignore file.. 


# Styling
All custom styles are set in the file *assets/ananke/css/customs.scss* (a sass file) and this is specified in the *config.toml* file. All this gets added to the *main.css*, our final minified css file. This includes the font families used which should be stored in the */static/font/* folder. 

## Layouts 
Specific content files or folders normally have their own layout folder e.g. about. Amongst others, this makes it easier to locate the relevant layout file. The content file must therefore have a param called *type* to be able to use it.

# Theme
All configuration is in the *config.toml* file. Most of the Ananke theme files in *themes/ananke/layouts* are copied to the local version i.e. *odyssey-tours-2023/layouts* as well as some other theme files so most should not be required right now (till there is an update!). 
