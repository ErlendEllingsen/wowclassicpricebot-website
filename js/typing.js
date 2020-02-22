document.addEventListener('DOMContentLoaded', () => {
  var typeString = [{
    type: '<span class="price">price</span>',
    name: 'Flask of titans'
  }, {
    type: '<span class="price">price</span>',
    name: 'Elemental earth'
  }, {
    type: '<span class="price">price</span>',
    name: 'Greater Fire Protection Potion'
  }, {
    type: '<span class="price">price</span>',
    name: 'Black lotus'
  }, {
    type: '<span class="price">price</span>',
    name: 'Greater Arcane Elixir'
  }, {
    type: '<span class="price">price</span>',
    name: 'Greater Arcane Elixir'
  }, {
    type: '<span class="craftingprice">craftingprice</span>',
    name: 'Elixir of Shadow Power'
  },
  {
    type: '<span class="craftingprice">craftingprice</span>',
    name: 'Lionheart Helm'
  },
  {
    type: '<span class="craftingprice">craftingprice</span>',
    name: 'Hide of the Wild'
  },
  {
    type: '<span class="craftingprice">craftingprice</span>',
    name: 'Corehound Belt'
  },
  {
    type: '<span class="craftingprice">craftingprice</span>',
    name: 'Major mana potion'
  }, {
    type: '<span class="price">price</span>',
    name: 'Major healing potion'
  }, {
    type: '<span class="price">price</span>',
    name: 'Edgemaster\'s Handguards'
  },
  ];
  var  i = 0;
  var count = Math.floor(Math.random()*typeString.length);
  var selectedText = '';
  var text = '';
  document.getElementById('demoCommand').innerHTML = typeString[0].type;
  (function type() {
    selectedText = typeString[count].name;
    text = selectedText.slice(0, ++i);
    document.getElementById('typing').innerHTML = text;
    if (text.length === selectedText.length) {
      // count++;
      count = Math.floor(Math.random()*typeString.length);
      i = 0;
      setTimeout(() => {
        document.getElementById('typing').innerHTML = '';
        document.getElementById('demoCommand').innerHTML = typeString[count].type;
        type();
      }, 1500);
    } else {
      setTimeout(type, 100);
    }
  }());

  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
});

