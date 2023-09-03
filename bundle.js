(function () {
  'use strict';

  function store(url) {
    let urlsStr = localStorage.getItem('urls');

    if(!urlsStr) {
      urlsStr = JSON.stringify([]);
    }

    const urls = JSON.parse(urlsStr);
    urls.push(url);

    localStorage.setItem('urls', JSON.stringify(urls));

    console.log(urls);
  }

  function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  }

  const post = document.querySelectorAll('[data-test-id="post-content"]')?.[0];
  const menuWrapper = post.childNodes[post.childNodes.length - 1];
  const peckButton = htmlToElement('<button class="reddit-button">Peck</button>');
  peckButton.addEventListener('click', () => { store(window.location); });
  menuWrapper.appendChild(peckButton);

})();
