let addSpace = require('./addSpace.js');
let removeSpace = require('./removeSpace.js');

// cartPlugin
const CartPlugin = function (options) {
  this.cart = options.cart;
  this.select = options.select;
  this.price = options.price;
  this.calc = options.calc;
  this.add = options.add;
  this.basket = {
    count: options.basket.count,
    price: options.basket.price
  };
  
  const price = document.querySelectorAll(options.price);
  const basketCount = document.querySelector(options.basket.count);
  const globThis = this;
  
  if (this.basket.price !== undefined) {
    var basketPrice = document.querySelector(this.basket.price);
  };
  
  // calc
  const calc = document.querySelectorAll(this.calc);
  
  for (let i = 0, len = calc.length; i < len; i++) {
    calc[i].children[0].classList.add('minus');
    calc[i].children[1].classList.add('val');
    calc[i].children[2].classList.add('plus');
    
    calc[i].addEventListener('click', function (evt) {
      const par = this.closest(globThis.cart);
      const minus = evt.target.closest('.minus');
      const val = this.querySelector('.val');
      const plus = evt.target.closest('.plus');
      const thisPrice = par.querySelector(globThis.price);
      const thisCurrentPrice = par.querySelector(globThis.select);
      const priceContainer = par.querySelector('.cart .cont .row-price .current-price');
      
      if (minus) {
        if (parseInt(val.textContent, 10) > 1) {
          val.textContent = parseInt(val.textContent, 10) - 1;
          thisPrice.textContent = addSpace(parseInt(removeSpace(thisPrice.textContent), 10) - parseInt(removeSpace(thisCurrentPrice.dataset.currentPrice), 10));
          
          if (parseInt(removeSpace(thisPrice.textContent), 10) < 1000) {
            priceContainer.classList.remove('fix1000');
          } else if (parseInt(removeSpace(thisPrice.textContent), 10) < 10000) {
            priceContainer.classList.add('fix1000');
            priceContainer.classList.remove('fix10000');
          };
        };
      };
      
      if (plus) {
        val.textContent = parseInt(val.textContent, 10) + 1;
        thisPrice.textContent = addSpace(parseInt(removeSpace(thisPrice.textContent), 10) + parseInt(removeSpace(thisCurrentPrice.dataset.currentPrice), 10));
        
        if (parseInt(removeSpace(thisPrice.textContent), 10) >= 1000 && parseInt(removeSpace(thisPrice.textContent), 10) < 10000) {
          priceContainer.classList.add('fix1000');
        } else if (parseInt(removeSpace(thisPrice.textContent), 10) >= 10000) {
          priceContainer.classList.remove('fix1000');
          priceContainer.classList.add('fix10000');
        };
      };
    });
  };
  
  // select
  const select = document.querySelectorAll(this.select);
  const oldPrice = document.querySelectorAll('.cart .cont .row-price .old-price .text .price');
  
  for (let i = 0, len = select.length; i < len; i++) {
    const selectItems = select[i].querySelectorAll('li');
    const selectLine = select[i].querySelector('p');
    
    for (let j = 0, jlen = selectItems.length; j < jlen; j++) {
      selectItems[j].textContent = selectItems[j].dataset.weight;
      
      if (!(selectItems[j].classList.contains('active'))) {
        selectItems[0].classList.add('active');
      };
      
      if (selectItems[j].classList.contains('active')) {
        select[i].dataset.currentPrice = selectItems[j].dataset.price;
        for (let y = 0, ylen = price.length; y < ylen; y++) {
          price[y].textContent = selectItems[j].dataset.price;
        };
        for (let y = 0, ylen = oldPrice.length; y < ylen; y++) {
          oldPrice[y].textContent = selectItems[j].dataset.oldPrice;
        };
        selectLine.textContent = selectItems[j].dataset.weight;
      };
    };
    
    select[i].addEventListener('click', function (evt) {
      const par = this.closest(globThis.cart);
      const item = evt.target.closest('li');
      const thisPrice = par.querySelector(globThis.price);
      const thisVal = par.querySelector('.val');
      const line = evt.target.closest('.cart .cont .row-calc .weight .weight-select p');
      const lineText = this.querySelector('p');
      const thisOldPrice = par.querySelector('.cart .cont .row-price .old-price .text .price');
      
      if (item) {
        if (!(item.classList.contains('active'))) {
          for (let j = 0, jlen = selectItems.length; j < jlen; j++) {
            selectItems[j].classList.remove('active');
          };
          item.classList.add('active');
          this.dataset.currentPrice = item.dataset.price;
          thisPrice.textContent = item.dataset.price;
          thisVal.textContent = 1;
        };
        lineText.textContent = item.dataset.weight;
        thisOldPrice.textContent = item.dataset.oldPrice;
        this.classList.remove('open');
      };
      
      if (line) {
        this.classList.toggle('open');
      };
    });
  };
  
  // add
  const add = document.querySelectorAll(this.add);
  
  for (let i = 0, len = add.length; i < len; i++) {
    add[i].addEventListener('click', function () {
      const par = this.closest(globThis.cart);
      const thisCount = par.querySelector('.val');
      const thisPrice = par.querySelector(globThis.price);
      
      basketCount.textContent = parseInt(basketCount.textContent, 10) + parseInt(thisCount.textContent, 10);
      
      if (globThis.basket.price !== undefined) {
        basketPrice.textContent = addSpace(parseInt(removeSpace(basketPrice.textContent), 10) + parseInt(removeSpace(thisPrice.textContent), 10));
      };
    });
  };
};

module.exports = CartPlugin;