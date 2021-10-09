const listItems = document.querySelectorAll('li');
const descHeading = document.querySelector('.animal-description h2');
const descPara = document.querySelector('.animal-description p');

listItems.forEach(function(item) {
  item.addEventListener('mouseup', handleSelection);
  item.addEventListener('keyup', function(e) {
    if(e.key === 'Enter') {
      handleSelection(e);
    }
  });
})

function handleSelection(e) {
  const heading = e.target.textContent;
  const description = e.target.getAttribute('data-description');
  descHeading.textContent = heading;
  descPara.textContent = description;
}