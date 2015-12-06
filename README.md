# Bookmarklet to Firefox Add-on Boilerplate

Boilerplate to port your bookmarklet to a Firefox Add-on.

Simply copy your bookmarklet code into `data/bookmarklet-code.js`, update the icons in `data/images/`, update the other metadata in `package.json` and test it localy with [jpm](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm#Installation) and you're ready to submit it.


## Test the Firefox Add-on localy

Install the jpm comandline tool as described [here](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation), open to the _bookmarklet-to-firefox-addon-boilerplate_ directory in your comandline of choice and run `cfx run`.

![alt text](https://raw.githubusercontent.com/micmro/bookmarklet-to-firefox-addon-boilerplate/gh-pages/images/start-jpm.png "comandline output when starting jpm")

This opens a local firefox version that has your addon installed.

![alt text](https://raw.githubusercontent.com/micmro/bookmarklet-to-firefox-addon-boilerplate/gh-pages/images/test-add-on.png "screenshot of add-on in test browser")

You can find more infos about jpm [here](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm).


##Publish your Add-on

Package your addon
```
jpm xpi
```

Go to https://addons.mozilla.org/en-US/developers/addons click _Submit a New Add-on_ and follow the steps.

![alt text](https://raw.githubusercontent.com/micmro/bookmarklet-to-firefox-addon-boilerplate/gh-pages/images/submit-new-add-on.png "screenshot of submit button")

Please note that the submission might take up to a few days.


##More
Check out [bookmarklet-to-chrome-extension-boilerplate](https://github.com/micmro/bookmarklet-to-chrome-extension-boilerplate) if you want to port your bookmarklet to Chrome as well.