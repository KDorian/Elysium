var meetUs = {
  "meetUs": [
    {
      "name": "Sargone",
      "image": "images/meet-us/officers/Sargone.png",
      "title": "Guildmaster",
    },
    {
      "title": "Officer",
      "image": "images/meet-us/officers/Degnar.png",
      "name": "Degnar",
    },
    {
      "title": "Officer",
      "image": "images/meet-us/officers/500x500.png",
      "name": "Eothelis",
    },
    {
      "title": "Officer",
      "image": "images/meet-us/officers/Mytsi.png",
      "name": "Mysti",
    },
    {
      "title": "Officer",
      "image": "images/meet-us/officers/Takanuva.png",
      "name": "Takanuva",
    },
    {
      "title": "Officer",
      "image": "images/meet-us/officers/Tyrandull.png",
      "name": "Tyrandull",
    },
  ],
  "display": function() {
    var n = 0;
    for(let i=0; i < 2; i++) {
      $("#meetUs").append(HTMLmeetUsStart);
      for(let j=0; j < 3; j++) {
        var formattedMeetUsName = HTMLmeetUsName.replace("%meet-us-name%", meetUs['meetUs'][n]['name']);
        var formattedMeetUsPhoto = HTMLmeetUsPhoto.replace("%meet-us-photo-src%", meetUs['meetUs'][n]['image']).replace("%meet-us-photo-alt%", meetUs['meetUs'][n]['name']);
        var formattedMeetUsTitle = HTMLmeetUsTitle.replace("%meet-us-title%", meetUs['meetUs'][n]['title']);
        $(".meet-us-entry:last").append(formattedMeetUsName + formattedMeetUsPhoto + formattedMeetUsTitle);
        n++;
      };
    };
  }
};

meetUs.display();

var ranks = {
  "ranks": [
    {
      "title": "Guildmaster",
      "description": "Lider gildii.",
    },
    {
      "title": "Officer",
      "description": "Oficera gildii cechuje duża znajomość gry oraz klasy postaci, którą gra. Jego rolą jest wykorzystywanie tej wiedzy po to, aby wzmocnić gildię jako całą społeczność poprzez dzielenie się patentami z innymi, wsparcie merytoryczne i nie tylko. Oficer posiada pełne uprawnienia po to, aby nadzorować funkcjonowanie gildii, zarządzać nią, rozwiązywać konflikty i sytuacje sporne. Dodatkowo oficer zajmuje sie organizowaniem i prowadzeniem eventów gildiowych i raidów oraz uczestniczy aktywne w życiu gildiowym.",
    },
    {
      "title": "Vanguard",
      "description": "Osoba zarówno z dużym stażem jak i olbrzymim doświadczeniem w grze. Vanguarda cechuje duża aktywność i frekwencja na raidach i innych eventach gildiowych, podczas których swoją postawą daje przykład innym i jest dla nich inspiracją. Vanguard może również być członkiem ze szczególnymi osiągnięciami na koncie i/lub pewnymi zasługami dla gildii.",
    },
    {
      "title": "Veteran",
      "description": "Osoba w gildii z dużym stażem i doświadczeniem. Veteran jest osobą aktywną i zaangażowaną w grę oraz życie gildiowe jednak nie koniecznie musi uczestniczyć w raidach i innych eventach gildiowych. Veteran jest rangą tego samego szczebla, co Raider i posiada podobne uprawnienia.",
    },
    {
      "title": "Raider",
      "description": "Osoba należąca do grona bardzo aktywnych członków gildii i często biorąca udział w organizowanych gildiowych raidach. Jest to ktoś z doświadczeniem, który swoją postawą podczas raidów pokazał, że można na niego liczyć. Raider jest trzonem zespołu raidowego i jego mocnym ogniwem.",
    },
    {
      "title": "Member",
      "description": "Po około miesiącu nowo przyjęty członek gildii otrzymuje awans do rangi Member - pełnoprawnego członka gildii.",
    },
    {
      "title": "Recruit",
      "description": "Osoba nowo przyjęta do gldii, nie posiada wiele uprawnień do czasu awansu do rangi member - po około jednym miesiącu.",
    },
    {
      "title": "Alt-Officer",
      "description": "Alternatywna postać oficera gildii.",
    },
    {
      "title": "Alt",
      "description": "Alternatywna postać danego członka gildii.",
    },
    {
      "title": "Inactive",
      "description": "Tą rangę otrzymuje tymczasowo każdy kto zgłosi dłuższą nieobecność lub przerwę od gry. Nadawana jest też automatycznie w przypadku nieobecności dłuższej niż 6 miesięcy.",
    },
  ],
  "display": function() {
    ranks.ranks.forEach(function(rank) {
      $("#ranks").append(HTMLrankStart);
      var formattedRankTitle = HTMLrankTitle.replace("%rank-title%", rank.title);
      var formattedRankDescription = HTMLrankDescription.replace("%rank-description%", rank.description);
      $(".ranks-entry:last").append(formattedRankTitle, formattedRankDescription);
    });
  }
};

ranks.display();
