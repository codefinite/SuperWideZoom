`use strict`;

window.browser = (function () {
  return window.browser ||
    window.msBrowser ||
    window.chrome;
})();

function superWideZoom(request, sender, sendResponse) {
    const head = document.head || document.getElementsByTagName(`head`)[0],
        superWideZoomStyle = document.getElementById(`superWideZoomStyle`),
        on = false;
    if (superWideZoomStyle === null) {
        superWideZoomStyle = document.createElement(`style`);
        superWideZoomStyle.setAttribute(`id`, `superWideZoomStyle`);
        superWideZoomStyle.appendChild(
            document.createTextNode(
                `#netflix-player video[src], #dv-web-player video[src], #movie_player.ytp-fullscreen video[src] {
                    height: 145vh !important;
                    width: 100vw !important;
                    left: 0 !important;
                    top: -22.5vh !important;
                }`
            )
        );
        head.appendChild(superWideZoomStyle);
        on = true;
    } else {
        superWideZoomStyle.remove();
    }
    sendResponse(on);
}

browser.runtime.onMessage.addListener(superWideZoom);
