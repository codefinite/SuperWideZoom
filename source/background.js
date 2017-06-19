"use strict";

window.browser = (() => {
  return window.browser ||
    window.msBrowser ||
    window.chrome;
})();

browser.browserAction.onClicked.addListener(() => {
    browser.tabs.query(
        {
            currentWindow: true,
            active: true
        },
        (tabs) => {
            browser.tabs.sendMessage(
                tabs[0].id,
                {},
                {},
                (response) => {
                    browser.browserAction.setIcon({
                        path: response ? {
                            "20": "icons/btn-on-20.png",
                            "25": "icons/btn-on-25.png",
                            "30": "icons/btn-on-30.png",
                            "40": "icons/btn-on-40.png"
                        } : {
                                "20": "icons/btn-20.png",
                                "25": "icons/btn-25.png",
                                "30": "icons/btn-30.png",
                                "40": "icons/btn-40.png"
                        },
                        tabId: tabs[0].id
                    });
                }
            );
        }
    );
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.load) {
        browser.tabs.query(
        {
            currentWindow: true,
            active: true
        },
        (tabs) => {
            browser.browserAction.setIcon({
                path: {
                    "20": "icons/btn-20.png",
                    "25": "icons/btn-25.png",
                    "30": "icons/btn-30.png",
                    "40": "icons/btn-40.png"
                },
                tabId: tabs[0].id
            });
        });
    }
});