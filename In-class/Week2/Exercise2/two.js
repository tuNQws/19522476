var elements = document.getElementsByClassName('pageWhite');
for (var i in elements) {
  if (elements.hasOwnProperty(i)) {
    elements[i].className = 'pageGray';
  }
}
