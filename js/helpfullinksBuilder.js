var classGuides = {
  "classGuides": [
    {
      "name": "Death Knight",
      "color": "death-knight",
      "icon": "images/recruitment/classes/dk-icon.png",
      "alt": "Class icon of death knights",
      "guideName": [
        "Acherus"
      ],
      "link": [
        "https://discord.gg/acherus"
      ]
    },
    {
      "name": "Demon Hunter",
      "color": "demon-hunter",
      "icon": "images/recruitment/classes/dh-icon.png",
      "alt": "Class icon of demon hunters",
      "guideName": [
        "The Fel Hammer"
      ],
      "link": [
        "https://discord.gg/zGGkNGC"
      ]
    },
    {
      "name": "Druid",
      "color": "druid",
      "icon": "images/recruitment/classes/druid-icon.png",
      "alt": "Class icon of druids",
      "guideName": [
        "Dreamgrove"
      ],
      "link": [
        "https://discord.gg/0dWu0WkuetF87H9H"
      ]
    },
    {
      "name": "Hunter",
      "color": "hunter",
      "icon": "images/recruitment/classes/hunter-icon.png",
      "alt": "Class icon of hunters",
      "guideName": [
        "Trueshot Lodge",
        "Warcraft Hunter's Union"
      ],
      "link": [
        "https://discord.gg/yqer4BX",
        "https://discord.gg/G3tYdTG"
      ]
    },
    {
      "name": "Mage",
      "color": "mage",
      "icon": "images/recruitment/classes/mage-icon.png",
      "alt": "Class icon of mages",
      "guideName": [
        "Hall of the Guardians"
      ],
      "link": [
        "https://discord.gg/0gLMHikX2aZ23VdA"
      ]
    },
    {
      "name": "Monk",
      "color": "monk",
      "icon": "images/recruitment/classes/monk-icon.png",
      "alt": "Class icon of monks",
      "guideName": [
        "PeakOfSerenity"
      ],
      "link": [
        "https://discord.gg/0dkfBMAxzTkWj21F"
      ]
    },
    {
      "name": "Paladin",
      "color": "paladin",
      "icon": "images/recruitment/classes/paladin-icon.png",
      "alt": "Class icon of paladins",
      "guideName": [
        "Hammer of Wrath"
      ],
      "link": [
        "https://discord.gg/0dvRDgpa5xZHFfnD"
      ]
    },
    {
      "name": "Priest",
      "color": "priest",
      "icon": "images/recruitment/classes/priest-icon.png",
      "alt": "Class icon of priests",
      "guideName": [
        "Warcraft Priests",
        "Netherlight Temple",
        "Focused Will"
      ],
      "link": [
        "https://discord.gg/WarcraftPriests",
        "https://discord.gg/nExdySC",
        "https://discord.gg/focusedwill"
      ]
    },
    {
      "name": "Rogue",
      "color": "rogue",
      "icon": "images/recruitment/classes/rogue-icon.png",
      "alt": "Class icon of rogues",
      "guideName": [
        "Ravenholdt"
      ],
      "link": [
        "https://discord.gg/0h08tydxoNhfDVZf"
      ]
    },
    {
      "name": "Shaman",
      "color": "shaman",
      "icon": "images/recruitment/classes/shaman-icon.png",
      "alt": "Class icon of shamans",
      "guideName": [
        "Earthshrine",
        "Ancestral Guidance"
      ],
      "link": [
        "https://discord.gg/0VcupJEQX0HuE5HH",
        "https://discord.gg/AcTek6e"
      ]
    },
    {
      "name": "Warlock",
      "color": "warlock",
      "icon": "images/recruitment/classes/warlock-icon.png",
      "alt": "Class icon of warlocks",
      "guideName": [
        "Council of the Black Harvest"
      ],
      "link": [
        "https://discord.gg/0onXDymd9Wpc2CEu"
      ]
    },
    {
      "name": "Warrior",
      "color": "warrior",
      "icon": "images/recruitment/classes/warrior-icon.png",
      "alt": "Class icon of warriors",
      "guideName": [
        "Skyhold"
      ],
      "link": [
        "https://discord.gg/0pYY7932lTH4FHW6"
      ]
    }
  ],
  "display": function() {
    classGuides.classGuides.forEach(function(classGuide) {
      $("#classGuides").append(HTMLclassGuidesStart);
      var formattedClassGuidesButton = HTMLclassGuidesButton.replace("%class-name%", classGuide.name).replace("%class-icon%", classGuide.icon).replace("%class-alt%", classGuide.alt);
      $(".class-guides-entry:last").append(formattedClassGuidesButton);
      for(let i=0; i < classGuide.guideName.length; i++) {
        var formattedClassGuidesLink = HTMLclassGuidesLink.replace("%class-color%", classGuide.color).replace("%discord-address%", classGuide['link'][i]).replace("%discord-name%", classGuide['guideName'][i]);
        $(".guide-entry:last").append(formattedClassGuidesLink);
      }
    });
  }
};

classGuides.display();

var websites = {
  "websites": [
    {
      "name": "Icy Veins",
      "description": "Poradniki klasowe",
      "author": "Sargone",
      "address": "https://www.icy-veins.com"
    },
    {
      "name": "Noxxic",
      "description": "Poradniki klasowe",
      "author": "Sargone",
      "address": "https://www.noxxic.com"
    }
  ],
  "display": function() {
      $("#websites").append(HTMLwebsitesStart);
      websites.websites.forEach(function(website) {
      var formattedWebsitesName = HTMLwebsitesName.replace("%website-name%", website.name);
      var formattedWebsitesDescription = HTMLwebsitesDescription.replace("%website-description%", website.description);
      var formattedWebsitesAuthor = HTMLwebsitesAuthor.replace("%description-author%", website.author);
      var formattedWebsitesAddress = HTMLwebsitesAddress.replace("%website-address%", website.address);
      $(".website-entry:last").append(formattedWebsitesName + formattedWebsitesDescription + formattedWebsitesAuthor + formattedWebsitesAddress);
    });
  }
};

websites.display();

var addons = {
  "addons": [
    {
      "name": "ELV UI",
      "description": "Gotowy zestaw prostego i intuicyjnego UI dla raidera.",
      "author": "Sargone",
      "address": "https://www.tukui.org/welcome.php"
    },
  ],
  "display": function() {
      $("#addons").append(HTMLaddonsStart);
      addons.addons.forEach(function(addon) {
      var formattedAddonsName = HTMLaddonsName.replace("%addon-name%", addon.name);
      var formattedAddonsDescription = HTMLaddonsDescription.replace("%addon-description%", addon.description);
      var formattedAddonsAuthor = HTMLaddonsAuthor.replace("%description-author%", addon.author);
      var formattedAddonsAddress = HTMLaddonsAddress.replace("%addon-address%", addon.address);
      $(".addon-entry:last").append(formattedAddonsName + formattedAddonsDescription + formattedAddonsAuthor + formattedAddonsAddress);
    });
  }
};

addons.display();
