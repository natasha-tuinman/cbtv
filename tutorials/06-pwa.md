# Progressive Web Application

## Service Workers
You have a file called *ws.js* in you *static* folder. This is a Google file with just an offline reference, the reason you have a folder called *offline* in your content.

## Manifest
The *static* folder has a file called *manifest.json* 

## Favicons
The *static* folder has a folder called *favicons* with a space for favicon files mentioned in the manifest. 

There is a site to upload your favicons and to create the maskable icons: https://maskable.app/editor

## Link
Finaly, there is a manifest.json <link> in the <head> section.

```
<link rel="manifest" href="/manifest.json">
```


