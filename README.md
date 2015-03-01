# Bookmarklet to Firefox Add-on Boilerplate

Boilerplate to port your bookmarklet to a Firefox Add-on.

Simply copy your bookmarklet code into `data/bookmarklet-code.js`, update the icons in `data/images/`, update the other metadata in `package.json` and test it localy with [cfx](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation) and you're ready to submit it.



## Test the Firefox Add-on localy

Install the cfx comandline tool as described [here](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation), open to the _bookmarklet-to-firefox-addon-boilerplate_ directory in your comandline of choice and run `cfx run`.
This opens a local firefox version that has your addon installed.

More infos [here](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Getting_started)


##Publish your Add-on

Go to https://addons.mozilla.org/en-US/developers/addons click _Submit a New Add-on_ and follow the steps.