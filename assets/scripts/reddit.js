import { htmlToElement } from "./utils";

window.addEventListener('load', function () {
  addButton()
})

function addButton() {
  const post = document.querySelectorAll('[data-test-id="post-content"]')?.[0];
  const menuWrapper = post.childNodes[post.childNodes.length - 1]
  const peckButton = htmlToElement('<button class="reddit-button">Peck</button>')
  menuWrapper.appendChild(peckButton)
}