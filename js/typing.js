document.addEventListener('DOMContentLoaded', () => {
  var typeString = [{
    type: '<span class="price">price</span>',
    name: 'Flask of the Titans'
  }, {
    type: '<span class="price">price</span>',
    name: 'Elemental Earth'
  }, {
    type: '<span class="price">price</span>',
    name: 'Greater Fire Protection Potion'
  }, {
    type: '<span class="price">price</span>',
    name: 'Black Lotus'
  }, {
    type: '<span class="price">price</span>',
    name: 'Greater Arcane Elixir'
  }, {
    type: '<span class="price">price</span>',
    name: 'Greater Arcane Elixir'
  }, {
    type: '<span class="price">price</span>',
    name: 'Black Dragonscale'
  }, {
    type: '<span class="price">price</span>',
    name: 'Mithril Ore'
  }, {
    type: '<span class="price">price</span>',
    name: 'Dreamfoil'
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
    name: 'Major Mana Potion'
  }, {
    type: '<span class="price">price</span>',
    name: 'Major Healing Potion'
  }, {
    type: '<span class="price">price</span>',
    name: 'Edgemaster\'s Handguards'
  }, {
    type: '<span class="craftingprice">craftingprice</span>',
    name: 'Spellpower Goggles Xtreme'
  }, {
    type: '<span class="craftingprice">craftingprice</span>',
    name: 'Flask of Supreme Power'
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

