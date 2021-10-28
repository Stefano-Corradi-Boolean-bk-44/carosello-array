
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const itemsEl = document.querySelector('.items');
const thumbsEl = document.querySelector('.thumbs');
let counter = 0;

for(let i = 0; i < items.length; i++){

    // creo tutti gli items
    const item = document.createElement('div');
    const html =
    `
    <img src="${items[i]}" alt="">
    <div class="text">
        <h2>${title[i]}</h2>
        <p>${text[i]}</p>
    </div>
    `;
    item.className = 'item';
    item.innerHTML = html;
    

    itemsEl.append(item);

    // creo tutte le thumbs
    const thumb = document.createElement('div');
    thumb.innerHTML = `<img src="${items[i]}" alt="">`;
    thumb.className = 'thumb';

    thumbsEl.append(thumb);

    // faccio diventare attivo l'item con indice = counter
    if(i === counter) {
        item.classList.add('active');
        thumb.classList.add('active');
    }

}

// metto tutti gli item in un array
const itemsCollection = document.getElementsByClassName('item');
// metto tutte le thumb in un array
const thumbsCollection = document.getElementsByClassName('thumb');


const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


prev.addEventListener('click',function(){
    // rimuovo la classe active dall'elemento con indice counter
    itemsCollection[counter].classList.remove('active');
    thumbsCollection[counter].classList.remove('active');
    counter--;
    // se è inferiore a 0 deve  prendere l'ultimo elemento
    if(counter < 0) counter = items.length - 1;
    console.log(counter);
    // aggiungo active al nuovo elemento con indice counter
    itemsCollection[counter].classList.add('active');
    thumbsCollection[counter].classList.add('active');
    
})

next.addEventListener('click',function(){
    // rimuovo la classe active dall'elemento con indice counter
    itemsCollection[counter].classList.remove('active');
    thumbsCollection[counter].classList.remove('active');
    counter++;
    // se è uguale alla lunghezza dell'array prendo il primo elemento
    if(counter === items.length) counter = 0;
    console.log(counter);
    // aggiungo active al nuovo elemento con indice counter
    itemsCollection[counter].classList.add('active');
    thumbsCollection[counter].classList.add('active');
})