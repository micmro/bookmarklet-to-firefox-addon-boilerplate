var self = require('sdk/self');
var buttons = require("sdk/ui/button/action");
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "Bookmarklet-To-FF-Addon-Button",
  label: "Run the Bookmarklet",
  icon: {
    "16": "./images/icon16.png",
    "19": "./images/icon19.png",
    "32": "./images/icon32.png",
    "48": "./images/icon48.png",
    "64": "./images/icon64.png",
    "128": "./images/icon128.png"
  },
  onClick: runBookmarklet
});

function runBookmarklet(state) {
	tabs.activeTab.attach({
		contentScriptFile: "../data/bookmarklet-code.js"
	})
};