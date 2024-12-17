This CBTV web site has been created using Hugo (using Go language), SCSS (using SASS) to compile it, and very little vanilla JavaScript.

A webpage is nothing but html text (*index.html*) displayed in a certain style (*main.css*), with a bit of scripting (*scipts.js*) to ensure certains things work as desired, e.g.menu popups, and images with reference to their location storage (usually a folder). 

Hugo is a super fast static site generator written in Go to help us with that. It uses markdown files for content and templates for coding which makes it easy for content generators and developers respectively.

Styling has been done using SCSS. Style rules are the foundation of Sass, just like they are for CSS. And they work the same way: you choose which elements to style with a selector, and declare properties that affect how those elements look. 

Very little scripting has been done and all in vanilla JavaScript. This is mainly for the menu button to work and the cookie consent popup.

Content is all stored in a folder called *content/cbtv* with some 6 subfolders each with a markdown file representing a section on the index page. As this is a single page site, each section has its own id based on the title of that section. With Hugo one could also easily have multiple short pages each with a distinct url rather than this single page site.

## Version
```
hugo version
hugo v0.139.5+extended linux/amd64 BuildDate=2024-10-24T12:26:27Z VendorInfo=brew

go version
go version go1.16.5 gccgo (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0 linux/amd64

Node version
v21.1.0

Sass version
1.71.1
```
## Cloud storage
The website development repository is stored on *Github.com*. This secures also the version control of the website development. Access is via your email or username *natasha-tuinman*.

## Cloud hosting
Running your web site on the cloud in handled by *Netlify.com* which pulls data from Github automatically and will try to deploy yhe changes made. For security reasons, access is only via Github authorisation.

## Installing your website locally on your laptop
You need to clone the repository from Github 
---
git clone git@github.com:natasha-tuinman/cbtv.git
---
If this goes succesfully then you need to install the dependencies mentioned in package.json
---
npm install
---
You are nowready to run the website

## Running website locally on your laptop
 you can run hugo locally on port 1313 using this command:
--- 
hugo server --disableFastRender
---
To run it in production mode, run this package.json command:
---
npm run deploy
---

## Contents
The data is stored in *Content/cbtv* in some 7 markdown files, each representing a page. As this is a single page site, each ‘page’ has it’s own id based on the title. 

## CSS styling
Create the scss files required in 'assets/scss' where main.scss is the master file which calls all the required stylesheets. 'custom.scss' is the main file for all the styling. 

## Javascript
Same with the 'assets/js' files required though they are called by 'layouts/partials/site-scripts.html'

## Menu
Hugo creates the menu read as .Site.Menus.main in the partial called 'site-navigation'. Each item in content should therefore have a index.md file (for a single page), not _index.md (for multiple pages).

## Images
Images are mainly stored in the static folder or in the page bundle of the relevant content page. Fonts and socials are also stored in this static folder.

## Creative Commons Legal Code

CC0 1.0 Universal

    CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE
    LEGAL SERVICES. DISTRIBUTION OF THIS DOCUMENT DOES NOT CREATE AN
    ATTORNEY-CLIENT RELATIONSHIP. CREATIVE COMMONS PROVIDES THIS
    INFORMATION ON AN "AS-IS" BASIS. CREATIVE COMMONS MAKES NO WARRANTIES
    REGARDING THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS
    PROVIDED HEREUNDER, AND DISCLAIMS LIABILITY FOR DAMAGES RESULTING FROM
    THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED
    HEREUNDER.

Statement of Purpose

The laws of most jurisdictions throughout the world automatically confer
exclusive Copyright and Related Rights (defined below) upon the creator
and subsequent owner(s) (each and all, an "owner") of an original work of
authorship and/or a database (each, a "Work").

Certain owners wish to permanently relinquish those rights to a Work for
the purpose of contributing to a commons of creative, cultural and
scientific works ("Commons") that the public can reliably and without fear
of later claims of infringement build upon, modify, incorporate in other
works, reuse and redistribute as freely as possible in any form whatsoever
and for any purposes, including without limitation commercial purposes.
These owners may contribute to the Commons to promote the ideal of a free
culture and the further production of creative, cultural and scientific
works, or to gain reputation or greater distribution for their Work in
part through the use and efforts of others.

