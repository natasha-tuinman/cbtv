# Hugo

We use Hugo v0.136.5 extended version

## Layout
The layout is based on a cascading structure and at times leads to confusion as to which layout is actually used. To assist here, we have created a file called *development.html* in *layouts/partials*. This file is called at the bottom of the body in the file *layouts/_defaults/baseof.html*.

```
 {{ partial "development.html" . }}
```

If you add the following line in a layout file then the layout will be displayed at the bottom of the html page e.g.

```
{{ .Scratch.Set "layout" "policies/single.html" }}
```

It will only be displayed on Hugo in development mode.
