var search = function(event){
    var searchValue = document.querySelector('.search-bar').value;
    window.location = "https://www.google.nl/?gws_rd=ssl#q=" + searchValue;
}

document
  .querySelector('.btn-search')
  .addEventListener('click', search);

var guess = function(){
    window.location = "cat-treats.jpg";
}

document
  .querySelector('.btn-guess')
  .addEventListener('click', guess);