For these and/or other purposes and motivations, and without any
expectation of additional consideration or compensation, the person
associating CC0 with a Work (the "Affirmer"), to the extent that he or she
is an owner of Copyright and Related Rights in the Work, voluntarily
elects to apply CC0 to the Work and publicly distribute the Work under its
terms, with knowledge of his or her Copyright and Related Rights in the
Work and the meaning and intended legal effect of CC0 on those rights.

1. Copyright and Related Rights. A Work made available under CC0 may be
protected by copyright and related or neighboring rights ("Copyright and
Related Rights"). Copyright and Related Rights include, but are not
limited to, the following:

  i. the right to reproduce, adapt, distribute, perform, display,
     communicate, and translate a Work;
 ii. moral rights retained by the original author(s) and/or performer(s);
iii. publicity and privacy rights pertaining to a person's image or
     likeness depicted in a Work;
 iv. rights protecting against unfair competition in regards to a Work,
     subject to the limitations in paragraph 4(a), below;
  v. rights protecting the extraction, dissemination, use and reuse of data
     in a Work;
 vi. database rights (such as those arising under Directive 96/9/EC of the
     European Parliament and of the Council of 11 March 1996 on the legal
     protection of databases, and under any national implementation
     thereof, including any amended or successor version of such
     directive); and
vii. other similar, equivalent or corresponding rights throughout the
     world based on applicable law or treaty, and any national
     implementations thereof.

2. Waiver. To the greatest extent permitted by, but not in contravention
of, applicable law, Affirmer hereby overtly, fully, permanently,
irrevocably and unconditionally waives, abandons, and surrenders all of
Affirmer's Copyright and Related Rights and associated claims and causes
of action, whether now known or unknown (including existing as well as
future claims and causes of action), in the Work (i) in all territories
worldwide, (ii) for the maximum duration provided by applicable law or
treaty (including future time extensions), (iii) in any current or future
medium and for any number of copies, and (iv) for any purpose whatsoever,
including without limitation commercial, advertising or promotional
purposes (the "Waiver"). Affirmer makes the Waiver for the benefit of each
member of the public at large and to the detriment of Affirmer's heirs and
successors, fully intending that such Waiver shall not be subject to
revocation, rescission, cancellation, termination, or any other legal or
equitable action to disrupt the quiet enjoyment of the Work by the public
as contemplated by Affirmer's express Statement of Purpose.

3. Public License Fallback. Should any part of the Waiver for any reason
be judged legally invalid or ineffective under applicable law, then the
Waiver shall be preserved to the maximum extent permitted taking into
account Affirmer's express Statement of Purpose. In addition, to the
extent the Waiver is so judged Affirmer hereby grants to each affected
person a royalty-free, non transferable, non sublicensable, non exclusive,
irrevocable and unconditional license to exercise Affirmer's Copyright and
Related Rights in the Work (i) in all territories worldwide, (ii) for the
maximum duration provided by applicable law or treaty (including future
time extensions), (iii) in any current or future medium and for any number
of copies, and (iv) for any purpose whatsoever, including without
limitation commercial, advertising or promotional purposes (the
"License"). The License shall be deemed effective as of the date CC0 was
applied by Affirmer to the Work. Should any part of the License for any
reason be judged legally invalid or ineffective under applicable law, such
partial invalidity or ineffectiveness shall not invalidate the remainder
of the License, and in such case Affirmer hereby affirms that he or she
will not (i) exercise any of his or her remaining Copyright and Related
Rights in the Work or (ii) assert any associated claims and causes of
action with respect to the Work, in either case contrary to Affirmer's
express Statement of Purpose.

4. Limitations and Disclaimers.

 a. No trademark or patent rights held by Affirmer are waived, abandoned,
    surrendered, licensed or otherwise affected by this document.
 b. Affirmer offers the Work as-is and makes no representations or
    warranties of any kind concerning the Work, express, implied,
    statutory or otherwise, including without limitation warranties of
    title, merchantability, fitness for a particular purpose, non
    infringement, or the absence of latent or other defects, accuracy, or
    the present or absence of errors, whether or not discoverable, all to
    the greatest extent permissible under applicable law.
 c. Affirmer disclaims responsibility for clearing rights of other persons
    that may apply to the Work or any use thereof, including without
    limitation any person's Copyright and Related Rights in the Work.
    Further, Affirmer disclaims responsibility for obtaining any necessary
    consents, permissions or other rights required for any use of the
    Work.
 d. Affirmer understands and acknowledges that Creative Commons is not a
    party to this document and has no duty or obligation with respect to
    this CC0 or use of the Work.
