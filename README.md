ShinyField jQuery Plugin v0.1.0
===============================

Copyright 2012 Mendeley Ltd. Licensed under the Apache License, Version 2.0

THANKS
-----

Big thanks to @AndrewOfficer and @subcide, of the Mendeley UX team, for design input and advice.  

OVERVIEW
--------

A simple jQuery plugin, originally developed for the Mendeley website, to

* implement consistent HTML5 input (text/password) placeholder hinting behaviour across all major browsers, including IE 7+! (Note that having a placeholder value is optional)
* apply beautiful CSS3 styling such as border-radius and box-shadow on the inputs. Sorry, IE users will not get those lovely rounded corners.

Visit https://www.mendeley.com/join/ or http://seewah.blogspot.com/2011/12/shinyfield-placeholder-jquery-plugin.html to see this plugin in action!

SIMPLE USAGE
------------

See demo.html for the a basic example of how to use this plugin. Simply load both the jQuery js and the ShinyField js in the "head" section of the html, and then invoke .shinify() on the relevant elements inside the "document.ready" handler.

CUSTOMIZATION OPTIONS
---------------------

wrapperId, wrapperClass, hintSpanId, hintSpanClass for assigning various ids and classes to the generated elements.

E.g. $("#my-input").shinify({"wrapperId": "my-special-wrapper"});

CSS CUSTOMIZATION
-----------------

Every look-and-feel aspect of this plugin can be customized via CSS. Here are some common examples:

1) to change input box dimensions (default is 292px by 36px, with 10px by 8px "inner padding"):

<pre>
.shiny-field-wrapper { width: 100px; height: 24px; }
.shiny-field-wrapper input { margin: 5px; width: 90px; font-size: 11px; } /* note that you need to override MARGIN here */
.shiny-field-hint { padding: 5px; width: 90px; font-size: 11px; } /* note that you need to override PADDING here */
</pre>

2) to change the "in focus" border colour:

<pre>
.shiny-field-wrapper.in-focus { border-color: red; }
</pre>

3) to make the wrapper an "inline block" element:

<pre>
.shiny-field-wrapper { display: inline-block; }
</pre>