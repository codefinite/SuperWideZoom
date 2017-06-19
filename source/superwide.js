"use strict";

window.browser = (() => {
  return window.browser ||
    window.msBrowser ||
    window.chrome;
})();

browser.runtime.sendMessage({load:true});

browser.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        var superWideZoomStyle = document.getElementById('superWideZoomStyle'),
            on = false;
        if (superWideZoomStyle === null) {
            let head = document.head || document.getElementsByTagName('head')[0];
            superWideZoomStyle = document.createElement('link');
            superWideZoomStyle.setAttribute('id', 'superWideZoomStyle');
            superWideZoomStyle.setAttribute('rel', 'stylesheet');
            superWideZoomStyle.setAttribute('href', browser.extension.getURL("superwidezoom.css"));
            head.appendChild(superWideZoomStyle);
            on = true;
        } else {
            superWideZoomStyle.remove();
        }
        sendResponse(on);
    }
);