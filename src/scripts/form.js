import { changeClassOfCards, getClassOfActiveItem, createArticleHTML } from './utils.js';

const addBtn = document.querySelector('.button--add');
const form = document.querySelector('.form');

addBtn.addEventListener('click', () => {
  addBtn.classList.add('hidden');
  form.classList.remove('hidden');
});

const cancelBtn = document.querySelector('.button--cancel');

cancelBtn.addEventListener('click', () => {
  addBtn.classList.remove('hidden');
  form.classList.add('hidden');
  inputTitle.value = '';
  inputImg.value = '';
  textAreaDescr.value = '';
});

const createlBtn = document.querySelector('.button--create');

const inputTitle = document.querySelector('.form__input--title');
const inputImg = document.querySelector('.form__input--img');
const textAreaDescr = document.querySelector('.form__textarea--descr');

const articles__content = document.querySelector('.articles__content');

createlBtn.addEventListener('click', () => {
  const card = { title: inputTitle.value, img: inputImg.value, descr: textAreaDescr.value };
  inputTitle.value = '';
  inputImg.value = '';
  textAreaDescr.value = '';

  articles__content.innerHTML = createArticleHTML(card) + articles__content.innerHTML;

  changeClassOfCards(getClassOfActiveItem());

  addBtn.classList.remove('hidden');
  form.classList.add('hidden');
});