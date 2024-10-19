
window.onload = () => {
  let count = 1;
  let saved = localStorage.getItem('reviewsCount');

  if(saved){
    count = parseInt(saved) + 1
  }

  localStorage.setItem('reviewsCount', count);
};
