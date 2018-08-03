var classGuides = {
  "classGuides": [
    {
      "name": "Death Knight",
      "color": "death-knight",
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
      "guideName": [
        "The Fel Hammer",
        "Mardum"
      ],
      "link": [
        "https://discord.gg/zGGkNGC",
        "https://discord.gg/b6AvnjM"
      ]
    },
    {
      "name": "Druid",
      "color": "druid",
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
      var formattedClassGuidesButton = HTMLclassGuidesButton.replace("%class-color%", classGuide.color).replace("%class-name%", classGuide.name);
      $(".class-guides-entry:last").append(formattedClassGuidesButton);
      for(let i=0; i < classGuide.guideName.length; i++) {
        var formattedClassGuidesLink = HTMLclassGuidesLink.replace("%discord-address%", classGuide['link'][i]).replace("%discord-name%", classGuide['guideName'][i]);
        $(".guide-entry:last").append(formattedClassGuidesLink);
      }
    });
  }
}

classGuides.display();
