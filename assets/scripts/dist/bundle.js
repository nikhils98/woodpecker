(function () {
  'use strict';

  function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  }

  window.addEventListener('load', function () {
    addButton();
  });

  function addButton() {
    const post = document.querySelectorAll('[data-test-id="post-content"]')?.[0];
    const menuWrapper = post.childNodes[post.childNodes.length - 1];
    const peckButton = htmlToElement('<button class="reddit-button"><img id="icon-image" alt="acorn" width="20" height="20"/></button>');
    menuWrapper.appendChild(peckButton);
    let icon = document.getElementById("icon-image");
    icon.src = chrome.runtime.getURL("assets/images/acorn.png");
  }

})();
