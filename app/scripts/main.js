import Adblock from './adblock';
import SearchAutocomplete from './search-autocomplete';


global.searchAutocomplete = new SearchAutocomplete();

console.log(searchAutocomplete)

/*
(() => {
  const nameCpt = 'search-autocomplete';

  function findElements () {
    const elements = document.querySelectorAll (`.${nameCpt}`);

    elements.forEach (elRoot => {
      setTitle (elRoot);
      setEventKey (elRoot);
    });
  }

  function setTitle (elRoot) {
    const el = elRoot.getElementsByClassName (`${nameCpt}-title`)[0];
    const title = el.dataset.saTitle;

    if (title) el.innerHTML = title;
  }

  function setEventKey (elRoot) {
    const elInput = elRoot.getElementsByClassName (`${nameCpt}-input`)[0];
    const type = elRoot.dataset.saType;
    let wait = false;

    elInput.addEventListener ('keyup', function (evt) {
      if (wait) return;

      wait = true;

      setTimeout (() => {
        const arrayList = checkValueOnArray (this, type, 'label');
        
        addItemsList(elRoot, arrayList);

        wait = false;
      }, 500);
    });
  }

  function checkValueOnArray(element, type, nameKey){
    let searchArr = null;
    let newArr = [];

    switch(type) {
      case 'manufacturer': searchArr = mockData1(); break;
      case 'products': searchArr = mockData2(); break;
    }

    newArr = searchArr.filter(function(item){
      if(item[nameKey].toLowerCase().includes(element.value.toLowerCase().trim()))
        return item;
    });
    
    return !element.value ? [] : newArr;
  }

  function addItemsList(elRoot, list){

    const elList = elRoot.getElementsByClassName (`${nameCpt}-list`)[0];

    elList.innerHTML = '';

    list.forEach(obj => {
      elList.insertAdjacentHTML('beforeend', itemList(obj));
    })
  }

  function itemList(obj) {
    const item = `<li class="${nameCpt}-list-item" data-sa-pk="${obj.pk}">${obj.label}</li>`;
    return item;
  }

  function filterItem() {
    document.querySelectorAll(`${nameCpt}-list-item`).addEventListener('click', () => {
      console.log(this)
    })
  }

  function init () {
    findElements ();
  }

  init ();

  function mockData1 () {
    return [
      {label: 'Avon', pk: 20},
      {label: 'O Boticário', pk: 21},
      {label: 'Cosmetic Company', pk: 22},
      {label: 'Absolute', pk: 23},
      {label: 'Age Revitalize', pk: 24},
      {label: 'Controll Liss', pk: 25},
      {label: 'Evenways', pk: 26},
      {label: 'Exceptionnel', pk: 27},
      {label: 'Kera Hair', pk: 28},
      {label: 'Mint Clean', pk: 29},
      {label: 'Natural Arganoil', pk: 30},
      {label: 'Platinum Colors', pk: 31},
      {label: 'Plux', pk: 32},
      {label: 'S.O.S. Platinum', pk: 33},
      {label: 'Sealing Crystal', pk: 34},
      {label: 'Xlisses', pk: 35},
      {label: 'XS Carthame', pk: 36},
      {label: 'Artesanal', pk: 37},
      {label: 'Basall', pk: 38},
      {label: 'By Samia', pk: 39},
      {label: 'Derma Erase', pk: 40},
      {label: 'Derma Roller System', pk: 41},
      {label: 'Dra. Channel', pk: 42},
      {label: 'Gianinis', pk: 43},
    ];
  }

  function mockData2 () {
    return [
      {label: 'Batom', pk: 13},
      {label: 'Hidratante corporal', pk: 14},
      {label: 'Óleo de Amêndoas', pk: 15},
      {label: 'Gloss', pk: 16},
      {label: 'Água de colônia', pk: 17},
      {label: 'Removedor de Esmalte', pk: 18},
      {label: 'Esmalte Gel', pk: 19},
      {label: 'Condicionador', pk: 20},
      {label: 'Shampoo sem Sal', pk: 21},
      {label: 'Esfoliante corporal', pk: 22},
      {label: 'Esfoliante facial', pk: 23},
      {label: 'Gel Depilador', pk: 24},
      {label: 'Gel Alta Fixação', pk: 25},
      {label: 'Máscara Capilar', pk: 26},
      {label: 'Removedor de Maquiagem', pk: 27},
      {label: 'Sombra', pk: 28},
      {label: 'Desodorante Corporal', pk: 29},
      {label: 'Sabonete Esfoliante', pk: 30},
      {label: 'Shampoo Azul', pk: 31},
      {label: 'Demaquilante', pk: 32},
    ];
  }
}) ();
*/