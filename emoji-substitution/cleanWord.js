// alert('xxx');
const wordMap = new Map(tempArray);
const arrNode = arrNodeTemp;
// console.log(arrNode);
var arrQuantity = [];

var regexs = new Map();
for (var word of wordMap.keys()) {
  regexs.set(word, new RegExp(word, 'gi'));
}

function checkLegal (node) {
  if (node.nodeType === Node.TEXT_NODE) {

    if (node.parentNode &&
        node.parentNode.nodeName === 'TEXTAREA') {
      return;
    }

    var content = node.textContent;

    for (var [word, quantity] of wordMap) {
		
		
      // Grab the search regex for this word.
      const regex = regexs.get(word);
      if (content.indexOf(word)  >= 0) {
        totalQuantity += quantity;
      }
    }
  }
  else {
    for (var i = 0; i < node.childNodes.length; i++) {
      checkLegal(node.childNodes[i]);
    }
  }
}


for(var i = 0; i < arrNode.length; i++){
  var totalQuantity = 0;
  checkLegal(arrNode[i]);
  if (totalQuantity > 10) arrNode[i].parentNode.removeChild(arrNode[i]);
}


const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes && mutation.addedNodes.length > 0) {
      for (var i = 0; i < mutation.addedNodes.length; i++) {
        const newNode = mutation.addedNodes[i];
        replaceText(newNode);
      }
    }
  });
});
observer.observe(document.body, {
  childList: true,
  subtree: true
});