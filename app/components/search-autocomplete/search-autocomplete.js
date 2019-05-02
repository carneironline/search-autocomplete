export default class SearchAutocomplete {
  constructor() {
    this.nameCpt = 'search-autocomplete';

    this.findElements();
  }

  findElements() {
    const elements = document.querySelectorAll(`.${this.nameCpt}`);

    elements.forEach(elRoot => {
      this.createTemplate(elRoot);
      this.setTitle(elRoot);

      if (!this.setEventSubmit(elRoot)) this.setEventKey(elRoot);
    });
  }

  setEventSubmit(elRoot) {
    const elButton = elRoot.getElementsByClassName(`${this.nameCpt}-button`)[0];
    const elInput = elRoot.getElementsByClassName(`${this.nameCpt}-input`)[0];
    const type = elRoot.dataset.saType;

    if (!elButton) return false;

    elInput.addEventListener('keyup', function(evt) {
      if(evt.keyCode === 13)
        elButton.click()
    })

    this.constructList(elRoot, elButton, elInput, 'click', type, 'label');

    return true;
  }

  setTitle(elRoot) {
    const elTitle = elRoot.getElementsByClassName(`${this.nameCpt}-title`)[0];
    const title = elTitle.dataset.saTitle;

    if (title) elTitle.innerHTML = title;
  }

  setEventKey(elRoot) {
    const elInput = elRoot.getElementsByClassName(`${this.nameCpt}-input`)[0];
    const type = elRoot.dataset.saType;

    this.constructList(elRoot, elInput, elInput, 'keyup', type, 'label');
  }

  constructList(elRoot, listerner, target, evtlisterner, type, propTarget) {
    let wait = false;

    listerner.addEventListener(
      evtlisterner,
      function(evt) {
        if (wait) return;

        wait = true;

        setTimeout(() => {
          const arrayList = this.checkValueOnArray(target, type, propTarget);

          this.addItemsList(elRoot, arrayList);

          wait = false;
        }, 500);
      }.bind(this)
    );
  }

  checkValueOnArray(element, type, nameKey) {
    let searchArr = null;
    let newArr = [];

    switch (type) {
      case 'manufacturer':
        searchArr = this.mockData1();
        break;
      case 'products':
        searchArr = this.mockData2();
        break;
    }

    newArr = searchArr.filter(function(item) {
      if (
        item[nameKey].toLowerCase().includes(element.value.toLowerCase().trim())
      )
        return item;
    });

    return !element.value ? [] : newArr;
  }

  addItemsList(elRoot, list) {
    const elList = elRoot.getElementsByClassName(`${this.nameCpt}-list`)[0];

    elList.innerHTML = '';

    list.forEach(obj => {
      elList.insertAdjacentHTML('beforeend', this.itemList(obj));
    });
  }

  itemList(obj) {
    const item = `<li class="${this.nameCpt}-list-item" data-sa-pk="${
      obj.pk
    }">${obj.label}</li>`;
    return item;
  }

  createTemplate(elRoot) {
    elRoot.innerHTML = this.template();
  }

  template() {
    return `
    <div class="search-autocomplete-title"></div>
    <div class="search-field">
        <input type="text" class="search-autocomplete-input" placeholder="Buscar por marca"/>
        <button class="btn-search search-autocomplete-button" type="submit">Buscar</button>
        <ul class="search-autocomplete-list"></ul>
    </div>
    `
  }

  mockData1() {
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

  mockData2() {
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
}
