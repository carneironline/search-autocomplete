export default class SearchAutocomplete {
    constructor() {
      this.nameCpt = 'search-autocomplete';
      
      this.findElements ()
    }
  
    findElements () {
      const elements = document.querySelectorAll (`.${this.nameCpt}`);
  
      elements.forEach (elRoot => {
        this.setTitle (elRoot);
        this.setEventKey (elRoot);
      });
    }

    setTitle (elRoot) {
        const el = elRoot.getElementsByClassName (`${this.nameCpt}-title`)[0];
        const title = el.dataset.saTitle;

        if (title) el.innerHTML = title;
    }

    setEventKey (elRoot) {
        const elInput = elRoot.getElementsByClassName (`${this.nameCpt}-input`)[0];
        const type = elRoot.dataset.saType;
        let wait = false;

        elInput.addEventListener ('keyup', function (evt) {
            if (wait) return;

            wait = true;

            setTimeout (() => {
            const arrayList = this.checkValueOnArray (this, type, 'label');
            
            addItemsList(elRoot, arrayList);

            wait = false;
            }, 500);
        }.bind(this));
    }

    checkValueOnArray(element, type, nameKey){
        let searchArr = null;
        let newArr = [];
    
        switch(type) {
          case 'manufacturer': searchArr = this.mockData1(); break;
          case 'products': searchArr = this.mockData2(); break;
        }
    
        newArr = searchArr.filter(function(item){ console.log(element)
          if(item[nameKey].toLowerCase().includes(element.value.toLowerCase().trim()))
            return item;
        });
        
        return !element.value ? [] : newArr;
    }
  
    mockData1 () {
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
  }