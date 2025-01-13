const container = document.querySelector('.feedback');

const cards = document.querySelectorAll('.cards');

const submit = document.querySelector('#submit');

let rating = '';

cards.forEach((ele) => {
  
  ele.addEventListener('click', (element) => {
    
    removeActive();

    ele.classList.add('active');

    rating = element.target.id;
    
  });
  
});

submit.addEventListener('click', () => {
  
  if (rating !== '') {
    
    container.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <strong>Feedback: ${rating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
    rating = '';
    
  } 
  else {
    
    alert('Please select rating');
    
  }
});
function removeActive() {
  
  cards.forEach((ele) => {
    
    ele.classList.remove('active');
    
  });
  
}
