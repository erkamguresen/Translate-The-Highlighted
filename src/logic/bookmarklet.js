export function createTheBookmarklet(emoji, sourceLangCode, targetLangCode) {
  const divElement = document.createElement('div');

  divElement.innerHTML = `
    ---->
    <a
      href="javascript:(function() {
        function getSelectedText(page) {
            return page.selection ? page.selection.createRange().text : page.getSelection()
        } 
        textToTranslate = getSelectedText(document); 
        for (i=0; i < frames.length && (textToTranslate==null || textToTranslate==''); i++) textToTranslate = getSelectedText(frames[i].document); 
        if (!textToTranslate || textToTranslate=='') textToTranslate = prompt('Enter text to translate',''); 
        open('https://translate.google.com/?sl=${sourceLangCode}&tl=${targetLangCode}&text=' + (textToTranslate ? encodeURIComponent(textToTranslate) : '')+ '&op=translate').focus();
        })();
    "
    >
      ${emoji} ${sourceLangCode} -> ${targetLangCode}
    </a>
    <---- (Drag to bookmarks of your browser)
    `;
  return divElement;
}
