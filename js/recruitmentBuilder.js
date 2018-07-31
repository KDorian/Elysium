var recruitmentTable = {
  "recruitmentTable": [
    {
      "class": "Death Knight",
      "spec-name": [
        "Blood",
        "Frost",
        "Unholy",
        ""
      ],
      "spec-icon": [
        "images/recruitment/classes/dk-spec-blood.jpg",
        "images/recruitment/classes/dk-spec-frost.jpg",
        "images/recruitment/classes/dk-spec-unholy.jpg",
        ""
      ],
      "recruitment": [
        "open",
        "open",
        "open",
        ""
      ]
    },
    {
      "class": "Demon Hunter",
      "spec-name": [
        "Havoc",
        "Vengeance",
        "",
        ""
      ],
      "spec-icon": [
        "images/recruitment/classes/dh-spec-havoc.jpg",
        "images/recruitment/classes/dh-spec-vengeance.jpg",
        "",
        ""
      ],
      "recruitment": [
        "open",
        "open",
        "",
        ""
      ]
    },
    {
      "class": "Druid",
      "spec-name": [
        "Balance",
        "Feral",
        "Guardian",
        "Restoration"
      ],
      "spec-icon": [
        "images/recruitment/classes/druid-spec-balance.jpg",
        "images/recruitment/classes/druid-spec-feral.jpg",
        "images/recruitment/classes/druid-spec-guardian.jpg",
        "images/recruitment/classes/druid-spec-restoration.jpg"
      ],
      "recruitment": [
        "open",
        "open",
        "open",
        "open"
      ]
    },
    {
      "class": "Hunter",
      "spec-name": [
        "Beast Mastery",
        "Marksmanship",
        "Survival",
        ""
      ],
      "spec-icon": [
        "images/recruitment/classes/hunter-spec-beastmastery.jpg",
        "images/recruitment/classes/hunter-spec-marksmanship.jpg",
        "images/recruitment/classes/hunter-spec-survival.jpg",
        ""
      ],
      "recruitment": [
        "open",
        "open",
        "open",
        ""
      ]
    },
    {
      "class": "Mage",
      "spec-name": [
        "Arcane",
        "Fire",
        "Frost",
        ""
      ],
      "spec-icon": [
        "images/recruitment/classes/mage-spec-arcane.jpg",
        "images/recruitment/classes/mage-spec-fire.jpg",
        "images/recruitment/classes/mage-spec-frost.jpg",
        ""
      ],
      "recruitment": [
        "open",
        "open",
        "open",
        ""
      ]
    },
    {
      "class": "Monk",
      "spec-name": [
        "Brewmaster",
        "Mistweaver",
        "Windwalker",
        ""
      ],
      "spec-icon": [
        "images/recruitment/classes/monk-spec-brewmaster.jpg",
        "images/recruitment/classes/monk-spec-mistweaver.jpg",
        "images/recruitment/classes/monk-spec-windwalker.jpg",
        ""
      ],
      "recruitment": [
        "open",
        "open",
        "open",
        ""
      ]
    },
    {
      "class": "Paladin",
      "spec-name": [
        "Holy",
        "Protection",
        "Retribution",
        ""
      ],
      "spec-icon": [
        "images/recruitment/classes/paladin-spec-holy.jpg",
        "images/recruitment/classes/paladin-spec-protection.jpg",
        "images/recruitment/classes/paladin-spec-retribution.jpg",
        ""
      ],
      "recruitment": [
        "open",
        "open",
        "open",
        ""
      ]
    },
    {
      "class": "Priest",
      "spec-name": [
        "Discipline",
        "Holy",
        "Shadow",
        ""
      ],
      "spec-icon": [
        "images/recruitment/classes/priest-spec-discipline.jpg",
        "images/recruitment/classes/priest-spec-holy.jpg",
        "images/recruitment/classes/priest-spec-shadow.jpg",
        ""
      ],
      "recruitment": [
        "open",
        "open",
        "open",
        ""
      ]
    },
    {
      "class": "Rogue",
      "spec-name": [
        "Assassination",
        "Outlaw",
        "Subtlety",
        ""
      ],
      "spec-icon": [
        "images/recruitment/classes/rogue-spec-assassination.jpg",
        "images/recruitment/classes/rogue-spec-outlaw.jpg",
        "images/recruitment/classes/rogue-spec-subtlety.jpg",
        ""
      ],
      "recruitment": [
        "open",
        "open",
        "open",
        ""
      ]
    },
    {
      "class": "Shaman",
      "spec-name": [
        "Elemental",
        "Enhancement",
        "Restoration",
        ""
      ],
      "spec-icon": [
        "images/recruitment/classes/shaman-spec-elemental.jpg",
        "images/recruitment/classes/shaman-spec-enhancement.jpg",
        "images/recruitment/classes/shaman-spec-restoration.jpg",
        ""
      ],
      "recruitment": [
        "open",
        "open",
        "open",
        ""
      ]
    },
    {
      "class": "Warlock",
      "spec-name": [
        "Affliction",
        "Demonology",
        "Destruction",
        ""
      ],
      "spec-icon": [
        "images/recruitment/classes/warlock-spec-affliction.jpg",
        "images/recruitment/classes/warlock-spec-demonology.jpg",
        "images/recruitment/classes/warlock-spec-destruction.jpg",
        ""
      ],
      "recruitment": [
        "open",
        "open",
        "open",
        ""
      ]
    },
    {
      "class": "Warrior",
      "spec-name": [
        "Arms",
        "Fury",
        "Protection",
        ""
      ],
      "spec-icon": [
        "images/recruitment/classes/warrior-spec-arms.jpg",
        "images/recruitment/classes/warrior-spec-fury.jpg",
        "images/recruitment/classes/warrior-spec-protection.jpg",
        ""
      ],
      "recruitment": [
        "open",
        "open",
        "open",
        ""
      ]
    }
  ],
  "display": function() {
    $("#recruitmentTable").append(HTMLrecruitmentTableStart);
    for(let i=0; i < 12; i++) {
      var formattedRecruitmentTableClass = HTMLrecruitmentTableClass.replace("%class-name%", recruitmentTable['recruitmentTable'][i]['class']);
      $(".recruitment-table-entry:last").append(formattedRecruitmentTableClass);
      for(let j=0; j < 4; j++) {
        var formattedRecruitmentTableSpec = HTMLrecruitmentTableSpec.replace("%recruitment-status%", recruitmentTable['recruitmentTable'][i]['recruitment'][j]).replace("%spec-image%", recruitmentTable['recruitmentTable'][i]['spec-icon'][j]).replace("%spec-name%", recruitmentTable['recruitmentTable'][i]['spec-name'][j]).replace("%spec-alt%", recruitmentTable['recruitmentTable'][i]['spec-name'][j]);
        $(".class-spec-entry:last").append(formattedRecruitmentTableSpec);
      }

    }
  }
};

recruitmentTable.display();

var recruitmentContacts = {
  "recruitmentContacts": [
    {
      "name": "Sargone",
      "battleNetTag": "Sargone#2614"
    },
    {
      "name": "Degnar",
      "battleNetTag": "Degnar#2681"
    },
    {
      "name": "Eothelis",
      "battleNetTag": "Deyneris#1348"
    },
    {
      "name": "Mytsi",
      "battleNetTag": "Magmus#2759"
    },
    {
      "name": "Takanuva",
      "battleNetTag": "Takanuva#2604"
    },
    {
      "name": "Tyrandull",
      "battleNetTag": "Dullahan#2331"
    },
  ],
  "display": function() {

    recruitmentContacts.recruitmentContacts.forEach(function(recruitmentContact) {
      $("#battletag").append(HTMLrecruitmentContactStart);
      var formattedRecruitmentContact = HTMLrecruitmentContact.replace("%name%", recruitmentContact.name).replace("%battle-net-tag%", recruitmentContact.battleNetTag);
      $(".recruitment-contact-entry:last").append(formattedRecruitmentContact);
    });
  }
};

recruitmentContacts.display();
