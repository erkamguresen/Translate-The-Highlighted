import { createTheBookmarklet } from '../logic/bookmarklet.js';

export function bookmarkletFormHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  const codeElement = document.getElementById('bookmarklet-code');

  const bookmarkletElement = document.getElementById('bookmarklet-container');

  const emojiElement = document.getElementById('emoji-select');
  const sourceLangElement = document.getElementById('source-language-select');
  const targetLangElement = document.getElementById('target-language-select');

  const emoji = emojiElement.value;
  let sourceLangCode = sourceLangElement.value;
  const targetLangCode = targetLangElement.value;

  bookmarkletElement.innerHTML = '';

  bookmarkletElement.appendChild(
    createTheBookmarklet(emoji, sourceLangCode, targetLangCode)
  );

  const aElement = bookmarkletElement.querySelector('a');

  codeElement.innerText = decodeURI(aElement.href);
}
