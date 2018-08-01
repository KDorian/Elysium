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

var regulations = {
  "regulations": [
    {
      "title": "I. Misja Gildii",
      "description": [
        "Misją gildii jest zrzeszenie wszystkich Polaków na serwerze Shadowsong EU oraz Aszune EU celem wspólnej gry w miłej otoczce. Nie dyskryminujemy nikogo - każdy u nas znajdzie swoje miejsce i powinien swoją postawą i zachowaniem czynić z gildii możliwe jak najlepsze miejsce dla wszystkich! Priorytetem w Elysium jest wspólne raidowanie i uczestniczenie w różnych innych gildiowych eventach. Na raidach i eventach skupiamy się na możliwie na jak najwyższym progresie oraz efektywności i przede wszystkich na dobrej atmosferze w gildii, niezależnie od tego czy aktualnie idzie nam dobrze, czy źle."
      ]
    },
    {
      "title": "II. Komunikacja",
      "description": [
        "<strong>Chat gildiowy</strong> - Jest to oczywiście główne narzędzie komunikacji w grze. Pamiętajmy, że każdy członek gildii jest inny, a jest nas wielu, a więc wszyscy powinni pamiętać o elementarnych zasadach kultury osobistej oraz szanowaniu innych gildiowiczów. Nie warto też poruszać tematów drażliwych np. polityka, religia i wszelkich innych kwestii, które mogą skończyć się urażeniem kogoś z nas. Po prostu - szanujmy siebie nawzajem ;) Gramy razem, spędzamy wspólnie czas i tylko to się liczy.",
        "<strong>Discord</strong> - Drugie główne narzędzie komunikacyjne w Elysium. Każdy członek gildii powinien założyć konto na Discord. Można znaleźć tam rozmaite chaty tekstowe oraz głosowe o przeróżnej tematyce - nie tylko o WoW i sprawach gildii. Życie gildii toczy się również wokół innych gier sieciowych takich jak Overwatch. Można korzystać z niego bez ograniczeń. Osoba logująca się na Discord powinna użyć tego samego nicku jak nick main postaci w grze. Link z zaproszeniem na nasz serwer znajduje się w guild info w grze. Można też poprosić o niego oficera gildii."
      ]
    },
    {
      "title": "III. Raidy i inne eventy gildiowe",
      "description": [
        "<strong>Terminy raidów</strong> - Terminy nie są stałe - są elastyczne i są ustalane przez oficerów gildii na podstawie aktualnych potrzeb całego grona raidowego.",
        "<strong>Zapisy</strong> - Zapisy na raidy i inne eventy gildiowe są tworzone w kalendarzu WoW w grze. Na raid może zapisać się każdy, natomiast aby wziąć udział w danym raidzie, należy spełnić pewne wymagania.",
        "<strong>Wymagania</strong> - Przy każdym zapisie na dany raid lub event w opisie można znaleźć sprecyzowane wymagania odnośnie uczestników. Aby wziąć udział w danym raidzie należy te wymagania spełnić. Może być to na przykład określony poziom item levelu.",
        "<strong>Grupy</strong> - Grupy są elastyczne - są dobierane tak, aby przede wszystkim były jak najbardziej skuteczne, aby było możliwe zabicie jak największej ilości bossów. Dodatkowo zależy nam na tym, aby w raidach uczestniczyła jak największa ilość osób i żeby każdy miał okazję wziąć udział.",
        "<strong>Loot</strong> - Loot ustawiamy na personal, aby każdy miał jednakową szansę na wydropienie czegoś. Dodatkowo na początku raidu wyznaczamy jedną osobę, której każdy może oddać wydropione itemy, których nie potrzebuje. Wówczas dokonujemy rolla na te itemy - najwyższy roll wygrywa przy czym zachowania jest następująca kolejność priorytetu dystrybucji lootu - Main Spec >> Offspec >> Alt >> Alt Offspec >> inne. Przy rollujących altach oraz offspecach raid leader zastrzega sobie prawo do do zmiany powyżej kolejności i przydzielenia lootu tak, aby cała grupa skorzystała na tym najbardziej."
      ]
    }
  ],
  "display": function() {
    regulations.regulations.forEach(function(regulation) {
      $("#regulations").append(HTMLregulationStart);
      var formattedRegulationTitle = HTMLregulationTitle.replace("%title%", regulation.title);
      $(".regulations-entry:last").append(formattedRegulationTitle);
      for(let i=0; i < regulation.description.length; i++) {
        var formattedRegulationDescription = HTMLregulationDescription.replace("%description%", regulation['description'][i]);
        $(".description-entry:last").append(formattedRegulationDescription);
      }
    });
  }
}

regulations.display();
