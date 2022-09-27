document.addEventListener('DOMContentLoaded', () => {
  var typeString = [{
    type: '<span class="price">/price</span>',
    name: 'Elixir of Expertise'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Elemental Earth'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Greater Fire Protection Potion'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Twilight Opal'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Greater Arcane Elixir'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Greater Arcane Elixir'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Infinite Dust'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Cobalt Ore'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Nightmare Vine'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Runecloth'
  }, {
    type: '<span class="craftingprice">/craftingprice</span>',
    name: 'Elixir of Shadow Power'
  }, {
  type: '<span class="craftingprice">/craftingprice</span>',
  name: 'Free Action Potion'
},{
  type: '<span class="craftingprice">/craftingprice</span>',
  name: 'Fire Oil'
}, {
type: '<span class="craftingprice">/craftingprice</span>',
name: 'Enchanted Leather'
},
  {
    type: '<span class="craftingprice">/craftingprice</span>',
    name: 'Lionheart Helm'
  },
  {
    type: '<span class="craftingprice">/craftingprice</span>',
    name: 'Hide of the Wild'
  },
  {
    type: '<span class="craftingprice">/craftingprice</span>',
    name: 'Corehound Belt'
  },
  {
    type: '<span class="craftingprice">/craftingprice</span>',
    name: 'Major Mana Potion'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Major Healing Potion'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Mooncloth'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Five of Beasts'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Arena Wristguards'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Dark Iron Bar'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Golden Pearl'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Volatile Rum'
  }, {
    type: '<span class="price">/price</span>',
    name: 'Edgemaster\'s Handguards'
  }, {
    type: '<span class="craftingprice">/craftingprice</span>',
    name: 'Spellpower Goggles Xtreme'
  }, {
    type: '<span class="craftingprice">/craftingprice</span>',
    name: 'Black Amnesty'
  },{
    type: '<span class="craftingprice">/craftingprice</span>',
    name: 'Mithril Shield Spike'
  },{
    type: '<span class="craftingprice">/craftingprice</span>',
    name: 'Arcanite Rod'
  },{
    type: '<span class="craftingprice">/craftingprice</span>',
    name: 'Beasts Deck'
  }, {
      type: '<span class="craftingprice">/craftingprice</span>',
      name: 'Field Repair Bot 74A'
    }, {
    type: '<span class="craftingprice">/craftingprice</span>',
    name: 'Felcloth Bag'
  }, {
    type: '<span class="craftingprice">/craftingprice</span>',
    name: 'Flask of Supreme Power'
  }, {
    type: '<span class="craftingprice">/craftingprice</span>',
    name: 'Annihilator'
  }, {
    type: '<span class="craftingprice">/craftingprice</span>',
    name: 'Robe of the Archmage'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Enchant Weapon - Spell Power'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Enchant Weapon - Winter\'s Might'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Enchant Weapon - Healing Power'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Enchant Gloves - Frost Power'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Enchant Gloves - Fire Power'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Enchant Cloak - Greater Fire Resistance'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Enchant Cloak - Subtlety'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Enchant Cloak - Stealth'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Enchant Cloak - Dodge'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Enchant 2H Weapon - Major Intellect'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Enchant Weapon - Icy Chill'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Enchant Bracer - Healing Power'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Enchant 2H Weapon - Agility'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Enchant Weapon - Minor Striking'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Enchant Cloak - Lesser Shadow Resistance'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Runed Golden Rod'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Runed Silver Rod'
  },
  {
    type: '<span class="enchprice">/enchantingprice</span>',
    name: 'Greater Magic Wand'
  }
  ];
  var  i = 0;
  var count = Math.floor(Math.random()*typeString.length);
  document.getElementById('demoCommand').innerHTML = typeString[count].type;
  var selectedText = '';
  var text = '';
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

