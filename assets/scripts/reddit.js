import { store } from "./localhost";
import { htmlToElement } from "./utils";

const post = document.querySelectorAll('[data-test-id="post-content"]')?.[0];
const menuWrapper = post.childNodes[post.childNodes.length - 1]
const peckButton = htmlToElement('<button class="reddit-button">Peck</button>')
peckButton.addEventListener('click', () => { store(window.location) })
menuWrapper.appendChild(peckButton)