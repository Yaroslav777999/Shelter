"use strict"

// Burger 
const navBurger = document.querySelector('.nav__burger');
const headerLogo = document.querySelector('.header__logo');
const headerNav = document.querySelector('.header__nav');
const navLink = document.querySelectorAll('.nav__link');
const body = document.querySelector('body');

if (navBurger) {
   navBurger.addEventListener('click', function (e) {
      headerLogo.classList.toggle('_active');
      navBurger.classList.toggle('_active');
      headerNav.classList.toggle('_active');
      body.classList.toggle('lock');
   }
   )
}

headerNav.addEventListener('click', (e) => {
   if (e.target.classList.contains('header__nav')) {
      headerLogo.classList.remove('_active');
      navBurger.classList.remove('_active');
      headerNav.classList.remove('_active');
      body.classList.remove('lock');
   }
})

navLink.forEach(item => {
   item.addEventListener('click', () => {
      headerLogo.classList.remove('_active');
      navBurger.classList.remove('_active');
      headerNav.classList.remove('_active');
      body.classList.remove('lock');
   })
})

// Slidrer
const pets = [
   {
      "name": "Jennifer",
      "img": "./assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
   },
   {
      "name": "Sophia",
      "img": "./assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
   },
   {
      "name": "Woody",
      "img": "./assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
   },
   {
      "name": "Scarlett",
      "img": "./assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
   },
   {
      "name": "Katrine",
      "img": "./assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
   },
   {
      "name": "Timmy",
      "img": "./assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
   },
   {
      "name": "Freddie",
      "img": "./assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
   },
   {
      "name": "Charly",
      "img": "./assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
   }
];

let sliderCards = document.querySelector('.slider__cards');
let sliderLeftBtn = document.querySelector('.left-btn');
let sliderRightBtn = document.querySelector('.right-btn');

let widthWin = window.innerWidth;
let amountCard;
let leftX = 0;
let leftShift;

if (widthWin >= 1280) {
   amountCard = 3;
   leftShift = 1080;
   leftX = -25 * leftShift;
}
else if (widthWin < 1280 && widthWin >= 768) {
   amountCard = 2;
   leftShift = 620;
   leftX = -25 * leftShift;
} else if (widthWin < 768) {
   amountCard = 1;
   leftShift = 300;
   leftX = -25 * leftShift;
}

//console.log("Количество слайдов=", amountCard);

function getRandom(a, b) {
   return Math.floor(Math.random() * (b - a + 1) + a);
}
console.log(getRandom(0, 7))

let cardArr = [];

function cardLoad() {
   let j = getRandom(0, 7);

   while (cardArr.slice(-2 * amountCard).includes(j)) {
      j = getRandom(0, 7);
   }
   //if (cardArr.length == 0) {
   //   j = 4;
   //} else if (cardArr.lengt == 1) {
   //   j = 0;
   //} else if (cardArr.lengt == 2) {
   //   j = 2;
   //}
   cardArr.push(j);


   let petCard = `<div class="slider__card" onclick="openModal(${j})">
   <img class="card__img" src="${pets[j].img}" alt="${pets[j].name}">
   <p class="card__petsname">${pets[j].name}</p>
   <submit class="container__submit" data-modal="${j}">Learn more</submit>
   </div>`;

   sliderCards.innerHTML += petCard;
}

function changeLeftCards() {
   let viewArr = sliderCards.innerHTML;
   for (let i = 0; i < amountCard; i++) {
      let j = getRandom(0, 7);
      while (cardArr.slice(2 * amountCard).includes(j)) {
         j = getRandom(0, 7);
      }
      let petCard = `<div class="slider__card" onclick="openModal(${j})">
     <img class="card__img" src="${pets[j].img}" alt="${pets[j].name}">
     <p class="card__petsname">${pets[j].name}</p>
     <submit class="container__submit" data-modal="${j}">Learn more</submit>
     </div>`;
      viewArr = petCard + viewArr;
      cardArr.push(j);
   }
   console.log("cardArr", cardArr);
   sliderCards.innerHTML = viewArr;
}

document.addEventListener('DOMContentLoaded', () => {
   leftX = leftX - leftShift;
   sliderCards.style.left = `${leftX}px`;
   for (let i = 0; i < 50 * amountCard; i++) {
      cardLoad();
   }
})

sliderLeftBtn.addEventListener('click', () => {
   //changeLeftCards();
   // console.log(leftX);
   leftX = leftX + leftShift;
   // console.log(leftX)
   sliderCards.style.left = `${leftX}px`;
})

sliderRightBtn.addEventListener('click', () => {
   leftX = leftX - leftShift;
   sliderCards.style.left = `${leftX}px`;
})

// Modal window //

let modal = document.querySelector('.modal');
let modalWindows = document.querySelectorAll('.modal-window');
let closeBtn = document.querySelector('.modal-close');
let petsBtn = document.querySelector('.slider__submit');

function openModal(j) {
   modal.classList.add('active');

   let modalWin = `<div class="modal-window">
   <div class="modal-close" onclick="closeModal()">
      <span class="first-line"></span>
      <span class="second-line"></span>
   </div>
   <div class="modal-window__image">
      <img src="${pets[j].img}" alt="${pets[j].name}" class="modal-window__image-img">
   </div>
   <div class="modal-window__content">
      <div class="modal-window__content-title">
         <h3 class="modal-window__content-title-name">${pets[j].name}</h3>
         <h4 class="modal-window__content-title-breed">${pets[j].type} - ${pets[j].breed}</р>
      </div>
      <h5 class="modal-window__content-description">${pets[j].description}</h5>
      <ul class="modal-window__content-specifications">
         <li class="modal-window__content-specifications-item"><span>Age:</span> ${pets[j].age}</li>
         <li class="modal-window__content-specifications-item"><span>Inoculations:</span> ${pets[j].inoculations}</li>
         <li class="modal-window__content-specifications-item"><span>Diseases:</span> ${pets[j].diseases}</li>
         <li class="modal-window__content-specifications-item"><span>Parasites:</span> ${pets[j].parasites}</li>
      </ul>
      </div>
      </div>`;

   modal.innerHTML = modalWin;
   document.body.style.overflow = 'hidden';
   document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
   console.log("Отступ", document.body.style.paddingRight);

   modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
         closeModal();
      }
   })
}

function closeModal() {
   modal.innerHTML = '';
   modal.classList.remove('active');
   document.body.style.overflow = 'visible';
   document.body.style.marginRight = '';

}
