

const togSci = document.querySelector('.sci-more');
const togSci1 = document.querySelector('.sci-more1');

const scient = document.querySelector('.scientific-1');
const scient1 = document.querySelector('.scientific-2');


togSci.addEventListener('click', ()=> {
    scient.style.display = 'none';
    scient1.style.display = 'block';
});

togSci1.addEventListener('click', ()=> {
    scient1.style.display = 'none';
    scient.style.display = 'block';
});


